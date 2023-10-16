import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerService } from 'src/app/shared/spinner/spinner.service';


@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  private _spinnerService = inject(SpinnerService)

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._spinnerService.show()
    return next.handle(request).pipe(
      finalize(() => this._spinnerService.hide())
    )
  }
}