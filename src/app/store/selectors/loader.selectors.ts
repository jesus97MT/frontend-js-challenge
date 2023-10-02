import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromLoaderReducer from '../reducers/loader.reducer';
import { LoaderState } from '../states/loader.state';

export const selectLoaderState = createFeatureSelector<LoaderState>('loader');

export const selectIsLoadingState = createSelector(
  selectLoaderState,
  fromLoaderReducer.selectIsLoadingState
);
