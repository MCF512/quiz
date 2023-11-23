import { useEffect } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { OnlyStyledComponent } from "../types"
import { Header, TestCard } from "../components"
import { getTest } from "../store"


const MainPageContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
	const dispatch: any = useDispatch()

	useEffect(() => {
		dispatch(getTest())
	}, [])

	return (
		<div className={className}>
			<Header />
			<TestCard />
		</div>
	)
}

export const MainPage = styled(MainPageContainer)`


`
