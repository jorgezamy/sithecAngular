import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/apiRickAndMorty/api.service';
import {
  ICharacter,
  ICharacterResponse,
} from '../models/rick&Morthy/character.interface';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { environment } from '../../environments/environment';
import { ApiPokeService } from '../services/apiPoke/api-poke.service';
import { forkJoin } from 'rxjs';

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
    private _router: Router,
    private _apiPoke: ApiPokeService
  ) {}

  apiName: string = '';

  columns: string[] = [];
  data: any[] = [];
  initialApiPoke: string = environment.baseUrlPoke;
  lastPoke: string = environment.LastPoke;

  initial: string = environment.baseUrl;
  pagination: string = environment.pagination;
  rows: ICharacter[] = [];
  totalPages = 0;
  currentPage = 0;
  next: string | null = '';
  prev: string | null = '';
  maxPageButtons = 5;

  ngOnInit(): void {
    this.apiName = this._activatedRoute.snapshot.paramMap.get('apiName') || '';

    this.loadDataApiName(this.apiName);
  }

  loadDataApiName(apiName: string) {
    if (apiName == 'rick&morthy') {
      return this.loadRickAndMorthy();
    }

    if (apiName == 'pokeApi') {
      return this.loadPoke();
    }
  }

  loadRickAndMorthy(pagination: string = this.initial): void {
    this._api.getApiRickAndMorthy(pagination).subscribe((data) => {
      this.columns = ['Id', 'Name', 'Status', 'Created'];
      this.data = data.results.map((c) => ({
        Id: c.id,
        Name: c.name,
        Status: c.status,
        Created: c.created,
      }));

      // this.rows = data.results;
      this.totalPages = data.info.pages;
      this.next = data.info.next;
      this.prev = data.info.prev;
      this.currentPage = this.getPageFromURL(pagination);
    });
  }

  loadPoke(pagination: string = this.initialApiPoke) {
    this._apiPoke.getPoke(pagination).subscribe((data) => {
      this.totalPages = data.count;
      this.next = data.next;
      this.prev = data.previous;

      const pokemonResults = data.results;

      const pokemonRequest = pokemonResults.map((p) => {
        const id = this.extractIdFromUrl(p.url);

        return this._apiPoke.getPokeById(`${id}`);
      });

      forkJoin(pokemonRequest).subscribe((pokemon) => {
        this.columns = ['Id', 'Name', 'Base Experience', 'Character'];
        this.data = pokemonResults.map((p, index) => ({
          Id: pokemon[index].id,
          Name: p.name,
          'Base Experience': pokemon[index].base_experience,
          Character: pokemon[index].sprites.front_default,
        }));
      });
    });
  }

  extractIdFromUrl(url: string): number {
    const id = url.match(/\/(\d+)\/$/);
    return id ? +id[1] : 0;
  }

  getPageFromURL(url: string): number {
    const params = new URLSearchParams(url.split('?')[1]);
    return params.has('page') ? +params.get('page')! : 1;
  }

  onPrev(event: Event): void {
    event.preventDefault();
    if (this.apiName == 'rick&morthy') {
      if (this.prev) this.loadRickAndMorthy(this.prev);
    }

    if (this.apiName == 'pokeApi') {
      if (this.prev) this.loadPoke(this.prev);
    }
  }

  onNext(event: Event): void {
    event.preventDefault();
    if (this.apiName == 'rick&morthy') {
      if (this.next) this.loadRickAndMorthy(this.next);
    }

    if (this.apiName == 'pokeApi') {
      if (this.next) this.loadPoke(this.next);
    }
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

    if (this.apiName == 'rick&morthy') {
      const baseUrl = this.pagination + page;
      return this.loadRickAndMorthy(baseUrl);
    }
    if (this.apiName == 'pokeApi') {
      const baseUrl = this.lastPoke + (this.totalPages - 1);

      if (page == 1) return this.loadPoke(this.initialApiPoke);
      else return this.loadPoke(baseUrl);
    }
  }

  loadCharacter(id: any) {
    let newId = +id + 1;

    if (this.apiName == 'rick&morthy') {
      this._router.navigate(['character', newId]);
    }
    if (this.apiName == 'pokeApi') {
      this._router.navigate(['pokemon', newId]);
    }
  }
}
