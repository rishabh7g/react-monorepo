import React from 'react';
import './Button.scss';
import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: papayawhip;
	color: palevioletred;
	border: none;
	padding: 10px 15px;
`;

enum ButtonType {
	primary,
	secondary,
	tertiary,
}

enum ButtonSize {
	small,
	medium,
	large,
}

interface ButtonProps {
	label: string;
	type?: ButtonType;
	size?: ButtonSize;
	clickHandler?: () => void;
}

const Button = (props: ButtonProps) => {
	return (
		<StyledButton onClick={props.clickHandler}>{props.label}</StyledButton>
	);
};

export default Button;
