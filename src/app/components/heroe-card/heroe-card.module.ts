import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeCardComponent } from './heroe-card.component';

@NgModule({
  declarations: [HeroeCardComponent],
  imports: [CommonModule],
  exports: [HeroeCardComponent],
})
export class HeroeCardModule {}
