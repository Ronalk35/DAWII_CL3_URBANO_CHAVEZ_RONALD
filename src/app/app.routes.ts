import { Routes } from '@angular/router';
import { LocationsComponent } from './locations/locations.component';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
  { path: 'locations', component: LocationsComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', redirectTo: '/locations', pathMatch: 'full' },
];
