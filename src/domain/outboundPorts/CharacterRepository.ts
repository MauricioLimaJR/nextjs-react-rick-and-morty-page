import { ICharacter } from '../models/Character';

export interface ICharacterRepository {
  getAllCharacters(): Promise<ICharacter[]>;
  //   getCharacter(_id: number): Promise<ICharacter | null>;
}
