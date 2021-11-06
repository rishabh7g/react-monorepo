import { CSSProperties } from 'react';
import './button.scss';
interface ButtonProps {
	label: string;
	primary?: boolean;
	size?: 'small' | 'medium' | 'large';
	style?: CSSProperties;
	fontColor?: string;
	onClick?: () => void;
}

const Button = ({
	label,
	primary = false,
	size = 'medium',
	style,
	fontColor,
	...props
}: ButtonProps) => {
	const mode = primary ? 'button-mode--primary' : 'button-mode--secondary';
	return (
		<button
			type='button'
			className={['button', `button-size--${size}`, mode].join(' ')}
			style={style}
			{...props}>
			{label}
		</button>
	);
};

export default Button;
