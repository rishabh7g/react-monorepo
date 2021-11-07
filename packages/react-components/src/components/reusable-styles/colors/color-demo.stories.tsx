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
	wallpaperColor: '#fff',
	rgbValue: {
		r: 244,
		g: 162,
		b: 97,
	},
};

export const GreenColorDemo = Template.bind({});
GreenColorDemo.args = {
	wallpaperColor: '#fff',
	rgbValue: {
		r: 42,
		g: 157,
		b: 143,
	},
};

export const GrayColorDemo = Template.bind({});
GrayColorDemo.args = {
	wallpaperColor: '#fff',
	rgbValue: {
		r: 189,
		g: 198,
		b: 197,
	},
};
