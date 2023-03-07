import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalModule } from './modules/global/global.module';
import { RecargasModule } from './modules/recargas/recargas.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer, metaReducers } from './ngrx/app.reducer';
import { extDevtoolsModules } from './ngrx/store.devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const NGRX_IMPORTS = [
  StoreModule.forRoot(appReducer, { metaReducers }),
  extDevtoolsModules,
  EffectsModule.forRoot([])
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalModule,
    RouterModule,
    RecargasModule,
    HttpClientModule,
    ...NGRX_IMPORTS,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
