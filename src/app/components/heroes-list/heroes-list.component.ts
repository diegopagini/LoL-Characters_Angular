import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  private api: string =
    'http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.api).pipe(pluck('data')).subscribe(console.log);
  }
}
