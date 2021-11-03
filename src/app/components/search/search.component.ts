import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('input', { static: true }) input: ElementRef;
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  public searchValue: string;
  public roles: string[] = [
    'All',
    'Mage',
    'Assassin',
    'Fighter',
    'Tank',
    'Support',
    'Marksman',
  ];

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => {
          this.emitSearch();
        })
      )
      .subscribe();
  }

  public emitFilter(event: any): void {
    const value = event.target.value;
    this.filter.emit(value);
  }

  public emitSearch(): void {
    this.search.emit(this.searchValue);
  }
}
