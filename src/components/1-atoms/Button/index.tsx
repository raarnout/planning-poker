import { MouseEventHandler } from 'react';

export enum ButtonVariant {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	SUCCES = 'success',
	DANGER = 'danger',
	WARNING = 'warning',
	INFO = 'info',
	LIGHT = 'light',
	DARK = 'dark',
	LINK = 'link'
}

export enum ButtonType {
	BUTTON = 'button',
	SUBMIT = 'submit',
	RESET = 'reset'
}

export enum ButtonSize {
	SMALL = 'sm',
	LARGE = 'lg'
}

export interface ButtonProps {
	label: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
	type?: ButtonType;
	variant?: ButtonVariant;
	size?: ButtonSize;
	outline?: boolean;
	disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
	type = ButtonType.BUTTON,
	variant = ButtonVariant.PRIMARY,
	size = ButtonSize.LARGE,
	outline = false,
	disabled = false,
	...props
}: ButtonProps) => {
	const btnStyle: string =
		outline && variant !== ButtonVariant.LINK ? `outline-${variant}` : variant;
	return (
		<button
			type={type}
			className={['btn', `btn-${btnStyle}`, `btn-${size}`].join(' ')}
			disabled={disabled}
			onClick={props.onClick}
		>
			{props.label}
		</button>
	);
};

export default Button;
