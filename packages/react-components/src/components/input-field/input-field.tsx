import { CSSProperties } from 'react';
import classes from './input-field.module.scss';

interface InputFieldProps {
	type: string;
	name: string;
	id: string;
	label: string;
	placeholder?: string;
	value: string;
	handleChange: () => void;
	style?: CSSProperties;
	isRequired?: boolean;
}

const InputField = ({
	type,
	name,
	id,
	label,
	placeholder,
	value,
	handleChange,
	style,
	isRequired = false,
}: InputFieldProps) => (
	<div className={classes.InputFieldWrapper}>
		<label htmlFor={name}>{label}</label>
		<input
			type={type}
			name={name}
			id={id}
			placeholder={placeholder}
			value={value}
			onChange={handleChange}
			style={style}
			required={isRequired}
		/>
	</div>
);

export default InputField;
