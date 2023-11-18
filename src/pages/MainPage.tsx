import styled from "styled-components"
import { OnlyStyledComponent } from "../types"
import { Button, ResultBar } from "../components"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getResults, selectResults } from "../store"
import { useNavigate } from "react-router-dom"


const MainPageContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
	const dispatch: any = useDispatch()
	const navigate: any = useNavigate()

	useEffect(() => {
		dispatch(getResults())
	}, [])

	const results = useSelector(selectResults)

	return (
		<div className={className}>
			<div className="buttons">
				<Button
					margin='0px 20px 0px 0px'
					onClick={() => navigate('/quiz')}
				>Запустить тест</Button>
				<Button
					onClick={() => navigate('/edit')}
				>Редактировать тест</Button>
			</div>

			<h3>Результаты прохождения</h3>
			{results.map((result) => {
				return <ResultBar result={result} key={result.timestamp} />
			})}
		</div>
	)
}

export const MainPage = styled(MainPageContainer)`

	& .buttons {
		display: flex;
		justify-content: center;
	}
`
