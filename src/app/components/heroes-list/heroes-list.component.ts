import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit, OnChanges {
  @Input() filterOption: string;
  @Input() search: string;
  public characters$: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.characters$ = this.dataService.getCharacters();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filterOption) {
      this.filterCharacters();
    }

    if (changes.search) {
      this.searchCaracter();
    }
  }

  private filterCharacters(): void {
    if (this.filterOption !== 'All') {
      this.characters$ = this.dataService.getFilteredCharacters(
        this.filterOption
      );
    } else {
      this.characters$ = this.dataService.getCharacters();
    }
  }

  private searchCaracter(): void {
    if (this.search) {
      if (this.search.length > 0) {
        this.characters$ = this.dataService.getCharacter(this.search);
      } else {
        this.characters$ = this.dataService.getCharacters();
      }
    } else {
      this.characters$ = this.dataService.getCharacters();
    }
  }
}
