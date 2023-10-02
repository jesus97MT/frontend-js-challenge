import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateLoaderState } from '../actions/loader.actions';

@Injectable()
export class LoaderFacadeService {
  constructor(private store: Store) {}

  public updateLoaderState(isLoading: boolean): void {
    return this.store.dispatch(updateLoaderState({ isLoading }));
  }
}
