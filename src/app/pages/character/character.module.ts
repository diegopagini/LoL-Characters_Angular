import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { CharacterRoutingModule } from './character-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [CharacterComponent],
  imports: [CommonModule, CharacterRoutingModule, PipesModule, NgxChartsModule],
  exports: [CharacterComponent],
})
export class CharacterModule {}
