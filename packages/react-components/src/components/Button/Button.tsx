import React, { MouseEventHandler } from 'react';

type ButtonProps = {
	label: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ label, onClick }: ButtonProps) => (
	<button onClick={onClick}>{label}</button>
);

export default Button;
