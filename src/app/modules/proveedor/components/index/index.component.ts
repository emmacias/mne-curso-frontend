import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { FormComponent } from '../form/form.component';
import * as IndexActions from '../../../../ngrx/module/index/index.actions';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent  implements OnInit, OnDestroy {

  proveedores: any[] = [];
  proveedoresSubscription: Subscription = new Subscription();

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);
  selection = new SelectionModel<any>(true, []);

  cantidadTotal = 0;
  cantidadPorPagina = 10;
  numeroDePagina = 0;
  pageSizeOptions: number[] = [1, 5, 10, 25, 100];

  textoBusqueda = '';

  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.proveedoresSubscription = this.store.select((state) => state?.module?.index)
      .subscribe((index) => {
        this.proveedores = index.items;

        this.dataSource.data = this.proveedores;
        this.cantidadTotal = index.count;

        this.selection = new SelectionModel<any>(true, []);
      });

    this.displayedColumns = ['select', 'nombre', 'bloqueado', 'urlServicios'];

    this.obtenerItems();
  }

  ngOnDestroy(): void {
    this.proveedoresSubscription.unsubscribe();
    this.store.dispatch(IndexActions.ClearStoreAction());
  }

  obtenerItems() {
    this.store.dispatch(IndexActions.GetItemsPagAction({ modulo: 'proveedor', cantidad: this.cantidadPorPagina, pagina: this.numeroDePagina, textBusqueda: this.textoBusqueda }));
  }

  cambiarPagina(event: any) {
    this.cantidadPorPagina = event.pageSize;
    this.numeroDePagina = event.pageIndex;
    this.obtenerItems();
  }

  mostrarItem(itemId: number) {
    this.dialog.open(FormComponent, {
      disableClose: true,
      autoFocus: true,
      closeOnNavigation: false,
      position: { top: '30px' },
      width: '400px',
      data: {
        tipo: 'VER',
        id: itemId
      }
    });
  }

  crearItem() {
    this.dialog.open(FormComponent, {
      disableClose: true,
      autoFocus: true,
      closeOnNavigation: false,
      position: { top: '30px' },
      width: '400px',
      data: {
        tipo: 'CREAR'
      }
    });
  }

  estanTodosSeleccionados() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  seleccionarTodo() {
    this.estanTodosSeleccionados() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  seleccionar(row: any) {
    this.selection.toggle(row);
  }

  eliminar() {
    let itemsSelected: number[] = [];

    this.selection.selected.forEach(element => {
      itemsSelected.push(element.id);
    });

    if (itemsSelected.length == 0) {
      this.toastr.error('No ha seleccionado elementos para borrar.', 'Error');
    }

    this.store.dispatch(IndexActions.DeleteItemsAction({ ids: itemsSelected, modulo: 'proveedor' }));
  }
}
