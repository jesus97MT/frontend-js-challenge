import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { TrendDetailComponent } from './components/trend-detail/trend-detail.component';
import { TrendsListComponent } from './components/trends-list/trends-list.component';

const trendsRoutes: Route[] = [
  { path: 'trends', component: TrendsListComponent },
  { path: 'trends/:id', component: TrendDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(trendsRoutes)],
  exports: [RouterModule],
})
export class AppTrendsRoutingModule {}
