import { Component } from '@angular/core';
import { Keg } from './keg.model'
declare var firebase: any;


@Component({
  selector: 'app-root',
  template: `
  <div >

  <nav>
    <div class="nav-wrapper grey darken-4">
      <a href="#" class="brand-logo center ">Duff Man Tap Room</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down ">
        <li><a (click)=employee()>Employee</a> </li>
        <li><a (click)=patron()>Patron</a></li>
      </ul>
    </div>
  </nav>

    <div class="row">
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (volumeSender)="pourDrink($event)" (kickedSender)="isItKicked($event)" [employeeView]="employeeView"></keg-list>

    </div>
    <div *ngIf="employeeView">
      <div class="row">
        <edit-keg [childSelectedKeg]="selectedKeg" (doneEditingSender)="doneEditing()" ></edit-keg>
      </div>
      <add-keg (newAddSender)="doneAdding()" (newKegSender)="addKeg($event)" [childNewKeg]="newKeg"></add-keg>
      <button class="btn-floating btn-large waves-effect waves-light red" *ngIf="!newKeg" (click)="addKegFormShow()">Add</button>
    </div>
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
  employeeView = null;

  employee() {
    this.fbGetData();
    this.employeeView = true;
  }
  patron() {
    this.employeeView = null;
  }

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
  }
  pourDrink(clickedKeg) {
    if(clickedKeg.tapped === false){
      alert("This Keg is tapped out!");
    } else {
    clickedKeg.volume -= 16;
    }
  }
  fbGetData(){
    firebase.database().ref('/').on('child_added',(snapshot)=> {console.log(snapshot.val())
    })
  }
}
