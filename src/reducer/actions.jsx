const ACTION = {
  FETCH_DATA: (data) => {
    return {
      type: "fetch_data",
      payload: data,
    };
  },

  FETCH_DATA_ERROR: {
    type: "fetch_data_error",
  },

  ACTIVE: {
    type: "active",
  },

  NEW_ANSWER: (data) => {
    return {
      type: "new_answer",
      payload: data,
    };
  },

  NEXT_QUESTION: {
    type: "next_question",
  },

  FINISH_QUESTION: {
    type: "finish_question",
  },

  RESTART: {
    type: "restart",
  },

  TICK: {
    type: "tick",
  },
};

export default ACTION;
