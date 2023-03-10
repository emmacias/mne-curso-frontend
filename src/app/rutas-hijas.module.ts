import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { acreditacionRoutes } from "./modules/acreditacion/acreditacion.routing";
import { proveedorRoutes } from "./modules/proveedor/proveedor.routing";
import { recargasRoutes } from "./modules/recargas/recargas.routing";

const routes: Routes = [
    ...recargasRoutes,
    ...acreditacionRoutes,
    ...proveedorRoutes
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RutasHijasModule { }