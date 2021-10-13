import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeCardComponent } from './heroe-card.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroeCardComponent],
  imports: [CommonModule, PipesModule, RouterModule],
  exports: [HeroeCardComponent],
})
export class HeroeCardModule {}
