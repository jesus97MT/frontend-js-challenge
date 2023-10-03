import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppTrendsRoutingModule } from './app-trends-routing.module';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { TrendDetailComponent } from './components/trend-detail/trend-detail.component';
import { TrendService } from './services/trend.service';
import { TrendsListComponent } from './components/trends-list/trends-list.component';
import { trendsFeatureKey, trendsReducer } from './store/reducers';
import { trendsEffects } from './store/effects';
import { TrendFacadeService } from './services/trend.facade.service';
import { ButtonModule } from 'src/app/shared/button/button.module';

@NgModule({
  declarations: [TrendsListComponent, TrendDetailComponent],
  imports: [
    CommonModule,
    AppTrendsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(trendsFeatureKey, trendsReducer),
    EffectsModule.forFeature(trendsEffects),
    ButtonModule,
  ],
  exports: [TrendsListComponent],
  providers: [
    TrendService,
    TrendFacadeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AppTrendsModule {}
