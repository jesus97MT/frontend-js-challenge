import { createAction, props } from '@ngrx/store';

import { Trend, TrendFormGroup } from '../../interfaces/trend.interface';

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

export const createTrend = createAction(
  '[Trends] Create Trend',
  props<{ trend: TrendFormGroup }>()
);
export const createTrendSuccess = createAction(
  '[Trends] Create Trend Success',
  props<{ trend: Trend }>()
);
export const createTrendError = createAction('[Trends] Create Trend Error');

export const editTrend = createAction(
  '[Trends] Edit Trend',
  props<{ trend: TrendFormGroup }>()
);
export const editTrendSuccess = createAction(
  '[Trends] Edit Trend Success',
  props<{ trend: Trend }>()
);
export const editTrendError = createAction('[Trends] Edit Trend Error');

export const removeTrend = createAction(
  '[Trends] Remove Trend',
  props<{ trend: Trend }>()
);
export const removeTrendSuccess = createAction(
  '[Trends] Remove Trend Success',
  props<{ trends: Trend[] }>()
);
export const removeTrendError = createAction('[Trends] Remove Trend Error');
