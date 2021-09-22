import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private api: string =
    'http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json';

  constructor(private http: HttpClient) {}

  public getCharacters(): Observable<any> {
    return this.http.get(this.api).pipe(
      pluck('data'),
      map((data: any) => Object.values(data))
    );
  }
}
