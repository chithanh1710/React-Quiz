function NextQuestion({
  onClickNext,
  onClickFinish,
  index,
  answer,
  numQuestions,
}) {
  if (answer === null) return null;

  return (
    <>
      {numQuestions - 1 > index ? (
        <button onClick={onClickNext} className="btn btn-ui">
          Next
        </button>
      ) : (
        <button onClick={onClickFinish} className="btn btn-ui">
          Finish
        </button>
      )}
    </>
  );
}

export default NextQuestion;
