import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template:
  `
  <div class="col-md-3" *ngFor='let currentKeg of childKegList'>
  <h3>{{currentKeg.name}}</h3>
  <ul>
    <li>{{currentKeg.brand}}</li>
    <li>{{currentKeg.price}}</li>
    <li>{{currentKeg.alcoholContent}}</li>
  </ul>
  <button class="btn" (click)='editKeg(currentKeg)'>Edit!</button>
  </div>
  `
})
export class KegListComponent{
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editKeg(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit)
  }
}
