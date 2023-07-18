import { ComponentMeta, ComponentStory } from '@storybook/react';
import CharacterCard, { ICharacterCard } from './CharacterCard';
import { mockCharacterCardProps } from './CharacterCard.mocks';

export default {
  title: 'cards/CharacterCard',
  component: CharacterCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CharacterCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CharacterCard> = (args) => (
  <CharacterCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCharacterCardProps.base,
} as ICharacterCard;
