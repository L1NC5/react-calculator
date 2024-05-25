import { useReducer } from "react";
import ButtonPanel from "./ButtonPanel";
import MathReducer from "../reducers/MathReducer";
import Display from "./Display";

export default function Calculator() {
  const initialState = {
    previousNumber: "0",
    currentNumber: "0",
    currentOperator: "",
    operationState: false,
    decimalState: false,
    negativeState: false,
  };

  const [state, dispatch] = useReducer(MathReducer, initialState);

  return (
    <div className="flex flex-col items-center gap-8 bg-slate-800 p-4 rounded-lg">
      <Display
        previousNumber={state.previousNumber}
        currentNumber={state.currentNumber}
      />
      <ButtonPanel dispatch={dispatch} />
    </div>
  );
}
