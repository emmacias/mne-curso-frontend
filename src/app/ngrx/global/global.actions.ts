import { createAction, props } from "@ngrx/store";

export const ClearStoreAction = createAction('[GLOBAL] CLEAR STORE');

export const GetSaldoAction = createAction('[GLOBAL] GET SALDO');

export const SetSaldoAction = createAction(
    '[GLOBAL] SET SALDO', 
    props<{ saldo: any }>()
);