import { Injectable } from '@angular/core';
import { v4 as uuid4 } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root' // sin esto se tiene que definir en el app.module providers
}) // un servicio es una clase injectable
// con el providIn: root va a ser un singleton
export class DbzService {
  public characters: Character[] = [{
    id: uuid4(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid4(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid4(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid4(),
    }

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      character => character.id !== id
    );
  }
}
