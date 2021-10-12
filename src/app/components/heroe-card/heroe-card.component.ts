import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.scss'],
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: Hero;
  public bgHeroeImage: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.heroe);
  }
}
