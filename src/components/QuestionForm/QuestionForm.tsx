import { useDispatch } from "react-redux"
import styled from "styled-components"
import { ACTION } from "../../store"
import { Answer } from "../../types"

interface QuestionFormProps {
	className?: string,
	question: string,
	answers: Array<Answer>,
	visible: boolean,
	index: number
}

const QuestionFormContainer: React.FC<QuestionFormProps> = ({ className, question, answers, visible, index }) => {
	const dispatch: any = useDispatch()

	const handleChange = (isCorrect: boolean) => {
		return dispatch({ type: ACTION.SET_USER_ANSWER, payload: { index, isCorrect } })
	}

	return (
		<div className={className}>
			<div className="question">{question}</div>
			{answers.map((ans) => {
				return <div className="answer" key={ans._id || Math.random()}>
					<input
						type="radio"
						className="input"
						name="question"
						onChange={() => handleChange(ans.correct)}
					/>
					<label
						className="label"
						htmlFor="question">
						{ans.text}
					</label>
				</div>
			})}
		</div>
	)
}

export const QuestionForm = styled(QuestionFormContainer)`
	display: ${({ visible }) => visible ? 'block' : 'none'};
	max-width: 900px;

	& .question {
		font-size: 25px;
		text-align: center;
		margin-bottom: 20px;
	}

	& .answer {
		margin-bottom: 15px;
		display: flex;
	}

	& .label {
		display: block;
		font-size: 25px;
		max-width: 500px;
		margin-bottom: 1px;
		word-wrap: normal;
		margin-left: 5px;
	}

	& .input  {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}

`
