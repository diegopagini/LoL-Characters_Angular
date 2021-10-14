import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit, OnChanges {
  @Input() filterOption: string;
  public characters$: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.characters$ = this.dataService.getCharacters();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filterCharacters();
  }

  private filterCharacters() {
    if (this.filterOption !== 'All') {
      this.characters$ = this.dataService.getFilteredCharacters(
        this.filterOption
      );
    } else {
      this.characters$ = this.dataService.getCharacters();
    }
  }
}
