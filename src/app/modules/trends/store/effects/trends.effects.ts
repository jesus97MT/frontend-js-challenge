import { editTrend } from './../actions/trends.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, filter, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { routerNavigationAction } from '@ngrx/router-store';

import * as TrendsActions from '../actions/trends.actions';
import { TrendService } from '../../services/trend.service';
import { Router } from '@angular/router';

@Injectable()
export class TrendsEffects {
  loadTrends$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TrendsActions.loadTrends),
      mergeMap(() =>
        this.trendService.getAll().pipe(
          map((trends) => TrendsActions.loadTrendsSuccess({ trends })),
          catchError(() => of(TrendsActions.loadTrendsError()))
        )
      )
    );
  });

  loadOneTrend$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(routerNavigationAction),
      filter(({ payload }) => /^\/trends\/[a-z0-9]+$/.test(payload.event.url)),
      map(({ payload }) => payload.routerState.root.firstChild?.params['id']),
      switchMap((id: string) =>
        this.trendService.getOne(id).pipe(
          map((trend) => TrendsActions.loadOneTrendSuccess({ trend })),
          catchError(() => of(TrendsActions.loadOneTrendError()))
        )
      )
    );
  });

  createTrend$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TrendsActions.createTrend),
      mergeMap((data) =>
        this.trendService.createOne(data?.trend).pipe(
          map((trend) => TrendsActions.createTrendSuccess({ trend })),
          catchError(() => of(TrendsActions.createTrendError()))
        )
      )
    );
  });

  editTrend$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TrendsActions.editTrend),
      mergeMap((data) =>
        this.trendService.editOne(data?.trend, data?.id).pipe(
          map((trend) => TrendsActions.editTrendSuccess({ trend })),
          catchError(() => of(TrendsActions.editTrendError()))
        )
      )
    );
  });

  removeTrend$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TrendsActions.removeTrend),
      mergeMap((data) =>
        this.trendService.removeOne(data?.id).pipe(
          map(() => this.router.navigate(['/trends'])),
          map(() => TrendsActions.removeTrendSuccess()),
          catchError(() => of(TrendsActions.editTrendError()))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private trendService: TrendService,
    private router: Router
  ) {}
}
