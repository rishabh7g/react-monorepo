import { CSSProperties } from 'react';
import './button.scss';
interface ButtonProps {
	label: string;
	name?: string;
	type?: 'button' | 'submit' | 'reset';
	primary?: boolean;
	size?: 'small' | 'medium' | 'large';
	style?: CSSProperties;
	fontColor?: string;
	onClick?: () => void;
}

const Button = ({
	label,
	type = 'button',
	primary = false,
	size = 'medium',
	style,
	name,
	fontColor,
	...props
}: ButtonProps) => {
	const mode = primary ? 'button-mode--primary' : 'button-mode--secondary';
	return (
		<button
			type={type}
			name={name}
			className={['button', `button-size--${size}`, mode].join(' ')}
			style={style}
			{...props}>
			{label}
		</button>
	);
};

export default Button;
