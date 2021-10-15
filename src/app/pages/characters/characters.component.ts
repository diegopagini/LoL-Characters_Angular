import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent {
  public filterOption: string;
  public search: string;

  public filterCharacters(event: string): void {
    this.filterOption = event;
  }

  public getCharactersByName(event: string): void {
    this.search = event;
  }
}
