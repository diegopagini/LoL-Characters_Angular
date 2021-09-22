import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  public characters$: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.characters$ = this.dataService.getCharacters().pipe(tap(console.log));
  }
}
