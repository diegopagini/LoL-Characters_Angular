import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeCardComponent } from './heroe-card.component';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [HeroeCardComponent],
  imports: [CommonModule, PipesModule],
  exports: [HeroeCardComponent],
})
export class HeroeCardModule {}
