import { useReducer } from "react";

const initialState = {
  count: 0,
  step: 1,
};

const TYPE = {
  DEC: {
    type: "dec",
  },
  INC: {
    type: "inc",
  },
  RESET: {
    type: "reset",
  },

  SET_STEP: (data) => {
    return {
      type: "set_step",
      payload: data,
    };
  },

  SET_COUNT: (data) => {
    return {
      type: "set_count",
      payload: data,
    };
  },
};

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "set_step":
      return { ...state, step: action.payload };
    case "set_count":
      return { ...state, count: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Err");
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch(TYPE.DEC);
  };

  const inc = function () {
    dispatch(TYPE.INC);
  };

  const defineCount = function (e) {
    dispatch(TYPE.SET_COUNT(Number(e.target.value) || 0));
  };

  const defineStep = function (e) {
    dispatch(TYPE.SET_STEP(Number(e.target.value) || 0));
  };

  const reset = function () {
    dispatch(TYPE.RESET);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
