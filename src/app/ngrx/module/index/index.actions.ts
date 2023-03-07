import { createAction, props } from "@ngrx/store";

export const ClearStoreAction = createAction('[INDEX] CLEAR STORE');

export const GetItemsAction = createAction(
    '[INDEX] GET ITEMS', 
    props<{ modulo: string }>()
);

export const GetItemsPagAction = createAction(
    '[INDEX] GET ITEMS PAG', 
    props<{ modulo: string, cantidad: number, pagina: number, textBusqueda?: string }>()
);

export const SetItemsAction = createAction(
    '[INDEX] SET ITEMS', 
    props<{ items: any[] }>()
);

export const SetItemsPagAction = createAction(
    '[INDEX] SET ITEMS PAG', 
    props<{ items: any[], count: number }>()
);

export const DeleteItemsAction = createAction('[INDEX] DELETE ITEMS',
  props<{ modulo: string, ids: any[] }>()
);

export const GetCamposAction = createAction(
    '[INDEX] GET CAMPOS', 
    props<{ itemId: number }>()
);

export const SetCamposAction = createAction(
    '[INDEX] SET CMAPOS', 
    props<{ campos: any[] }>()
);