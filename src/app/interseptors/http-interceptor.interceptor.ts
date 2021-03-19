import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request.headers.set('Authorization', 'Bearer ' + 'BQBsLZhj-vFbCTh1J6qiARQxsuHeKrp3E21Ru6ChbzGuELXr7Q5fZPxqP_7rB_Hp3Va6IgdCrkifiN11j6sR-o3M7mHLKsI1Ar3CTJroV8fDumrbnn9USvpx_bsIXrnS8vFZbiCYwNT0FjUzCJT61l3Z_iFLKm5H5ik')

    return next.handle(request);
  }
}
