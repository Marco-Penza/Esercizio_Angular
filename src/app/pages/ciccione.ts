import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ciccione',
  imports: [],
  template: `
    <p>
      {{nome}}  - {{cognome}} FUNZIONA - {{id}}
    </p>
  `,
  styles: ``,
})
export class Ciccione {
  
  @Input() 
  nome = "";

  @Input() 
  cognome = "";

  @Input()
  eta = "";
}
