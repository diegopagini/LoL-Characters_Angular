import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListModule } from './heroes-list/heroes-list.module';
import { HeroeCardModule } from './heroe-card/heroe-card.module';

@NgModule({
  imports: [CommonModule, HeroesListModule, HeroeCardModule],
  exports: [HeroesListModule, HeroeCardModule],
})
export class ComponentsModule {}
