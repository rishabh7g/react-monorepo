import { ComponentStory, ComponentMeta } from '@storybook/react';
import ColorDemo from './color-demo';

export default {
	title: 'Example/ColorDemo',
	component: ColorDemo,
} as ComponentMeta<typeof ColorDemo>;

const Template: ComponentStory<typeof ColorDemo> = (args) => (
	<ColorDemo {...args} />
);

export const OrangeColorDemo = Template.bind({});
OrangeColorDemo.args = {
	backgroundColor: 'rgba(244, 162, 97, 1)',
	label: 'rgba(244, 162, 97, 1)',
	wallpaperColor: '#fff',
};
