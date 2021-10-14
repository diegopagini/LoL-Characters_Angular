import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();
  public roles: string[] = [
    'All',
    'Mage',
    'Assassin',
    'Fighter',
    'Tank',
    'Support',
    'Marksman',
  ];

  public emitFilter(event: any): void {
    const value = event.target.value;
    this.filter.emit(value);
  }
}
