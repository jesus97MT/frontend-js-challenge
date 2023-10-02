import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';

import { LoaderFacadeService } from '../store/services/loader.facade.service';

@Injectable()
export class AppHttpLoaderInterceptor implements HttpInterceptor {
  constructor(private loaderFacadeService: LoaderFacadeService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderFacadeService.updateLoaderState(true);
    return next
      .handle(req)
      .pipe(finalize(() => this.loaderFacadeService.updateLoaderState(false)));
  }
}
