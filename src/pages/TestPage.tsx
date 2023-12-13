import { useEffect } from "react";
import { OnlyStyledComponent, Result } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { getTest, selectAuthor, selectQuestions, selectResults, selectTestName, selectTimestamp } from "../store";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Header, ResultBar } from "../components";
import styled from "styled-components";
import { getDateAndTime } from "../utils";

const TestPageContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
  const dispatch: any = useDispatch()
  const params = useParams()
  const testName = useSelector(selectTestName)
  const questions = useSelector(selectQuestions)
  const author = useSelector(selectAuthor)
  const timestamp = useSelector(selectTimestamp)
  const results = useSelector(selectResults)
  const navigate: any = useNavigate()

  useEffect(() => {
    if (params.id) {
      dispatch(getTest(params.id))
    }
  }, [])

  return (
    <div className={className}>
      <Header />
      <h2 className="title">
        {testName}
      </h2>
      <div className="text">
        Количество вопросов: {questions.length}
      </div>
      <div className="text">
        Автор: {author}
      </div>
      <div className="text">
        Дата создания: {getDateAndTime(Number(timestamp)).date}
      </div>

      <Button
        onClick={() => {
          if (params.id) {
            navigate(`/quiz/${params.id}`)
          }
        }}
      >Запустить тест</Button>

      <h2>История прохождений</h2>

      <div className="results">
        {results.map((result: Result, index: number) => {
          return (
            <ResultBar
              key={index}
              result={result}
            />
          )
        })}
      </div>
    </div>
  )
}

export const TestPage = styled(TestPageContainer)`
  
  & .text {
    font-size: 18px;
    margin-bottom: 5px;
  }
`