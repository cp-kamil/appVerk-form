import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login-external/container/login.component";
import { FieldComponent } from "./shared/field.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CustomeInterceptor } from "./login-external/service/customer-login.interceptor";
import { IsSignedInGuard } from "./login-external/service/isSignedInGuard.guard";
import { AuthService } from "./login-external/service/auth.service";
import { IsNotSignedInGuard } from "./login-external/service/isNotSignedInGuard.guard";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FieldComponent,
    DashboardComponent,
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    IsSignedInGuard,
    IsNotSignedInGuard,
    AuthService,
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomeInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
