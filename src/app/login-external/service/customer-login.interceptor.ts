import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = [
      {"text": "LosowyTEST"},
      {"text": "TESTlosowy"},
  ]

  localStorage.setItem("token", JSON.stringify(token));

  let data = JSON.parse(localStorage.getItem("token")!);
    return next.handle(data);
  }
}
