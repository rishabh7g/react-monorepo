import { ComponentStory, ComponentMeta } from '@storybook/react';

import FontDemo from './font-demo';

export default {
	title: 'Example/Font Demo',
	component: FontDemo,
} as ComponentMeta<typeof FontDemo>;

const Template: ComponentStory<typeof FontDemo> = (args) => (
	<FontDemo {...args} />
);

export const SansSerifFont = Template.bind({});
SansSerifFont.args = {
	family: 'sans-serif',
};

export const SerifFont = Template.bind({});
SerifFont.args = {
	family: 'serif',
};





export const LatoFont = Template.bind({});
LatoFont.args = {
	family: 'lato',
};

export const CabinFont = Template.bind({});
CabinFont.args = {
	family: 'cabin',
};

export const InterFont = Template.bind({});
InterFont.args = {
	family: 'inter',
};

export const JostFont = Template.bind({});
JostFont.args = {
	family: 'jost',
};

export const OverpassFont = Template.bind({});
OverpassFont.args = {
	family: 'overpass',
};
