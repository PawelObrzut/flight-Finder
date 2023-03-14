import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalMenuComponent,
    HeaderComponent,
    SearchFormComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
