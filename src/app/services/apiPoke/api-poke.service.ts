import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IPoke } from '../../models/apiPoke/results.interface';
import { IPokemon } from '../../models/apiPoke/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiPokeService {
  constructor(private _http: HttpClient) {}

  private baseURL = environment.baseUrlPoke;

  getPoke(pagination: string = this.baseURL): Observable<IPoke> {
    return this._http.get<IPoke>(pagination);
  }

  getPokeById(id: string): Observable<IPokemon> {
    const url = this.baseURL + `${id}`;

    return this._http.get<IPokemon>(url);
  }
}
