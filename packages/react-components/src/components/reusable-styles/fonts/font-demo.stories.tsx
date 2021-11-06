import { ComponentStory, ComponentMeta } from '@storybook/react';

import FontDemo from './font-demo';

export default {
	title: 'Example/Font Demo',
	component: FontDemo,
} as ComponentMeta<typeof FontDemo>;

const Template: ComponentStory<typeof FontDemo> = (args) => (
	<FontDemo {...args} />
);

export const LatoFontFamily = Template.bind({});
LatoFontFamily.args = {
	size: 'small',
};
