import styled from "styled-components"
import { Test } from "../../types"
import { deleteTest, getDateAndTime } from "../../utils";
import { Button } from "..";
import { useNavigate } from "react-router-dom";


interface TestCardProps {
	className?: string,
	test: Test,
	editable: boolean
}
const TestCardContainer: React.FC<TestCardProps> = ({ className, test, editable }) => {
	const { questions, author, _id, testName, timestamp } = test;
	const navigate: any = useNavigate()
	return (
		<div className={className}>
			<div className="name">
				{testName}
			</div>
			<div className="text">
				Количество вопросов: {questions.length}
			</div>
			<div className="text">
				Автор: {author}
			</div>
			<div className="text">
				Дата создания: {getDateAndTime(Number(timestamp)).date}
			</div>

			{editable ?
				(
					<div className="buttons">
						<Button
							margin="10px 0 10px 0"
							onClick={() => navigate(`/test/results/${_id}`)}
						>Открыть</Button>
						<Button
							margin="0 0 10px 0"
							onClick={() => navigate(`/test/${_id}`)}
						>Изменить</Button>
						<Button
							onClick={() => {
								const confirmDelete = confirm('Удалить тест?')
								if (confirmDelete) {
									deleteTest(_id)
										.then(() => window.location.reload())
								}
							}}
						>Удалить</Button>
					</div>
				)
				:
				(
					<Button
						onClick={() => navigate(`/test/results/${_id}`)}
					>Открыть</Button>
				)
			}

		</div>
	)
}


export const TestCard = styled(TestCardContainer)`
	border : 1px solid #4e4e4e;
	padding: 10px;
	border-radius: 5px;

	& .text {
		font-size: 20px;
	}

	& .name {
		font-size: 20px;
		font-weight: 600;
	}

	& .buttons {
		display: flex;
		flex-direction: column;
	}
`
