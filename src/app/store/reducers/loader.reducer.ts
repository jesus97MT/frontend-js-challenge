import { createReducer, on } from '@ngrx/store';

import * as LoaderActions from '../actions/loader.actions';
import { LoaderState } from '../states/loader.state';

export const initialState: LoaderState = {
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(
    LoaderActions.updateLoaderState,
    (state, { isLoading }): LoaderState => ({ ...state, isLoading })
  )
);

export const selectIsLoadingState = (state: LoaderState) => state.isLoading;
