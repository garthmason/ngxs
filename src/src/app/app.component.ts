import { Component } from '@angular/core';
import { Observable} from 'rxjs';

import { Store, Select } from '@ngxs/store';
import { AppState, AppStateModel} from './state/app.state';
import { AddItem } from './state/app.actions';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6 ';

  constructor(private store: Store) {}

  @Select(AppState) app$ : Observable<AppStateModel>;

  addItem(val: string){
    this.store.dispatch(new AddItem(0, val));
  }
}
