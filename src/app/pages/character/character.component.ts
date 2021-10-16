import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, zip } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Stats } from 'src/app/interfaces/hero.interface';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  public hero$: Observable<any>;
  public data: Stats[] = [];
  public view: [number, number];
  private isMobile$: Observable<boolean>;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.isMobile$ = this.breakpointService.isMobile$();

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

    this.configureRadar();
  }

  public back(): void {
    this.router.navigateByUrl('/characters');
  }

  private configureRadar() {
    zip(this.isMobile$, this.hero$).subscribe((data) => {
      const [mobile, hero] = data;

      if (mobile) {
        this.view = [300, 300];
      } else {
        this.view = [900, 500];
      }

      const results: any = [];
      for (let i = 0; i < hero.stats.stats.length; i++) {
        results.push({
          name: hero.stats.stats[i],
          value: hero.stats.values[i],
        });
      }
      this.data = results;
    });
  }
}
