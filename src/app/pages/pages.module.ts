import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRouterModule } from './pages-router.module';
import { CharactersModule } from './characters/characters.module';

@NgModule({
  imports: [CommonModule, HomeModule, CharactersModule, PagesRouterModule],
  exports: [HomeModule, CharactersModule],
})
export class PagesModule {}
