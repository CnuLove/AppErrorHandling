import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CustomErrorHandle } from './CustomerErrorHandler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { globalHttpErrorhandlingInterceptor } from './global-http-errorhandling.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    //provideHttpClient(),
    provideHttpClient(withInterceptors([globalHttpErrorhandlingInterceptor])),
    {provide:ErrorHandler,useClass:CustomErrorHandle}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
