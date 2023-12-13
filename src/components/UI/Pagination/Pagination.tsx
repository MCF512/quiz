import { Dispatch, SetStateAction } from "react"
import styled from "styled-components"

interface Props {
  className?: string,
  currentPage: number,
  totalPages: number,
  setCurrentPage: Dispatch<SetStateAction<number>>,
}

const PaginationContainer: React.FC<Props> = ({ className, currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className={className}>
      <button
        className="button"
        onClick={() => { setCurrentPage(currentPage - 1) }}
        disabled={currentPage === 0}
      >
        Назад
      </button>
      <div>
        {currentPage + 1}/{totalPages}
      </div>
      <button
        className="button"
        onClick={() => { setCurrentPage(currentPage + 1) }}
        disabled={currentPage === totalPages}
      >
        Вперед
      </button>
    </div>
  )
}

export const Pagination = styled(PaginationContainer)`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;

  & .button {
    margin: 0 10px;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    background-color: transparent;
	  border: 1px solid #4e4e4e;
	  color: #4e4e4e;
    transition: background-color 0.5s, color 0.5s, opacity 0.2s;
    font-weight: 600;

    &:hover {
      background-color: #4e4e4e;
      color: #fff;
    }

    &:active {
      opacity: 0.8;
    }
  }
`