import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'characters', component: CharactersComponent },
      { path: '**', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PagesRouterModule {}
