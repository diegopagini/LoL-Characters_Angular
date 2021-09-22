import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRouterModule } from './pages-router.module';

@NgModule({
  imports: [CommonModule, HomeModule, PagesRouterModule],
  exports: [HomeModule],
})
export class PagesModule {}
