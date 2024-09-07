import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  ICharacter,
  ICharacterResponse,
} from '../../models/rick&Morthy/character.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  // url = `https://rickandmortyapi.com/api/character/?page=1`;

  private characterURL = environment.characterURL;

  getApiRickAndMorthy(apiURL: string): Observable<ICharacterResponse> {
    // let baseURL = `https://rickandmortyapi.com/api/character/?page=${page}`;

    return this._http.get<ICharacterResponse>(apiURL);
    // .pipe(
    //   map((data) => {
    //     data.results = data.results.map((character) => ({
    //       ...character,
    //       created: this.formattedDate(character.created),
    //     }));

    //     return data;
    //   })
    // );
  }

  getCharacterById(id: string): Observable<ICharacter> {
    let newUrl = this.characterURL + `${id}`;

    return this._http.get<ICharacter>(newUrl);
  }
}
