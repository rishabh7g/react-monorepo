import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MiniCard } from './MiniCard';

export default {
	title: 'Example/Card/Mini Card',
	component: MiniCard,
} as ComponentMeta<typeof MiniCard>;

const Template: ComponentStory<typeof MiniCard> = (args) => (
	<MiniCard {...args} />
);

export const SampleMiniCard = Template.bind({});
SampleMiniCard.args = {
	heading: 'Bengaluru',
	subHeading: 'Thursday, 9th Dec',
	content: '24 C',
	subContent: 'Mild Wind',
};
