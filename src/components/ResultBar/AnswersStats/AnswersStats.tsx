import { useState } from "react"
import styled from "styled-components"

interface AnswersStatsProps {
	className?: string,
	answers: Array<boolean | null>,
	testLength: number
}

const AnswersStatsContainer: React.FC<AnswersStatsProps> = ({ className, answers, testLength }) => {
	const [barHover, setBarHover] = useState(false)
	const answered = answers.filter(ans => typeof ans === 'boolean')
	return (
		<div
			className={className}
			onMouseEnter={() => setBarHover(true)}
			onMouseLeave={() => setBarHover(false)}
		>
			<div className="number">0</div>

			<div className="answers">
				{answers.map((res: boolean | null, index: number) => {
					return <div
						className={`${typeof res === 'boolean' ?
							res ? 'answer answer-correct' : 'answer answer-wrong'
							: 'answer answer-empty'}`}
						key={index}
					/>
				})}
			</div>

			<div className="number">{testLength}</div>

			{barHover && <div
				className="hover-stats"
			>
				{`Пройдено: ${answered.length} из ${testLength}`}
			</div>}
		</div>
	)
}

export const AnswersStats = styled(AnswersStatsContainer)`
	display: flex;
	align-items: center;
	position: relative;
	width: fit-content;

	& .answers {
		width: 200px;
		height: 20px;
		border: 1px solid #4e4e4e;
		border-radius: 5px;
		display: flex;
	}

	& .answer {
		width :${({ testLength }) => 100 / testLength}%;
		background-color: #4e4e4e;
		height: 100%;

		&-correct {
			background-color: #0dd10d;
		}

		&-wrong {
			background-color: #ff0000;
		}

		&-empty {
			background-color: #fff;
		}
	}

	& .number {
		margin: 0 5px;
	}

	& .hover-stats {
		position: absolute;
		top: -25px;
		left: 50%;
		transform: translateX(-50%);
		border: 1px solid #4e4e4e;
		border-radius: 5px;
		padding: 5px;
		font-size: 10px;
		background-color: #fff;
	}
`

