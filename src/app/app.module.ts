import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ClientsModule } from './clients/clients.module';
import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './template/template.module';
import { ServiceProvidedModule } from './service-provided/service-provided.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'

import { ClientsService } from './clients.service';
import { ServiceProvidedService } from './service-provided.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    ServiceProvidedModule
  ],
  providers: [
    ClientsService,
    ServiceProvidedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
