import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template:
  `
  <div *ngFor='let currentKeg of kegs'>
  <h3>{{currentKeg.name}}</h3>
  <ul>
    <li>{{currentKeg.brand}}</li>
    <li>{{currentKeg.price}}</li>
    <li>{{currentKeg.alcoholContent}}</li>
  </ul>
  </div>
  `
})
export class KegListComponent{
  kegs: Keg[]= [
  new Keg("High Life", "Miller", 2.50, 4.6),
  new Keg("Bud Light", "Budweiser", 2.00, 4.2),
  new Keg("Keystone Light","Keystone", 0.50, 4.2),
  new Keg("Duff","Duff", 3.50, 5.1)
  ]
}
