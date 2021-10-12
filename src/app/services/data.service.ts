import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Hero } from '../interfaces/hero.interface';

const api = environment.url;
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getCharacters(): Observable<Hero[]> {
    return this.http.get<Hero[]>(api).pipe(
      pluck('data'),
      map((data: any) => Object.values(data))
    );
  }
}
