import styled from "styled-components"


interface TestCardProps {
	className?: string
}
const TestCardContainer: React.FC<TestCardProps> = ({ className }) => {


	return (
		<div className={className}>
			<>hello</>
		</div>
	)
}


export const TestCard = styled(TestCardContainer)`

`
