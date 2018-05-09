import { State, Action, StateContext } from '@ngxs/store';
import {AddItem} from './app.actions';

export interface Item { 
  id: number;
  name: string;
}

export interface AppStateModel { 
   items: Item[];
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    items: []
  }
})
export class AppState { 

  @Action(AddItem)
  addItem(ctx: StateContext<AppStateModel>, action: AddItem){
     const state = ctx.getState();

        ctx.patchState({
            items: [
                ...state.items,
                { id: action.id, name: action.name}
            ]
        });
  }

}


