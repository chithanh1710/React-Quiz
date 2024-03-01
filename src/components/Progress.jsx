function Progress({ numQuestions, index, points, answer, maxPoint }) {
  return (
    <div className="progress">
      <progress
        max={numQuestions}
        value={answer !== null ? index + 1 : index}
      />

      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        Score <strong>{points}</strong>/{maxPoint}
      </p>
    </div>
  );
}
export default Progress;
