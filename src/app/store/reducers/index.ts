import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterState } from '@ngrx/router-store';

import * as fromLoaderReducer from './loader.reducer';
import { LoaderState } from '../states/loader.state';

export interface State {
  loader: LoaderState;
  router: RouterState;
}

export const reducers: ActionReducerMap<State> = {
  loader: fromLoaderReducer.reducer,
  router: routerReducer,
};
