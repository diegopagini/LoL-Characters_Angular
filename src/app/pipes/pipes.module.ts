import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { BackgroundPipe } from './background.pipe';

@NgModule({
  declarations: [DomSanitizerPipe, BackgroundPipe],
  imports: [CommonModule],
  exports: [DomSanitizerPipe, BackgroundPipe],
})
export class PipesModule {}
