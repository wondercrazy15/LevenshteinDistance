import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevenshteinDistanceComponent } from './levenshtein-distance/levenshtein-distance.component';

const routes: Routes = [
  {
    path: 'levenshteinDistance',
    component: LevenshteinDistanceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
