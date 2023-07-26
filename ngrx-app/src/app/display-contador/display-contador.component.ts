import { Component, Input } from '@angular/core';
import { IAppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.scss']
})
export class DisplayContadorComponent {

  constructor(private store: Store<{ app: IAppState }>) { }

  counter$ = this.store.select('app')
    .pipe(
      map((e) => e.counter)
  );

}
