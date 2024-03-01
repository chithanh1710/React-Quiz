// REACT
import { useEffect, useReducer } from "react";
///////////////////////////////////////

// DATA
import dataQuestion from "./data/data";

// UTILITIES ( Tiện ích )
import wait from "./utilities/wait";

// USE REDUCER
import initialState from "./reducer/initialState";
import ACTION from "./reducer/actions";
import reducer from "./reducer/reducer";
///////////////////////////////////////

// LAYOUTS
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
///////////////////////////////////////

// COMPONENT
import Error from "./components/Error";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import Finish from "./components/Finish";
import Progress from "./components/Progress";
import NextQuestion from "./components/NextQuestion";
import Timer from "./components/Timer";
///////////////////////////////////////

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    questions,
    status,
    index,
    answer,
    points,
    secondRemaining,
    hightScore,
  } = state;
  const numQuestions = questions.length;
  const maxPoint = questions.reduce((total, val) => total + val.points, 0);

  useEffect(() => {
    async function fetchData() {
      try {
        // Wait 1s loading
        await wait(1);

        // const res = await fetch("http://localhost:8000/questions");
        // if (!res.ok) throw new Error(res.statusText);

        // const data = await res.json();
        // console.log("data: ", data);
        const data = dataQuestion.questions;
        dispatch(ACTION.FETCH_DATA(data));
      } catch (error) {
        dispatch(ACTION.FETCH_DATA_ERROR);
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleQuestionsStart = () => {
    dispatch(ACTION.ACTIVE);
  };

  const handleNewAnswer = (i) => {
    dispatch(ACTION.NEW_ANSWER(i));
  };

  const handleQuestionNext = () => {
    dispatch(ACTION.NEXT_QUESTION);
  };

  const handleQuestionFinish = () => {
    dispatch(ACTION.FINISH_QUESTION);
  };

  const handleRestart = () => {
    dispatch(ACTION.RESTART);
  };

  const handleSetTime = () => {
    dispatch(ACTION.TICK);
  };

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen
            numQuestions={numQuestions}
            onClickBtn={handleQuestionsStart}
          />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              points={points}
              answer={answer}
              maxPoint={maxPoint}
              numQuestions={numQuestions}
            />
            <Question
              onClickNext={handleQuestionNext}
              onClickFinish={handleQuestionFinish}
              question={questions[index]}
              onClickAnswer={handleNewAnswer}
              answer={answer}
              index={index}
              questionList={questions}
            />
            <Footer>
              <NextQuestion
                numQuestions={numQuestions}
                onClickNext={handleQuestionNext}
                onClickFinish={handleQuestionFinish}
                index={index}
                answer={answer}
              />
              <Timer
                secondRemaining={secondRemaining}
                handleSetTime={handleSetTime}
                handleQuestionFinish={handleQuestionFinish}
              />
            </Footer>
          </>
        )}
        {status === "finish" && (
          <Finish
            points={points}
            onClickRestart={handleRestart}
            questionList={questions}
            maxPoint={maxPoint}
            hightScore={hightScore}
          />
        )}
      </Main>
    </div>
  );
}
