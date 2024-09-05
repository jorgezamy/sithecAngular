import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { ICharacter } from '../../models/rick&Morthy/character.interface';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _api: ApiService
  ) {}

  initial: string = environment.baseUrl;
  rows: ICharacter[] = [];
  totalPages = 0;
  currentPage = 0;
  next: string = '';
  prev: string = '';

  ngOnInit(): void {
    let apiName = this._activatedRoute.snapshot.paramMap.get('apiName') || '';

    this.loadDataApiName(apiName);
  }

  loadDataApiName(apiName: string) {
    if (apiName == 'rick&morthy') {
      this.loadRickAndMorthy();
    }

    if (apiName == 'pokeApi') {
    }
  }

  loadRickAndMorthy(pagination: string = this.initial): void {
    this._api.getApiRickAndMorthy(pagination).subscribe((data) => {
      this.rows = data.results;
      this.totalPages = data.info.pages;
      this.next = data.info.next;
      this.prev = data.info.prev;
    });
  }

  onPrev(event: Event): void {
    event.preventDefault();

    if (this.prev) this.loadRickAndMorthy(this.prev);
  }

  onNext(event: Event): void {
    event.preventDefault();
    if (this.next) this.loadRickAndMorthy(this.next);
  }
}
