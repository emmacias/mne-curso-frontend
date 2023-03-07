import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as GlobalActions from '../../../../ngrx/global/global.actions';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit, OnDestroy {

  saldo: any;
  saldoSubscription: Subscription = new Subscription();

  constructor(
    private store: Store<any>
  ) {}

  ngOnInit(): void { 
    this.saldoSubscription = this.store.select((state) => state?.global?.saldo)
      .subscribe((saldo) => {
        this.saldo = saldo;
      });

    this.ObtenerSaldo();
  }

  ngOnDestroy(): void { 
    this.saldoSubscription.unsubscribe();
    this.store.dispatch(GlobalActions.ClearStoreAction());
  }

  ObtenerSaldo() {
    this.store.dispatch(GlobalActions.GetSaldoAction());
  }
}
