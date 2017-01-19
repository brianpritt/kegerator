import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h2>Duff Man Brewery</h2>
    <div class="row">
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (volumeSender)="pourDrink($event)" (kickedSender)="isItKicked($event)"></keg-list>
    </div>
    <hr>
    <div class="row">
      <edit-keg [childSelectedKeg]="selectedKeg" (doneEditingSender)="doneEditing()" ></edit-keg>
    </div>
    <hr>
    <add-keg (newAddSender)="doneAdding()" (newKegSender)="addKeg($event)" [childNewKeg]="newKeg"></add-keg>
    <button class="btn-floating btn-large waves-effect waves-light red" *ngIf="!newKeg" (click)="addKegFormShow()">Add</button>
  </div>
  `
})

export class AppComponent{
  masterKegList: Keg[]= [
  new Keg("High Life", "Miller", 2.50, 4.6),
  new Keg("Bud Light", "Budweiser", 2.00, 4.2),
  new Keg("Keystone Light","Keystone", 0.50, 4.2),
  new Keg("Duff","Duff", 3.50, 5.1)
  ]

  selectedKeg = null;
  newKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  doneEditing() {
    this.selectedKeg = null;
  }

  addKegFormShow() {
    this.newKeg = true;
  }

  addKeg(newKegFromChild: Keg){
    this.masterKegList.push(newKegFromChild);
  }

  doneAdding() {
    this.newKeg = null
  }
  isItKicked(clickedKeg) {
    if(clickedKeg.volume <= 0){
      clickedKeg.tapped = false
    }
    console.log(clickedKeg.volume)
    console.log(clickedKeg.tapped)
  }
  pourDrink(clickedKeg) {
    if(clickedKeg.tapped === false){
      alert("This Keg is tapped out!");
    } else {
    clickedKeg.volume -= 16;
    }
  }
}
