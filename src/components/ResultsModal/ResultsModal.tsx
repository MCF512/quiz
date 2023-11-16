import React from "react"
import styled from "styled-components"
import { Button, Container } from "../"
import { useNavigate } from "react-router-dom"

interface ResultsModalProps {
	className?: string,
	text: string,
	restart: () => void
}

const ResultsModalContainer: React.FC<ResultsModalProps> = ({ className, text, restart }) => {
	const navigate: any = useNavigate()

	return (
		<div className={className}>
			<Container>
				<div className="wrapper">
					<div className="text">
						<p className="text-top">Правильных ответов:</p>
						<p className="text-bottom">{text}</p>
					</div>

					<div className="buttons">
						<Button
							margin="0 5px"
							onClick={() => navigate('/')}
						>
							На главную
						</Button>
						<Button
							margin="0 5px"
							onClick={restart}
						>
							Пройти тест еще раз
						</Button>
					</div>
				</div>
			</Container>
		</div>
	)
}

export const ResultsModal = styled(ResultsModalContainer)`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: #4e4e4e;

	& .wrapper {
		background-color: #fff;
		padding: 20px;
		border-radius: 5px;
		margin-top: 50vh;
		transform: translateY(-50%);
	}

	& .text {
		text-align: center;
		font-size: 30px;
		font-weight: bold;

		&-top {
			margin-bottom: 15px;

		}

		&-bottom {
			margin-top: 0px;
			color: #10e010;
		}
	}

`
