import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  public hero$: Observable<any>;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(take(1)).subscribe((param: Params) => {
      this.hero$ = this.dataService.getCharacterById(param.id).pipe(
        map((data) => Object.assign({}, data[0])),
        map((data) => {
          const object: any = { ...data };
          const stats = {
            stats: Object.keys(object.stats),
            values: Object.values(object.stats),
          };
          object.stats = stats;
          return object;
        })
      );
    });
  }

  public back(): void {
    this.router.navigateByUrl('/characters');
  }
}
