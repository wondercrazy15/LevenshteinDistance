import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LevenshteinDistanceComponent } from './levenshtein-distance/levenshtein-distance.component';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { API } from 'src/services/api';
import { HomeComponent } from './home/home.component';
import { HeaderInterceptor } from '../services/HeaderInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    LevenshteinDistanceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    API,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
