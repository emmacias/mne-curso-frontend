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

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectInFocusDirective } from 'src/app/directives/select-in-focus.directive';
import { CompleteDecimalsDirective } from 'src/app/directives/complete-decimals.directive';
import { MaskDecimalPositivoDirective } from 'src/app/directives/mask-decimal-positivo.directive';


@NgModule({
  declarations: [
    MenuSuperiorComponent,
    MenuLateralComponent,
    TemplateComponent,

    MaskDecimalPositivoDirective,
    CompleteDecimalsDirective,
    SelectInFocusDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      enableHtml: true
    }),
    
    StoreModule.forFeature(moduleReducer.moduleFeatureKey, moduleReducer.reducer),
    StoreModule.forFeature(globalReducer.moduleFeatureKey, globalReducer.reducer),
    EffectsModule.forFeature([IndexEfects, ItemEfects, GlobalEfects]),

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule,
    
    TemplateComponent,

    ToastrModule,

    MaskDecimalPositivoDirective,
    CompleteDecimalsDirective,
    SelectInFocusDirective,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule
  ]
})
export class GlobalModule { }
