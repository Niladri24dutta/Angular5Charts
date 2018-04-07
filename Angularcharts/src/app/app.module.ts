import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {routing} from './app.routes';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LinechartComponent } from './linechart/linechart.component';
import {WeatherService} from './weather.service';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LinechartComponent,
    BarchartComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
