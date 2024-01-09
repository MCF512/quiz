import React, { useEffect, useState } from "react"
import { OnlyStyledComponent } from "../types"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { ACTION, deleteQuestion, getTest, selectIsAuth, selectQuestions, selectTestId, selectTestName, selectUserEmail, selectUserNameAndSurname } from "../store"
import { Button, Header, QuestionEditor } from "../components"
import { useNavigate, useParams } from "react-router-dom"
import { createTest, validateQuestions } from "../utils"
import { editTest } from "../utils/editTest"

const EditPageContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
	const isAuth = useSelector(selectIsAuth)
	const params = useParams();
	const isEditing = params.id
	const dispatch: any = useDispatch();
	const questions = useSelector(selectQuestions)
	const testId = useSelector(selectTestId);
	const testName = useSelector(selectTestName);
	const navigate: any = useNavigate()
	const userName = useSelector(selectUserNameAndSurname)
	const userEmail = useSelector(selectUserEmail)
	const [rerender, setRerender] = useState(false)

	if (!isAuth) {
		navigate('/')
	}

	useEffect(() => {
		if (params.id) {
			dispatch(getTest(params.id))
		} else {
			dispatch({ type: ACTION.SET_DEFAULT_TEST_STATE })
		}
	}, [])

	const sendData = () => {
		if (!validateQuestions(questions)) {
			(isEditing ? editTest(testId, questions) : createTest(questions, testName, userName, userEmail))
				.then(() => navigate('/'))
				.then(() => window.location.reload())
		} else {
			alert(validateQuestions(questions))
		}
	}

	return (
		<div className={className}>
			<Header />
			<input
				className="test-name"
				placeholder="Название теста"
				value={testName}
				onChange={({ target }) => dispatch({ type: ACTION.SET_TEST_NAME, payload: target.value })}
			/>
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
					key={Math.random()}
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


export const CreateOrEditPage = styled(EditPageContainer)`
	& .test-name {
		width: 100%;
		margin-bottom: 20px;
		padding: 10px;
		font-size: 20px;
		border-radius: 5px;
	}

	& .buttons {
		display: flex;
	}
`
