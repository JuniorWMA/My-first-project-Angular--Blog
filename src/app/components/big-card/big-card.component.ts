import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input()
  imgBigCard:string='';
  @Input()
  titleBigCard:string='';
  @Input()
  contentBigCard:string='';
  @Input()
  linkBigCard:string="";

  constructor() { }

}
