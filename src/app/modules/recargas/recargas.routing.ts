import { Routes } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";

export const recargasRoutes: Routes = [
    {
        path: '',
        component: IndexComponent,
        loadChildren: () => import('./recargas.module').then(m => m.RecargasModule)
    }
];