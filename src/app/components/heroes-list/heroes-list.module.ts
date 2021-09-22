import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeroesListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [HeroesListComponent],
})
export class HeroesListModule {}
