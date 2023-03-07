import { Routes } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";

export const acreditacionRoutes: Routes = [
    {
        path: 'acreditacion/index',
        component: IndexComponent,
        loadChildren: () => import('./acreditacion.module').then(m => m.AcreditacionModule)
    }
];