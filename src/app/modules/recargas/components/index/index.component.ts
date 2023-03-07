import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import * as IndexActions from '../../../../ngrx/module/index/index.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  tab = 1;

  productos: any[] = [];
  productosSubscription: Subscription = new Subscription();

  campos: any[] = [];
  camposSubscription: Subscription = new Subscription();

  productoSeleccionado: any = null;

  constructor(
    private httpService: HttpService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.productosSubscription = this.store.select((state) => state?.module?.index?.items)
      .subscribe((items) => {
        this.productos = items;
      });

    this.camposSubscription = this.store.select((state) => state?.module?.index?.campos)
      .subscribe((campos) => {
        if (campos) {
          this.campos = campos;
          this.tab = 2;
        }
      });

    this.ObtenerProductos();
  }

  ngOnDestroy(): void {
    this.productosSubscription.unsubscribe();
    this.camposSubscription.unsubscribe();
    this.store.dispatch(IndexActions.ClearStoreAction());
  }

  ObtenerProductos() {
    this.store.dispatch(IndexActions.GetItemsAction({ modulo: 'item' }));
  }

  seleccionarProducto(producto: any) {
    this.productoSeleccionado = producto;
    this.store.dispatch(IndexActions.GetCamposAction({ itemId: producto.id }));
  }
}
