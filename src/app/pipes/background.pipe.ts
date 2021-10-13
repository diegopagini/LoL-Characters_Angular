import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'background',
})
export class BackgroundPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(id: string): any {
    const domImg = `url('/assets/img/champion/splash/${id}_0.jpg')`;
    return this.domSanitizer.bypassSecurityTrustStyle(domImg);
  }
}
