import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer',
})
export class DomSanitizerPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(name: string): any {
    const domImg = `url('/assets/img/champion/loading/${name}_0.jpg')`;
    return this.domSanitizer.bypassSecurityTrustStyle(domImg);
  }
}
