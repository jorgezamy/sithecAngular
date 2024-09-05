import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { CharacterComponent } from './character/character.component';

export const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'dashboard/:apiName', component: DashboardComponent },
  { path: 'character/:id', component: CharacterComponent },
];
