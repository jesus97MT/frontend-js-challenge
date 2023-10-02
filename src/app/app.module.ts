import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { LOCALE_ID, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { AppLayoutModule } from './shared/layout';
import { AppMenuModule } from './modules/menu';
import { AppPageNotFoundComponent } from './components/app-page-not-found/app-page-not-found.component';
import { AppProgressBarComponent } from './components/app-progress-bar/app-progress-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppTrendsModule } from './modules/trends';
import { httpInterceptorProviders } from './interceptors/app-http-interceptors';
import { reducers } from './store/reducers';

import localeEs from '@angular/common/locales/es';
import { LoaderFacadeService } from './store/services/loader.facade.service';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    AppProgressBarComponent,
    AppPageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppTrendsModule,
    AppRoutingModule,
    AppLayoutModule,
    AppMenuModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    httpInterceptorProviders,
    LoaderFacadeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
