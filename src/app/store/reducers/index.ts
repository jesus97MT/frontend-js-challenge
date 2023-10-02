import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { routerReducer } from '@ngrx/router-store';
import * as fromLoaderReducer from './loader.reducer';

/** REDUCERS */
export const reducers: ActionReducerMap<AppState> = {
  loader: fromLoaderReducer.reducer,
  router: routerReducer,
};
