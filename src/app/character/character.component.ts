import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { ICharacter } from '../models/rick&Morthy/character.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterComponent {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _api: ApiService
  ) {}

  id: string = '';
  character?: ICharacter;

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id') || '0';
    this.loadCharacter(this.id);
  }

  loadCharacter(id: string) {
    this._api.getCharacterById(id).subscribe((data) => (this.character = data));
  }
}
