import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacterResponse } from '../../../models/rick&Morthy/character.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  getApiRickAndMorthy(page: number = 1): Observable<ICharacterResponse> {
    let baseURL = `https://rickandmortyapi.com/api/character/?page=${page}`;

    return this._http.get<ICharacterResponse>(baseURL);
  }
}
