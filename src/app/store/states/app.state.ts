import { RouterState } from '@ngrx/router-store';
import { LoaderState } from './loader.state';

export interface AppState {
  loader: LoaderState;
  router: RouterState;
}
