import { Action, createReducer, on } from "@ngrx/store";

import * as IndexActions from './index/index.actions';
import * as ItemActions from './item/item.actions';

export interface State {
    index: any;
    item: any;
}

export const initialState: State = {
    index: {
        items: undefined,
        count: undefined,
        campos: undefined
    },
    item: {
        object: undefined,
        formData: undefined
    }
}

const moduleReducer = createReducer(
    initialState,
    // INDEX
    on(IndexActions.ClearStoreAction, (state) => ({ ...state, index: { ...initialState.index } })),
    on(IndexActions.GetItemsAction, (state,  { modulo }) => ({ ...state })),
    on(IndexActions.GetItemsPagAction, (state,  { modulo, cantidad, pagina, textBusqueda }) => ({ ...state })),
    on(IndexActions.SetItemsAction, (state,  { items }) => ({ ...state, index: { ...state.index, items } })),
    on(IndexActions.SetItemsPagAction, (state,  { items, count }) => ({ ...state, index: { ...state.index, items, count } })),
    on(IndexActions.DeleteItemsAction, (state, { modulo, ids }) => ({ ...state })),
    on(IndexActions.GetCamposAction, (state, { itemId }) => ({ ...state })),
    on(IndexActions.SetCamposAction, (state,  { campos }) => ({ ...state, index: { ...state.index, campos } })),
    // ITEM
    on(ItemActions.ClearStoreAction, (state) => ({ ...state, item: { ...initialState.item } })),
    on(ItemActions.GetObjectAction, (state, { id, modulo }) => ({ ...state })),
    on(ItemActions.SetObjectAction, (state, { object }) => ({ ...state, item: { ...state.item, object } })),
    on(ItemActions.PostAction, (state, { object, modulo }) => ({ ...state })),
    on(ItemActions.PutAction, (state, { id, object, modulo }) => ({ ...state })),
    on(ItemActions.GetFormDataAction, (state, { id, modulo }) => ({ ...state })),
    on(ItemActions.SetFormDataAction, (state, { formData }) => ({ ...state, item: { ...state.item, formData } })),
);

export function reducer(state: State | undefined, action: Action) {
    return moduleReducer(state, action);
}

export const moduleFeatureKey = 'module';