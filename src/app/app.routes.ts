import { Routes } from '@angular/router';
import { OrderComponent } from './products/order/order.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./products/products.routes').then( m => m.routes)
  },
  {
    path: 'custom',
    component: OrderComponent
  }
  ,
  {
    path:'**',
    redirectTo: ''
  }
];
