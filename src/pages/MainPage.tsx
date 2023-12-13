import { useSelector } from "react-redux"
import styled from "styled-components"
import { OnlyStyledComponent, Test } from "../types"
import { Header, Pagination, TestCard } from "../components"
import { selectTests } from "../store"
import { useState } from "react"

const MainPageContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
	const tests = useSelector(selectTests)
	const [page, setPage] = useState(0)
	const left = page === 0 ? 0 : 6 * page
	const right = 6 * (page + 1)

	return (
		<div className={className}>
			<Header />

			<div className="cards">
				{tests.slice(left, right).map((test: Test) => {
					return (
						<TestCard
							key={test._id}
							editable={false}
							test={test}
						/>
					)
				})}
			</div>

			{tests.length > 6 ? (
				<Pagination
					currentPage={page}
					totalPages={Math.ceil(tests.length / 6)}
					setCurrentPage={setPage}
				/>
			) : <></>}
		</div>
	)
}

export const MainPage = styled(MainPageContainer)`

	& .cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 15px
	}

`
