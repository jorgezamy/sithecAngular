import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  constructor(private _router: Router) {}

  onCardClick(apiName: string): void {
    this._router.navigate(['dashboard', apiName]);
  }
}
