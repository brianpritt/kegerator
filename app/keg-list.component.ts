import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template:
  `
  <!--<select>
    <option value="allKegs">All Kegs</option>
    <option value="nearlyEmpty">Nearly Empty</option>
    <option value="spent">Spent</option>
  </select>-->
  <div  *ngFor='let currentKeg of childKegList | fullness'>
    <div class="col s3 beers">
        <div class="panel">
          <h4 class="beer-title">{{currentKeg.name}} : {{currentKeg.brand}}</h4>
          <div>Price: {{currentKeg.price}}</div>
          <div>ABV: {{currentKeg.alcoholContent}}</div>
          <div>Pints available: {{currentKeg.volume/16}}</div>
        </div>
      <div class="glass" *ngIf="employeeView" (click)='isItKicked(currentKeg); pourDrink(currentKeg)'><span [style.height] = "(currentKeg.volume *.0845)" class="liquid" ></span>
      </div><br>
        <button *ngIf="employeeView" class="btn waves-effect waves-light" (click)='editKeg(currentKeg)'>Edit!</button>
    </div>
  </div>
  `
})
export class KegListComponent{
  @Input() childKegList: Keg[];
  @Input() employeeView
  @Output() clickSender = new EventEmitter();
  @Output() volumeSender = new EventEmitter();
  @Output() kickedSender = new EventEmitter();

  editKeg(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  pourDrink(currentKeg) {
    this.volumeSender.emit(currentKeg);
  }
  isItKicked(currentKeg){
    this.kickedSender.emit(currentKeg);
  }
  liquidMethod(currentKeg) {
    const style =  'style="height:{{currentKeg.volume-1900}}px;"'
    return style;
  }
}
