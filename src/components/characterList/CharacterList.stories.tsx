import { Meta, StoryObj } from '@storybook/react';
import { mockCharacterCardProps } from '../cards/character/CharacterCard.mocks';
import CharacterList from './CharacterList';

const meta: Meta<typeof CharacterList> = {
  component: CharacterList,
};

export default meta;

const mockedCharacterList = [
  mockCharacterCardProps.base,
  mockCharacterCardProps.base,
];

type Story = StoryObj<typeof CharacterList>;

export const CharacterListComp: Story = {
  render: () => <CharacterList characterList={mockedCharacterList} />,
};
