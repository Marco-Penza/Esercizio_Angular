import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatListModule],
  template: `
  <div>
  
      <mat-list role="list">
        @for (user of users; track user.id) {
          <mat-list-item>
                {{user.username}} - {{user.name}}
          </mat-list-item>
        }
      </mat-list>
    <pre>
          {{users | json}}
    </pre>
  </div>
  `,
  styles: `
  `,
})
export class Home {
  users :User[] = [];
  constructor(http: HttpClient){
    http.get<User[]>("https://jsonplaceholder.typicode.com/users")
      .subscribe(valoreRitorno => this.users = valoreRitorno);
  }
}

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}