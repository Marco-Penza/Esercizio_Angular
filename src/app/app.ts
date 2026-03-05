import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatMenuModule, MatButtonModule],
  template: `
    
  <div>
    <button matButton [matMenuTriggerFor]="menu">Lista da mostrare</button>
    <mat-menu #menu>
      <button mat-menu-item routerLink="home">Primo</button>
      <button mat-menu-item routerLink="ciccio">Secondo</button>
    </mat-menu>
  </div>


    <router-outlet />
  `,
  styles: [`
    .viva{
      color: blue
    }
    `],
})
export class App {

  sesso :string = "M";

  urlImg :string = "";

  carica() :void{
    this.urlImg = "https://static.vecteezy.com/ti/foto-gratuito/t1/36324852-ai-generato-immagine-di-un-tigre-a-piedi-nel-il-foresta-foto.jpg";
  }

  scarica() :void{
    this.urlImg = "";
  }

  aaa() :void{
    console.log("ciccio");
  }
}
