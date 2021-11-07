import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputField from './input-field';

export default {
	title: 'Example/Input field',
	component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
	<InputField {...args} />
);

export const FormInputField = Template.bind({});
FormInputField.args = {
	id: 'input-field-form',
	type: 'text',
	name: 'Agent Id',
	label: 'Agent ID',
	placeholder: 'Enter the agent id',
	value: '',
	handleChange: () => console.log('Input field entered'),
	isRequired: true,
};
