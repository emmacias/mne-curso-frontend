import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { TemplateComponent } from './components/template/template.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';


import * as moduleReducer from '../../ngrx/module/module.reducer';
import { EffectsModule } from '@ngrx/effects';
import { IndexEfects } from 'src/app/ngrx/module/index/index.effects';

import * as globalReducer from '../../ngrx/global/global.reducer';
import { GlobalEfects } from 'src/app/ngrx/global/global.effects';
import { ItemEfects } from 'src/app/ngrx/module/item/item.effects';


@NgModule({
  declarations: [
    MenuSuperiorComponent,
    MenuLateralComponent,
    TemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(moduleReducer.moduleFeatureKey, moduleReducer.reducer),
    StoreModule.forFeature(globalReducer.moduleFeatureKey, globalReducer.reducer),
    EffectsModule.forFeature([IndexEfects, ItemEfects, GlobalEfects])
  ],
  exports: [
    TemplateComponent
  ]
})
export class GlobalModule { }
