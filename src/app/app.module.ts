import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { IconsModule } from './icons/icons.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, WeatherComponent],
  imports: [BrowserModule, AppRoutingModule, IconsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
