import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { BlankValidator } from 'src/app/validators/blank.validator';

import * as itemActions from '../../../../ngrx/module/item/item.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  implements OnInit, OnDestroy {

  object: any;
  objectSubscription: Subscription = new Subscription();
  
  formData: any;
  formDataSubscription: Subscription = new Subscription();

  formGroup!: FormGroup;
  @ViewChild('formRef') formRef!: FormGroupDirective;

  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<any>,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();

    this.formDataSubscription = this.store.select((state) => state?.module?.item?.formData)
      .subscribe(formData => {
        if (formData) {
            this.formData = formData;

            if (this.data.id) {
              this.store.dispatch(itemActions.GetObjectAction({ id: this.data.id, modulo: 'acreditacion' }));
            }
        }
      });

    this.objectSubscription = this.store.select((state) => state?.module?.item?.object)
      .subscribe(object => {
        if (object) {
            this.object = object;
            this.cargarDatosForm();
        }
      });

    this.store.dispatch(itemActions.GetFormDataAction({ id: this.data.id, modulo: 'acreditacion' }));
  }

  ngOnDestroy(): void {
    this.objectSubscription.unsubscribe();
    this.formDataSubscription.unsubscribe();
    this.store.dispatch(itemActions.ClearStoreAction());
  }

  initForm() {
    this.formGroup = this.fb.group({
      valor:        [{ value: null, disabled: (this.data.tipo == 'VER' ? true : false) }, [Validators.required, BlankValidator]],
      formaPagoId:  [{ value: null, disabled: (this.data.tipo == 'VER' ? true : false) }, [Validators.required]]
    });
  }

  cargarDatosForm() {
    this.formGroup.patchValue({
      valor:       this.object ? this.object.valor.toFixed(2) : null,
      formaPagoId: this.object ? this.object.formaPagoId : null
    });
  }

  guardar(event: any) {
    this.formRef.onSubmit(event);
  }

  enviar() {
    if (this.validarForm()) {
      const objeto = {
        ...this.formGroup.value
      };

      if (this.data.id) {
        this.store.dispatch(itemActions.PutAction({ id: this.object.id, object: objeto, modulo: 'acreditacion' }));
      } else {
        this.store.dispatch(itemActions.PostAction({ object: objeto, modulo: 'acreditacion' }));
      }

      this.dialogRef.close();
    }
  }

  validarForm(): boolean {
    let result = true;

    if (!this.formGroup.valid) {
      result = false;

      this.toastr.error('Existen errores en el formulario.', 'Error');
    }

    return result;
  }

  activarFormParaEdicion() {
    this.data.tipo = 'EDITAR';
    this.formGroup.enable();
  }

}

