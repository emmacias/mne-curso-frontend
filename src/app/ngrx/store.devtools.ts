import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const extDevtoolsModules = [
    StoreDevtoolsModule.instrument({
        maxAge: 25
    })
];