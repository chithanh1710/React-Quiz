function Finish({ points, onClickRestart, maxPoint, hightScore }) {
  const percentage = Math.ceil((points / maxPoint) * 100);

  let emoji;
  if (percentage === 100) emoji = "👑";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "💪";
  if (percentage > 0 && percentage < 50) emoji = "😔";
  if (percentage === 0) emoji = "🥺";

  return (
    <div className="finish">
      <div className="result">
        <span>{emoji}</span> You score <strong>{points}</strong> out of{" "}
        {maxPoint} ({percentage}%)
      </div>
      <p className="highScore">
        Hight score: <strong>{hightScore}</strong> points
      </p>
      <button onClick={onClickRestart} className="btn btn-restart">
        Restart
      </button>
    </div>
  );
}

export default Finish;
