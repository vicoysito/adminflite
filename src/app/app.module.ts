import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { RouteRoutingModule, routingComponents } from './route/route-routing.module';
import { SecureModuleService } from './secure-module.service';

@NgModule({
  declarations: [
    AppComponent,routingComponents
  ],
  imports: [
    BrowserModule,RouteRoutingModule
  ],
  providers: [SecureModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
