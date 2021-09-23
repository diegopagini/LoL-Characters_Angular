import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.scss'],
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: any;

  constructor() {}

  ngOnInit(): void {}
}
