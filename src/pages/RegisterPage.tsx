import styled from "styled-components"
import { Header, RegisterForm } from "../components"
import { OnlyStyledComponent } from "../types"

const RegisterPageContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
	return (
		<div className={className}>
			<Header />
			<RegisterForm />
		</div>
	)
}

export const RegisterPage = styled(RegisterPageContainer)`

`
