import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'app-root',
  template: `
  <h2>Currently Available</h2>
  <keg-list></keg-list>
  `
})

export class AppComponent{

}
