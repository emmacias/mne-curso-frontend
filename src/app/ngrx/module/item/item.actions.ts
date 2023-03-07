import { createAction, props } from "@ngrx/store";

export const ClearStoreAction = createAction('[ITEM] CLEAR STORE');

export const GetObjectAction = createAction('[ITEM] GET OBJECT',
  props<{ id: number, modulo: string }>()
);

export const SetObjectAction = createAction('[ITEM] SET OBJECT',
  props<{ object: any }>()
);

export const PostAction = createAction('[ITEM] SET POST',
  props<{ object: any, modulo: string }>()
);

export const PutAction = createAction('[ITEM] SET PUT',
  props<{ id: number, object: any, modulo: string }>()
);