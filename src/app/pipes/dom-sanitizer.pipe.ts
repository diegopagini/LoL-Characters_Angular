import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer',
})
export class DomSanitizerPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(id: string): any {
    const domImg = `url('/assets/img/champion/loading/${id}_0.jpg')`;
    return this.domSanitizer.bypassSecurityTrustStyle(domImg);
  }
}
