const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  hightScore: 0,
  secondRemaining: null,
};

export const SECS_PER_QUESTIONS = 10;

export default initialState;
