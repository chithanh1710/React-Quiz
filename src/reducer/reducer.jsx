import initialState, { SECS_PER_QUESTIONS } from "./initialState";

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_data":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "fetch_data_error":
      return {
        ...state,
        status: "error",
      };
    case "active":
      return {
        ...state,
        status: "active",
        secondRemaining: state.questions.length * SECS_PER_QUESTIONS,
      };
    case "new_answer":
      const { correctOption, points } = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === correctOption
            ? state.points + points
            : state.points,
      };
    case "next_question":
      return {
        ...state,
        answer: null,
        index: state.index + 1,
      };
    case "finish_question":
      return {
        ...state,
        status: "finish",
        hightScore:
          state.points > state.hightScore ? state.points : state.hightScore,
      };
    case "restart":
      return {
        ...initialState,
        status: "ready",
        secondRemaining: state.questions.length * SECS_PER_QUESTIONS,
        questions: state.questions,
        hightScore: state.hightScore,
      };
    case "tick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
      };
    default:
      throw new Error("Action unknown");
  }
};

export default reducer;
