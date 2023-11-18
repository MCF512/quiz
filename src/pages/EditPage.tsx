import React, { useEffect, useState } from "react"
import { OnlyStyledComponent } from "../types"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { ACTION, deleteQuestion, getTest, selectQuestions } from "../store"
import { Button, QuestionEditor } from "../components"
import { useNavigate } from "react-router-dom"
import { validateQuestions } from "../utils"
import { editTest } from "../utils/editTest"

const EditPageContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
	const dispatch: any = useDispatch();
	const questions = useSelector(selectQuestions)
	const testId = useSelector((state: any) => state.test.id)
	const [rerender, setRerender] = useState(false)
	const navigate: any = useNavigate()

	useEffect(() => {
		dispatch(getTest())
	}, [])

	const sendData = () => {
		if (!validateQuestions(questions)) {
			editTest(testId, questions)
		} else {
			alert(validateQuestions(questions))
		}
	}

	return (
		<div className={className}>
			<Button
				margin="0 0 20px 0"
				onClick={() => {
					dispatch({ type: ACTION.ADD_QUESTION })
					setRerender(!rerender)
				}}
			>Добавить вопрос</Button>
			{questions.map((q, index) => {
				return <QuestionEditor
					question={q}
					index={index}
					key={q.question}
					deleteQuestion={() => dispatch(deleteQuestion(questions, index)).then(() => setRerender(!rerender))}
				/>
			})}

			<div className="buttons">
				<Button
					margin="0 5px 0 0"
					onClick={() => navigate('/')}
				>
					Назад
				</Button>
				<Button
					margin="0 0 0 5px"
					onClick={sendData}
				>
					Сохранить
				</Button>
			</div>
		</div>
	)
}


export const EditPage = styled(EditPageContainer)`
	& .buttons {
		display: flex;
	}
`
