import { Component, Input, Output, EventEmitter} from '@angular/core';
import{ Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <br>
  <div>
    <div *ngIf="childSelectedKeg">
      <!--<h3>{{childSelectedKeg.name}}</h3>
      <ul>
        <li>{{childSelectedKeg.brand}}</li>
        <li>{{childSelectedKeg.price}}</li>
        <li>{{childSelectedKeg.alcoholContent}}</li>
      </ul>-->
      <h3>Edit Keg Info</h3>
      <label>Enter keg name:</label>
      <input [(ngModel)]="childSelectedKeg.name">
      <label>Enter keg brand:</label>
      <input [(ngModel)]="childSelectedKeg.brand">
      <label>Enter price: </label>
      <input [(ngModel)]="childSelectedKeg.price">
      <label>Enter ABV:</label>
      <input [(ngModel)]="childSelectedKeg.alcoholContent">
      <button class="btn" (click)="doneEditing()">Update</button>
    </div>
  </div>
  `
})
export class EditKegComponent{
  @Input() childSelectedKeg: Keg;
  @Output() doneEditingSender = new EventEmitter();

  doneEditing() {
    console.log(this.doneEditingSender)
    this.doneEditingSender.emit();
  }
}
