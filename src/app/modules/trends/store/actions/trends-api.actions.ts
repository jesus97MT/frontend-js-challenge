import { createAction, props } from '@ngrx/store';

import { Trend } from '../../interfaces/trend.interface';

export const loadTrendsSuccess = createAction(
  '[Trends/API] Load Trends Success',
  props<{ trends: Trend[] }>()
);

export const loadTrendsError = createAction('[Trends/API] Load Trends Error');

export const loadOneTrendSuccess = createAction(
  '[Trends/API] Load One Trend Success',
  props<{ trend: Trend }>()
);

export const loadOneTrendError = createAction(
  '[Trends/API] Load One Trend Error'
);
