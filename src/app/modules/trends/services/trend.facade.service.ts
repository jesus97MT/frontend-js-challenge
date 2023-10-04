import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TrendState } from '../store/states/trends.state';
import { loadTrends, createTrend } from '../store/actions/trends.actions';
import { selectTrendsByProvider } from '../store/selectors';
import { TrendFormGroup } from '../interfaces/trend.interface';

@Injectable()
export class TrendFacadeService {
  constructor(private store: Store<TrendState>) {}

  public trends$ = this.store.select(selectTrendsByProvider);

  public loadTrends(): void {
    return this.store.dispatch(loadTrends());
  }
  public createTrend(trend: TrendFormGroup): void {
    return this.store.dispatch(createTrend({ trend }));
  }
}
