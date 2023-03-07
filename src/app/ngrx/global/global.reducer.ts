import { Action, createReducer, on } from "@ngrx/store";

import * as GlobalActions from './global.actions';

export interface State {
    saldo: any;
}

export const initialState: State = {
    saldo: {}
}

const globalReducer = createReducer(
    initialState,
    on(GlobalActions.ClearStoreAction, (state) => ({ ...state, saldo: { ...initialState.saldo } })),
    on(GlobalActions.GetSaldoAction, (state) => ({ ...state })),
    on(GlobalActions.SetSaldoAction, (state,  { saldo }) => ({ ...state, saldo })),
);

export function reducer(state: State | undefined, action: Action) {
    return globalReducer(state, action);
}

export const moduleFeatureKey = 'global';