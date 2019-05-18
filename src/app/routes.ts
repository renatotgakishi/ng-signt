import { Routes } from '@angular/router';

import { SalesComponent } from './sales/sales.component';
import { OrdersComponent } from './orders/orders.component';
import { HealthComponent } from './health/health.component';



export const appRoutes: Routes = [
{ path: 'sales', component: SalesComponent },
{ path: 'Orders', component: OrdersComponent},
{ path: 'Health', component: HealthComponent},

{ path: '', redirectTo: '/sales', pathMatch: 'full'}
];