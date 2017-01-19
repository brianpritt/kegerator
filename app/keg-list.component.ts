import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template:
  `

  <div  *ngFor='let currentKeg of childKegList | fullness'>
    <div class="col s3">
      <h3>{{currentKeg.name}} : {{currentKeg.brand}}</h3>
      <ul>
        <div></div>
        <div>Price: {{currentKeg.price}}</div>
        <div>ABV: {{currentKeg.alcoholContent}}</div>
        <div>Pints available: {{currentKeg.volume/16}}</div>
      </ul>
      <button class="btn waves-effect waves-light" (click)='editKeg(currentKeg)'>Edit!</button>
      <button class="btn waves-effect waves-light" (click)='isItKicked(currentKeg); pourDrink(currentKeg)'>Get a Pour!</button>
    </div>
  </div>
  `
})
export class KegListComponent{
  @Input() childKegList: Keg[];
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
}
