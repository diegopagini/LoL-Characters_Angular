import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListModule } from './heroes-list/heroes-list.module';
import { HeroeCardModule } from './heroe-card/heroe-card.module';
import { SpinnerModule } from './spinner/spinner.module';
import { SearchModule } from './search/search.module';

@NgModule({
  imports: [
    CommonModule,
    HeroesListModule,
    HeroeCardModule,
    SpinnerModule,
    SearchModule,
  ],
  exports: [HeroesListModule, HeroeCardModule, SpinnerModule],
})
export class ComponentsModule {}
