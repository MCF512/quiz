import { useRef } from "react"
import styled from "styled-components"
import { OnlyStyledComponent } from "../types"
import { useDispatch, useSelector } from "react-redux"
import { Button, QuestionForm, ResultsModal } from "../components"
import { useEffect, useState } from "react"
import { selectQuestions, startTest, selectUserAnswers, ACTION } from "../store"
import { countCorrectAnswers, saveResultsToStorage } from "../utils"

const QuizPageContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
	const test = useSelector(selectQuestions)
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [resultsModalOpen, setResultsModalOpen] = useState(false)
	const userAnswers = useSelector(selectUserAnswers)
	const dispatch: any = useDispatch();
	const formRef = useRef<HTMLFormElement>(null)

	const nextQuestion = () => {
		if (currentQuestion + 1 === test.length) {
			setResultsModalOpen(true)
			saveResultsToStorage({
				timestamp: Date.now(),
				answers: userAnswers,
				testLength: test.length
			})
		} else {
			setCurrentQuestion(currentQuestion + 1)
		}
	}


	const handleRestart = () => {
		setCurrentQuestion(0)
		setResultsModalOpen(false)
		dispatch({ type: ACTION.RESET_USER_ANSWERS })
		if (formRef.current) {
			formRef.current.reset()
		}
	}

	useEffect(() => {
		dispatch(startTest())
	}, [])

	if (!test.length) return
	return (
		<div className={className}>
			<div className="current">{`${currentQuestion + 1}/${test.length}`}</div>
			<form className="form" ref={formRef}>
				{test.map(({ question, answers }, index) => {
					return <QuestionForm
						key={index}
						question={question}
						answers={answers}
						index={index}
						visible={index === currentQuestion}
					/>
				})}
			</form>


			<div className="buttons">
				<Button
					onClick={() => setCurrentQuestion(currentQuestion - 1)}
					disabled={currentQuestion === 0}
					margin="0 5px"
				>Предыдущий вопрос</Button>
				<Button
					onClick={nextQuestion}
					margin="0 5px"
				>{currentQuestion + 1 === test.length ? 'Завершить тест' : "Следующий вопрос"}</Button>
			</div>

			{resultsModalOpen && <ResultsModal
				text={`${countCorrectAnswers(userAnswers)}/${test.length}`}
				restart={handleRestart}
			/>}
		</div>
	)
}

export const QuizPage = styled(QuizPageContainer)`

	& .current {
		text-align: center;
		font-size: 25px;
		margin-bottom: 20px;
	}

	& .buttons {
		display: flex;
		justify-content: center;
	}

	& .form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`
