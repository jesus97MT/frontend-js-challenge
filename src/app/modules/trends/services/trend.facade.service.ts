import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TrendState } from '../store/states/trends.state';
import { loadTrends } from '../store/actions/trends.actions';
import { selectTrendsByProvider } from '../store/selectors';

@Injectable()
export class TrendFacadeService {
  constructor(private store: Store<TrendState>) {}

  public trends$ = this.store.select(selectTrendsByProvider);

  public loadTrends(): void {
    return this.store.dispatch(loadTrends());
  }
}
