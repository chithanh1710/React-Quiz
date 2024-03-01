import { useEffect } from "react";

function Timer({ secondRemaining, handleSetTime, handleQuestionFinish }) {
  useEffect(() => {
    const timer = setInterval(() => {
      if (secondRemaining === 0) {
        handleQuestionFinish();
      } else {
        handleSetTime();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [secondRemaining]);

  return (
    <div className="timer">
      {Math.floor(secondRemaining / 60)
        .toString()
        .padStart(2, 0)}
      :{(secondRemaining % 60).toString().padStart(2, 0)}
    </div>
  );
}

export default Timer;
