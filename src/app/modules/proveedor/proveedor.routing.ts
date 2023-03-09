import { Routes } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";

export const proveedorRoutes: Routes = [
    {
        path: 'proveedor/index',
        component: IndexComponent,
        loadChildren: () => import('./proveedor.module').then(m => m.ProveedorModule)
    }
];