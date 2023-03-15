import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'results', component: ResultsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
