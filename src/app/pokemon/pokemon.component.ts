import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPokeService } from '../services/apiPoke/api-poke.service';
import { IMove, IPokemon } from '../models/apiPoke/pokemon.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _api: ApiPokeService
  ) {}

  id: string = '';
  character?: IPokemon;

  moves?: IMove[] = [];

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id') || '0';
    this.LoadPokeById(this.id);
  }

  LoadPokeById(id: string) {
    this._api.getPokeById(id).subscribe((data) => {
      this.character = data;
      this.moves = data.moves;
    });
  }
}
