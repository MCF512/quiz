import styled from "styled-components"
import { OnlyStyledComponent } from "../types"
import { Header } from "../components"

const ProfilePageContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
	return (
		<div className={className}>
			<Header />
		</div>
	)
}

export const ProfilePage = styled(ProfilePageContainer)`

`
