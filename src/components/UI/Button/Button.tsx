import React from "react";
import styled from "styled-components";

interface ButtonProps {
	className?: string,
	children?: string,
	onClick?: (e?: any) => void,
	margin?: string,
	disabled?: boolean
}

const ButtonContainer: React.FC<ButtonProps> = ({ className, children, onClick, margin, disabled }) => {
	return (
		<button
			className={className}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export const Button = styled(ButtonContainer)`
	padding: 20px 30px;
	width: 100%;
	background-color: transparent;
	border: 1px solid #4e4e4e;
	color: #4e4e4e;
	border-radius: 5px;
	font-size: 20px;
	font-weight: bold;
	margin: ${({ margin }) => margin ? margin : '0px'};
	cursor: pointer;
	transition: background-color 0.5s, color 0.5s, opacity 0.2s;
	opacity: ${({ disabled }) => disabled ? '0.5' : '1'};

	&:hover,
	&:focus {
		background-color: ${({ disabled }) => disabled ? 'transparent' : '#4e4e4e'};
		color:${({ disabled }) => disabled ? '#4e4e4e' : '#fff'};
	}

	&:active {
		opacity: ${({ disabled }) => disabled ? '0.5' : '0.8'};
	}
`
