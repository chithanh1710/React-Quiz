function StartScreen({ numQuestions, onClickBtn }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h4>{numQuestions} questions to test your React mastery</h4>
      <button onClick={onClickBtn} className="btn btn-ui">
        Let's start!
      </button>
    </div>
  );
}

export default StartScreen;
