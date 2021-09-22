import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListModule } from './heroes-list/heroes-list.module';

@NgModule({
  imports: [CommonModule, HeroesListModule],
  exports: [HeroesListModule],
})
export class ComponentsModule {}
