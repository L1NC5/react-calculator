import { actionTypes } from "../reducers/MathReducer";

function ButtonPanel({ dispatch }) {
  const buttons = [
    {
      label: "C",
      value: "C",
      backgroundColor: "bg-slate-400 hover:bg-slate-500",
      callback: () => () => {
        dispatch({ type: actionTypes.handleClear });
      },
    },
    {
      label: "+/-",
      value: "+/-",
      backgroundColor: "bg-slate-400 hover:bg-slate-500",
      callback: () => () => {
        dispatch({ type: actionTypes.handleNegative });
      },
    },
    {
      label: "%",
      value: "%",
      backgroundColor: "bg-slate-400 hover:bg-slate-500",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleOperator, payload: value });
      },
    },
    {
      label: "/",
      value: "/",
      backgroundColor: "bg-orange-400 hover:bg-orange-500",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleOperator, payload: value });
      },
    },
    {
      label: "7",
      value: "7",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleNumber, payload: value });
      },
    },
    {
      label: "8",
      value: "8",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleNumber, payload: value });
      },
    },
    {
      label: "9",
      value: "9",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleNumber, payload: value });
      },
    },
    {
      label: "x",
      value: "*",
      backgroundColor: "bg-orange-400 hover:bg-orange-500",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleOperator, payload: value });
      },
    },
    {
      label: "4",
      value: "4",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleNumber, payload: value });
      },
    },
    {
      label: "5",
      value: "5",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleNumber, payload: value });
      },
    },
    {
      label: "6",
      value: "6",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleNumber, payload: value });
      },
    },
    {
      label: "-",
      value: "-",
      backgroundColor: "bg-orange-400 hover:bg-orange-500",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleOperator, payload: value });
      },
    },
    {
      label: "1",
      value: "1",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleNumber, payload: value });
      },
    },
    {
      label: "2",
      value: "2",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleNumber, payload: value });
      },
    },
    {
      label: "3",
      value: "3",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleNumber, payload: value });
      },
    },
    {
      label: "+",
      value: "+",
      backgroundColor: "bg-orange-400 hover:bg-orange-500",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleOperator, payload: value });
      },
    },
    {
      label: "0",
      value: "0",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleNumber, payload: value });
      },
    },
    {
      label: ".",
      value: ".",
      callback: () => () => {
        dispatch({ type: actionTypes.handleDecimal });
      },
    },
    {
      label: "=",
      value: "=",
      backgroundColor: "bg-orange-400 hover:bg-orange-500",
      callback: (value) => () => {
        dispatch({ type: actionTypes.handleOperator, payload: value });
      },
    },
  ];
  return (
    <div className="w-full grid grid-cols-4 justify-items-center gap-2">
      {buttons.map((button, buttonKey) => (
        <button
          className={`size-16 rounded-full cursor-pointer transition-all duration-200 ${button.value === "0" && "col-span-2 w-full"} ${button.backgroundColor ? button.backgroundColor : "bg-slate-700 hover:bg-slate-600"} `}
          key={buttonKey}
          onClick={button.callback(button.value)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default ButtonPanel;
