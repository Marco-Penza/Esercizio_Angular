import { Component } from '@angular/core';
import { Ciccione } from './ciccione';

@Component({
  selector: 'app-ciccio',
  imports: [Ciccione],
  template: `
    <p class="ciccio">
      quello che voglio con tutti gli stili che voglio come lo voglio se voigkliuo
      <app-ciccione [nome]="valore" cognome="rossi"></app-ciccione>
      <img [src]="img">
    </p>
  `,
  styles: `
    *{
      background-color: red;
    }
    `,
})
export class Ciccio {
  valore :string = "silvio";
  img :string = "https://bnsudfhuds";

}
