import styled from "styled-components"
import { OnlyStyledComponent, Test } from "../types"
import { Button, Header, Pagination, TestCard } from "../components"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUserTests } from "../store"
import { useState } from "react"

const UserTestsContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
  const navigate: any = useNavigate()
  const tests = useSelector(selectUserTests)
  const [page, setPage] = useState(0)
  const left = page === 0 ? 0 : 6 * page
  const right = 6 * (page + 1)

  return (
    <div className={className}>
      <Header />
      <Button
        className="create-button"
        margin="0 0 10px 0"
        onClick={() => { navigate('/create/test') }}
      >Создать тест</Button>
      <div className="tests">
        {tests.slice(left, right).map((test: Test) => {
          return (
            <TestCard
              test={test}
              editable={true}
              key={test._id}
            />
          )
        })}
      </div>

      {tests.length > 6 ? (
        <Pagination
          currentPage={page}
          setCurrentPage={setPage}
          totalPages={Math.ceil(tests.length / 6)}
        />
      ) : <></>}
    </div>
  )
}

export const UserTests = styled(UserTestsContainer)`
  
  & .tests {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  & .create-button {
    @media (max-width: 550px) {
      font-size: 16px;
      padding: 10px 15px;
    }
  }
`