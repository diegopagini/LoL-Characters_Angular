import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { HeroesListModule } from 'src/app/components/heroes-list/heroes-list.module';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, HeroesListModule],
  exports: [CharactersComponent],
})
export class CharactersModule {}
