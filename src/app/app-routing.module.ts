import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './modules/global/components/template/template.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    loadChildren: () => import('./rutas-hijas.module').then(m => m.RutasHijasModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
