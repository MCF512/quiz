import React, { ReactNode } from "react"
import styled from "styled-components"

interface ContainerProps {
	className?: string,
	children: ReactNode
}


const ContainerContainer: React.FC<ContainerProps> = ({ className, children }) => {
	return (<div className={className}>
		{children}
	</div>)
}


export const Container = styled(ContainerContainer)`
	padding: 0 15px;
	max-width: 930px;
	margin: 0 auto;
	font-family: Arial, Helvetica, sans-serif;
`
