import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  imgSmallCard:string='';
  @Input()
  titleSmallCard:string='';
  @Input()
  linkSmallCard:string="";


  constructor() { }

}
