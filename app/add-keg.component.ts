import { Component, Output, Input, EventEmitter} from '@angular/core';
import{ Keg } from './keg.model';

@Component({
  selector: "add-keg",
  template:
  `
  <div>
    <div *ngIf="childNewKeg">
      <h3>Add Keg Info</h3>
      <label>Enter keg name:</label>
      <input #newName>
      <label>Enter keg brand:</label>
      <input #newBrand>
      <label>Enter price: </label>
      <input #newPrice>
      <label>Enter ABV:</label>
      <input #newAlcoholContent>
      <button class="btn-floating btn-large waves-effect waves-light red" (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value); doneAdding()"><i class="material-icons">Add</i></button>
    </div>
  </div>
  `
})

export class NewKegComponent {
  @Input() childNewKeg: Keg;
  @Output() newKegSender = new EventEmitter();
  @Output() newAddSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number){
    var newKeg: Keg = new Keg(name, brand, price, alcoholContent);
    this.newKegSender.emit(newKeg);
  }
  doneAdding() {
    this.newAddSender.emit();
  }
}
