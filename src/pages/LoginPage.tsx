import styled from "styled-components"
import { Header, LoginForm } from "../components"
import { OnlyStyledComponent } from "../types"

const LoginPageContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
	return (
		<div className={className}>
			<Header />
			<LoginForm />
		</div>
	)
}

export const LoginPage = styled(LoginPageContainer)`
`
