import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {MapService} from './service/map.service'
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AppRoutes } from './app.routes';
import { FormsModule,ReactiveFormsModule, FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
