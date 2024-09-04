import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { ICharacter } from '../../models/rick&Morthy/character.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _api: ApiService
  ) {}

  rows: ICharacter[] = [];

  ngOnInit(): void {
    let apiName = this._activatedRoute.snapshot.paramMap.get('apiName') || '';

    this.loadDataApiName(apiName);
  }

  loadDataApiName(apiName: string) {
    if (apiName == 'rick&morthy') {
      this._api.getApiRickAndMorthy().subscribe((data) => {
        console.log(data.results);

        this.rows = data.results;
      });
    }

    if (apiName == 'pokeApi') {
    }
  }
}
