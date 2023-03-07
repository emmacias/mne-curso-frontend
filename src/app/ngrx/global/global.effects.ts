import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { HttpService } from "src/app/services/http.service";
import * as GlobalActions from './global.actions';

@Injectable()
export class GlobalEfects {

    constructor(
        private actions$: Actions,
        private httpService: HttpService
    ) { }

    GetSaldoAction$ = createEffect(() =>
        this.actions$.pipe(
        ofType(GlobalActions.GetSaldoAction),
        mergeMap((action) =>
            this.httpService.GetSaldo().pipe(
            map((res: any) => GlobalActions.SetSaldoAction({ saldo: res.datos }))
    ))));
}