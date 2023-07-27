import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IAppState,
  decrementa,
  defineContador,
  incrementa,
} from './store/app.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-app';

  constructor(private store: Store<{ app: IAppState }>) {}

  counter$ = this.store.select('app').pipe(map((e) => e.counter));

  incrementaContador() {
    this.store.dispatch(incrementa());
  }

  decrementaContador() {
    this.store.dispatch(decrementa());
  }

  definirContador(valor: string) {
    const valorTratado = parseFloat(valor);

    this.store.dispatch(defineContador({ payload: valorTratado }));
  }
}
