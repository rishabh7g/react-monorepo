import React from 'react';

interface TextboxProps {
	placeholder?: string;
	id: string;
	label: string;
	changeHandler: () => void;
}

const Textbox = (props: TextboxProps) => {
	return (
		<div className='textbox-wrapper'>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type='text'
				id={props.id}
				className='textbox'
				placeholder={props.label}
				onChange={props.changeHandler}
			/>
		</div>
	);
};

export default Textbox;
