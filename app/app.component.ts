import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h2>Beer Available</h2>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <hr>
    <div class="row">
      <edit-keg [childSelectedKeg]="selectedKeg" (doneEditingSender)="doneEditing()" ></edit-keg>
    </div>
    <hr>
    <add-keg (newAddSender)="doneAdding()" (newKegSender)="addKeg($event)" [childNewKeg]="newKeg"></add-keg>
    <button class="btn" *ngIf="!newKeg" (click)="addKegFormShow()">Add New Keg</button>
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
}
