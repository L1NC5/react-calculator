export const actionTypes = {
  handleNumber: "handleNumber",
  handleOperator: "handleOperator",
  handleDecimal: "handleDecimal",
  handleClear: "handleClear",
  handleNegative: "handleNegative",
};

export default function MathReducer(state, action) {
  switch (action.type) {
    case actionTypes.handleNumber:
      return {
        ...state,
        currentNumber:
          state.currentNumber === "0"
            ? action.payload
            : state.currentNumber + action.payload,
      };
    case actionTypes.handleOperator:
      let result;
      if (state.currentOperator) {
        switch (state.currentOperator) {
          case "+":
            result = String(
              parseFloat(state.previousNumber) +
                parseFloat(state.currentNumber),
            );
            break;
          case "-":
            result = String(
              parseFloat(state.previousNumber) -
                parseFloat(state.currentNumber),
            );
            break;
          case "*":
            result = String(
              parseFloat(state.previousNumber) *
                parseFloat(state.currentNumber),
            );
            break;
          case "/":
            result = String(
              parseFloat(state.previousNumber) /
                parseFloat(state.currentNumber),
            );
            break;
          case "%":
            result = String(parseFloat(state.currentNumber) / 100);
            break;
          default:
            return state;
        }
      } else {
        if (action.payload === "%") {
          result = String(parseFloat(state.currentNumber) / 100);
        } else {
          result = state.currentNumber;
        }
      }

      return {
        ...state,
        previousNumber: action.payload === "=" ? "0" : result,
        currentNumber:
          action.payload === "=" || action.payload === "%" ? result : "0",
        currentOperator:
          action.payload === "=" || action.payload === "%"
            ? ""
            : action.payload,
        operationState: action.payload !== "=",
      };
    case actionTypes.handleDecimal:
      if (!state.decimalState) {
        return {
          ...state,
          currentNumber: state.currentNumber + ".",
          decimalState: true,
        };
      }
      return state;
    case actionTypes.handleClear:
      return {
        previousNumber: "0",
        currentNumber: "0",
        currentOperator: "",
        operationState: false,
        decimalState: false,
        negativeState: false,
      };
    case actionTypes.handleNegative:
      if (!state.negativeState) {
        return {
          ...state,
          currentNumber: "-" + state.currentNumber,
          negativeState: true,
        };
      }
      else {
      	return {
       	...state,
        currentNumber: state.currentNumber.substring(1),
        negativeState: false,
       }
      }
      break;
    default:
      return state;
  }
}
