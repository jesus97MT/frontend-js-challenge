import { createAction, props } from '@ngrx/store';

import { Trend } from '../../interfaces/trend.interface';

export const loadTrends = createAction('[Trends] Load Trends');
export const loadTrendsSuccess = createAction(
  '[Trends] Load Trends Success',
  props<{ trends: Trend[] }>()
);
export const loadTrendsError = createAction('[Trends] Load Trends Error');

export const loadOneTrendSuccess = createAction(
  '[Trends] Load One Trend Success',
  props<{ trend: Trend }>()
);
export const loadOneTrendError = createAction(
  '[Trends/API] Load One Trend Error'
);
