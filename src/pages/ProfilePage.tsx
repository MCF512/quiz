import styled from "styled-components"
import { OnlyStyledComponent } from "../types"
import { Header, ProfileForm } from "../components"

const ProfilePageContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
	return (
		<div className={className}>
			<Header />
			<ProfileForm />
		</div>
	)
}

export const ProfilePage = styled(ProfilePageContainer)`

`
