import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  public filterOption: string;

  public filterCharacters(event: string): void {
    this.filterOption = event;
  }
}
