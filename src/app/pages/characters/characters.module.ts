import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { HeroesListModule } from 'src/app/components/heroes-list/heroes-list.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    HeroesListModule,
    CharactersRoutingModule,
    RouterModule,
  ],
  exports: [CharactersComponent],
})
export class CharactersModule {}
