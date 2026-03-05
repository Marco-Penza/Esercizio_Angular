import { Routes } from '@angular/router';
import { Ciccio } from './pages/ciccio'; 
import { Home } from './pages/home'; 

export const routes: Routes = [
	{ 
		path: 'home', 
		loadComponent: () =>
      import('./pages/home').then(({ Home }) => Home) 
  	},
  	{ 
  		path: 'ciccio', 
  		loadComponent: () =>
      import('./pages/ciccio').then(({ Ciccio }) => Ciccio)
  	},
  	{ 
  		path: '', 
  		redirectTo: 'home', 
  		pathMatch: 'full' 
  	},
];
