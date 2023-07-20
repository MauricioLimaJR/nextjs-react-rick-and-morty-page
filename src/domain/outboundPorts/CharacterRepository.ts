import { ICharacter } from '../models/ICharacter';
import { ICharacterPreview } from '../models/ICharacterPreview';

export interface ICharacterRepository {
  getAllCharacters(): Promise<ICharacterPreview[]>;
  getCharacterById(_id: number): Promise<ICharacter>;
}
