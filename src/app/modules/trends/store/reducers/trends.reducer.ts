import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import * as TrendsApiActions from '../actions/trends.actions';
import { Trend } from '../../interfaces/trend.interface';
import { TrendState } from '../states/trends.state';

export const trendsFeatureKey = 'trends';

export const adapter: EntityAdapter<Trend> = createEntityAdapter<Trend>();

export const initialState: TrendState = adapter.getInitialState({
  selectedTrend: null,
});

export const trendsReducer = createReducer(
  initialState,
  on(TrendsApiActions.loadTrendsSuccess, (state, { trends }) => {
    return adapter.setAll(trends, state);
  }),
  on(TrendsApiActions.loadTrendsError, (state) => {
    return adapter.removeAll(state);
  }),
  on(
    TrendsApiActions.loadOneTrendSuccess,
    (state, { trend: selectedTrend }): TrendState => {
      return { ...state, selectedTrend };
    }
  ),
  on(TrendsApiActions.loadOneTrendError, (state): TrendState => {
    return { ...state, selectedTrend: null };
  }),
  on(TrendsApiActions.createTrendSuccess, (state, { trend }): TrendState => {
    return adapter.addOne(trend, state);
  }),
  on(TrendsApiActions.editTrendSuccess, (state, { trend }): TrendState => {
    const updateTrend = { ...state.selectedTrend, ...trend } as Trend;
    return { ...state, selectedTrend: updateTrend };
  })
);

export const selectSelectedTrend = (state: TrendState) => state.selectedTrend;

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

// select the array of trend ids
export const selectTrendIds = selectIds;

// select the dictionary of trend entities
export const selectTrendEntities = selectEntities;

// select the array of trends
export const selectAllTrends = selectAll;

// select the total trend count
export const selectTrendTotal = selectTotal;
