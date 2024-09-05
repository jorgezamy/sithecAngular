import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { ICharacter } from '../models/rick&Morthy/character.interface';
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
    private _api: ApiService,
    private _router: Router
  ) {}

  initial: string = environment.baseUrl;
  pagination: string = environment.pagination;
  rows: ICharacter[] = [];
  totalPages = 0;
  currentPage = 0;
  next: string = '';
  prev: string = '';
  maxPageButtons = 5;

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
      this.currentPage = this.getPageFromURL(pagination);
    });
  }

  getPageFromURL(url: string): number {
    const params = new URLSearchParams(url.split('?')[1]);
    return params.has('page') ? +params.get('page')! : 1;
  }

  onPrev(event: Event): void {
    event.preventDefault();

    if (this.prev) this.loadRickAndMorthy(this.prev);
  }

  onNext(event: Event): void {
    event.preventDefault();
    if (this.next) this.loadRickAndMorthy(this.next);
  }

  getPageRange(): number[] {
    const start = Math.max(
      1,
      this.currentPage - Math.floor(this.maxPageButtons / 2)
    );
    const end = Math.min(this.totalPages, start + this.maxPageButtons - 1);

    const pageRange = [];

    for (let i = start; i <= end; i++) {
      pageRange.push(i);
    }

    return pageRange;
  }

  loadPage(page: number, event: Event) {
    event.preventDefault();
    const baseUrl = this.pagination + page;

    this.loadRickAndMorthy(baseUrl);
  }

  loadCharacter(id: number) {
    this._router.navigate(['character', id]);
  }
}
