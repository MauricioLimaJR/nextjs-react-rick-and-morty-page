import { ISearchFilter } from '@/adapters/driving/ISearchFilter';
import { ICharacter } from '../models/ICharacter';
import { ICharacterPreview } from '../models/ICharacterPreview';

export interface ICharacterRepository {
  getAllCharacters(_filter?: ISearchFilter): Promise<ICharacterPreview[]>;
  getCharacterById(_id: number): Promise<ICharacter>;
}
