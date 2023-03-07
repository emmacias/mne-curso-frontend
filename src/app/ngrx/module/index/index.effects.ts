import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { HttpService } from "src/app/services/http.service";
import * as IndexActions from './index.actions';

@Injectable()
export class IndexEfects {

    constructor(
        private actions$: Actions,
        private httpService: HttpService
    ) { }

    GetItemsAction$ = createEffect(() => 
        this.actions$.pipe(
            ofType(IndexActions.GetItemsAction),
            mergeMap((action: any) => 
                this.httpService.ObtenerElementos(action.modulo).pipe(
                    map((resp: any) => IndexActions.SetItemsAction({ items: resp.datos }))
                ))));

    GetItemsPagAction$ = createEffect(() => 
        this.actions$.pipe(
            ofType(IndexActions.GetItemsPagAction),
            mergeMap((action: any) => 
                this.httpService.Gets(action.modulo, action.cantidad, action.pagina, action.textBusqueda).pipe(
                    map((resp: any) => IndexActions.SetItemsPagAction({ items: resp.datos.elementos, count: resp.datos.cantidadTotal }))
                ))));

    DeleteItemsAction$ = createEffect(() =>
        this.actions$.pipe(
            ofType(IndexActions.DeleteItemsAction),
            mergeMap((action) =>
            this.httpService.Delete(action.modulo, action.ids).pipe(
                map((res: any) => IndexActions.GetItemsPagAction({ modulo: action.modulo, cantidad: 10, pagina: 0, textBusqueda: '' }))
            ))));

    GetCamposAction$ = createEffect(() => 
        this.actions$.pipe(
            ofType(IndexActions.GetCamposAction),
            mergeMap((action: any) => 
                this.httpService.ObtenerCamposDeProducto(action.itemId).pipe(
                    map((resp: any) => IndexActions.SetCamposAction({ campos: resp.datos }))
                ))));
}