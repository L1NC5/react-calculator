function ButtonPanel({ numberHandler, switchOperator, handleDecimalState }) {
  const buttons = [
    // { label: "C", value: "C", callback: "" },
    // { label: "+/-", value: "+/-", callback: "" },
    {
      label: "%",
      value: "%",
      callback: (value) => () => {
        switchOperator(value);
      },
    },
    {
      label: "/",
      value: "/",
      callback: (value) => () => {
        switchOperator(value);
      },
    },
    {
      label: "7",
      value: "7",
      callback: (value) => () => {
        numberHandler(value);
      },
    },
    {
      label: "8",
      value: "8",
      callback: (value) => () => {
        numberHandler(value);
      },
    },
    {
      label: "9",
      value: "9",
      callback: (value) => () => {
        numberHandler(value);
      },
    },
    {
      label: "x",
      value: "x",
      callback: (value) => () => {
        switchOperator(value);
      },
    },
    {
      label: "4",
      value: "4",
      callback: (value) => () => {
        numberHandler(value);
      },
    },
    {
      label: "5",
      value: "5",
      callback: (value) => () => {
        numberHandler(value);
      },
    },
    {
      label: "6",
      value: "6",
      callback: (value) => () => {
        numberHandler(value);
      },
    },
    {
      label: "-",
      value: "-",
      callback: (value) => () => {
        switchOperator(value);
      },
    },
    {
      label: "1",
      value: "1",
      callback: (value) => () => {
        numberHandler(value);
      },
    },
    {
      label: "2",
      value: "2",
      callback: (value) => () => {
        numberHandler(value);
      },
    },
    {
      label: "3",
      value: "3",
      callback: (value) => () => {
        numberHandler(value);
      },
    },
    {
      label: "+",
      value: "+",
      callback: (value) => () => {
        switchOperator(value);
      },
    },
    {
      label: "0",
      value: "0",
      callback: (value) => () => {
        numberHandler(value);
      },
    },
    {
      label: ".",
      value: ".",
      callback: () => () => {
        handleDecimalState();
      },
    },
    {
      label: "=",
      value: "=",
      callback: (value) => () => {
        switchOperator(value);
      },
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-2">
      {buttons.map((button, buttonKey) => (
        <button
          className={`size-16 rounded-full bg-slate-700 ${button.value === "0" && "col-span-2 w-full"} `}
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
