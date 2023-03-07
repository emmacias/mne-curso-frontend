import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { HttpService } from "src/app/services/http.service";
import * as ItemActions from './item.actions';
import * as IndexActions from '../index/index.actions';

@Injectable()
export class ItemEfects {

    constructor(
        private actions$: Actions,
        private httpService: HttpService
    ) { }

    GetObjectAction$ = createEffect(() =>
        this.actions$.pipe(
        ofType(ItemActions.GetObjectAction),
        mergeMap((action) =>
            this.httpService.Get(action.modulo, action.id).pipe(
            map((res: any) => ItemActions.SetObjectAction({ object: res.datos }))
    ))));

    PostAction$ = createEffect(() =>
        this.actions$.pipe(
        ofType(ItemActions.PostAction),
        mergeMap((action) =>
            this.httpService.Post(action.modulo, action.object).pipe(
            map((res: any) => IndexActions.GetItemsPagAction({ modulo: action.modulo, cantidad: 10, pagina: 0, textBusqueda: '' }))
    ))));

    PutAction$ = createEffect(() =>
        this.actions$.pipe(
        ofType(ItemActions.PutAction),
        mergeMap((action) =>
            this.httpService.Put(action.modulo, action.id, action.object).pipe(
            map((res: any) => IndexActions.GetItemsPagAction({ modulo: action.modulo, cantidad: 10, pagina: 0, textBusqueda: '' }))
    ))));

    GetFormDataAction$ = createEffect(() =>
        this.actions$.pipe(
        ofType(ItemActions.GetFormDataAction),
        mergeMap((action) =>
            this.httpService.GetFormData(action.id, action.modulo).pipe(
            map((res: any) => ItemActions.SetFormDataAction({ formData: res.datos }))
    ))));
}