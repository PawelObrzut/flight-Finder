import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OptionsFormComponent } from './components/options-form/options-form.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalMenuComponent,
    HeaderComponent,
    SearchFormComponent,
    AboutSectionComponent,
    HomePageComponent,
    OptionsFormComponent,
    ResultsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
