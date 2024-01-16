import React from "react"
import styled from "styled-components"
import { AnswersStats } from "./AnswersStats/AnswersStats"
import { countCorrectAnswers, getDateAndTime } from "../../utils"
import { Result } from "../../types"

interface ResultBarProps {
	className?: string,
	result: Result
}

const ResultBarContainer: React.FC<ResultBarProps> = ({ className, result }) => {
	const { timestamp, answers, testLength, user } = result
	const correctAnswersCount = countCorrectAnswers(answers)
	const { date, time } = getDateAndTime(Number(timestamp))

	return (
		<div className={className}>
			<div className="date-info">
				<div className="user">{user !== ' ' ? user : 'Гость'}</div>
				<div className="date">Дата: {date}</div>
				<div className="time">Время: {time}</div>
			</div>

			<AnswersStats answers={answers} testLength={testLength} />

			<div className="result">
				{`Верно: ${correctAnswersCount} из ${testLength}`}
			</div>

		</div>
	)
}

export const ResultBar = styled(ResultBarContainer)`
	border: 1px solid #4e4e4e;
	padding: 30px;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;

	& .time {
		font-size: 12px;
	}

	& .user {
		font-size: 18px;
		font-weight: 600;
	}

	@media (max-width: 550px) {
		flex-direction: column;

		& .date-info {
			margin-bottom: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
`
