import styled from "styled-components"
import { Answer, Question } from "../../types"
import React, { useEffect, useState } from "react"
import { Button } from ".."
import { useDispatch } from "react-redux"
import { ACTION } from "../../store"

interface QuestionEditorProps {
	className?: string,
	question: Question,
	index: number,
	deleteQuestion: () => {}
}

const QuestionEditorContainer: React.FC<QuestionEditorProps> = ({ className, question, index, deleteQuestion }) => {
	const [formVisible, setFormVisible] = useState(false)
	const [questionValue, setQuestionValue] = useState<string>(question.question)
	const [answers, setAnswers] = useState<Array<Answer> | null>(question.answers)
	const dispatch: any = useDispatch()

	const saveDataToStore = () => {
		const data = {
			_id: question._id,
			answers,
			question: questionValue
		}

		dispatch({ type: ACTION.EDIT_QUESTION, payload: { index, editedQuestion: data } })
	}

	useEffect(() => {
		saveDataToStore()
	}, [questionValue, answers])

	const handleChangeQuestion = ({ target }: any) => {
		setQuestionValue(target.value)
	}

	const handleChangeAnswer = (ind: number, text: string) => {
		if (answers) {
			let changedAnswers = answers;

			for (let i = 0; i < changedAnswers.length; i++) {
				if (i === ind) {
					changedAnswers[i].text = text
				}
			}

			setAnswers([...changedAnswers])
		}

	}

	const handleSetCorrect = (ind: number) => {
		if (answers) {
			let changedAnswers = answers;

			for (let i = 0; i < changedAnswers.length; i++) {
				if (i === ind) {
					changedAnswers[i].correct = true
				} else {
					changedAnswers[i].correct = false
				}
			}

			setAnswers([...changedAnswers])
		}
	}

	const handleAddAnswer = (e: any) => {
		e.preventDefault()
		const chanhedAnswers = answers;
		if (chanhedAnswers) {
			chanhedAnswers.push({
				text: '',
				correct: false
			})
			setAnswers([...chanhedAnswers])
		}
	}

	const handleDelete = (index: number) => {
		if (answers) {
			const newArr = answers
			newArr.splice(index, 1)
			setAnswers([...newArr])
		}
	}

	return (
		<div className={className}>

			<div className="wrapper">
				<div className="question-title">
					{`Вопрос ${index + 1}`}
				</div>
				<div className="buttons">
					<button
						className="button"
						onClick={deleteQuestion}
					>Удалить</button>
					<button
						className="button"
						onClick={() => setFormVisible(!formVisible)}
					>{formVisible ? "Скрыть" : 'Показать'}</button>
				</div>
			</div>

			{formVisible && <form className="form" name="answers">
				<textarea
					className="textarea textarea-question"
					value={questionValue}
					onChange={handleChangeQuestion}
					placeholder="Вопрос"
				/>
				<Button
					margin={"0 0 20px 0"}
					onClick={handleAddAnswer}
				>+</Button>
				{answers && answers.map((_, ind) => {
					return <div className="editor" key={ind}>
						<input
							type="radio"
							className="radio"
							name="answer"
							onChange={() => handleSetCorrect(ind)}
							checked={answers[ind].correct}
						/>
						<textarea
							className="textarea"
							value={answers[ind].text}
							placeholder={`Ответ ${ind + 1}`}
							onInput={({ target }) => handleChangeAnswer(ind, (target as HTMLInputElement).value)}
						/>
						<button
							className="delete"
							onClick={(e) => {
								e.preventDefault()
								handleDelete(ind)
							}}
						>X</button>
					</div>
				})}
			</form>
			}
		</div>
	)
}

export const QuestionEditor = styled(QuestionEditorContainer)`
	border: 1px solid #4e4e4e;
	padding: 20px;
	border-radius: 10px;
	margin-bottom: 20px;
	cursor: pointer;
	position: relative;

	& .wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	& .button {
		height: 30px;
		margin-left: 10px;
		font-size: 20px;
		line-height: 1;
		background-color: transparent;
		border-radius: 5px;
		border: 1px solid #4e4e4e;
		cursor: pointer;
	}

	& .question-title {
		font-size: 25px;
		margin: 20px 0;
	}

	& .editor {
		display: flex;
		align-items: center;
	}

	& .textarea {
		width: 100%;
		padding: 20px;
		margin: 10px;
		resize: vertical;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 16px;
		border-radius: 10px;

		&-question {
			margin: 0 0 10px 0;
		}
	}

	& .delete {
		background-color: red;
		border: none;
		border-radius: 5px;
		padding: 10px;
		color: #fff;
		cursor: pointer;
		transition: opacity 0.3s;

		&:hover {
			opacity: 0.5;
		}
	}
`

