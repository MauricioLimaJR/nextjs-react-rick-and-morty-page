import { ICharacterPreview } from '../models/ICharacterPreview';

export interface ICharacterRepository {
  getAllCharacters(): Promise<ICharacterPreview[]>;
  //   getCharacter(_id: number): Promise<ICharacter | null>;
}
