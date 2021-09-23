import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroeCardModule } from '../heroe-card/heroe-card.module';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  declarations: [HeroesListComponent],
  imports: [CommonModule, HttpClientModule, HeroeCardModule, SpinnerModule],
  exports: [HeroesListComponent],
})
export class HeroesListModule {}
