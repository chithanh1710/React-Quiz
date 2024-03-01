function Question({ question, onClickAnswer, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        onClickAnswer={onClickAnswer}
        answer={answer}
      />
    </div>
  );
}

function Options({ question, answer, onClickAnswer }) {
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          onClick={() => {
            onClickAnswer(i);
          }}
          key={option}
          className={`btn btn-option ${answer === i ? "answer" : ""} ${
            answer !== null
              ? question.correctOption === i
                ? "correct"
                : "wrong"
              : ""
          } `}
          disabled={answer !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;
