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
	const { timestamp, answers, testLength } = result
	const correctAnswersCount = countCorrectAnswers(answers)
	const { date, time } = getDateAndTime(timestamp)

	return (
		<div className={className}>
			<div className="date-info">
				<div className="date">{date}</div>
				<div className="time">{time}</div>
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
`
