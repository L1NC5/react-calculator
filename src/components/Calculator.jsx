import { useEffect, useState } from "react";
import ButtonPanel from "./ButtonPanel";

function Calculator() {
  const [previousNumber, setPreviousNumber] = useState("0");
  const [currentNumber, setCurrentNumber] = useState("0");
  const [currentOperator, setCurrentOperator] = useState("+");
  const [operationState, setOperationState] = useState("false");
  const [decimalState, setDecimalState] = useState(false);

  const switchOperator = (operator) => {
    setDecimalState(false);
    if (currentOperator !== "") {
      let result = 0;
      switch (currentOperator) {
        case "+":
          result = String(
            parseFloat(previousNumber, 10) + parseFloat(currentNumber, 10),
          );
          break;
        case "-":
          result = String(
            parseFloat(previousNumber, 10) - parseFloat(currentNumber, 10),
          );
          break;
        case "/":
          result = String(
            parseFloat(previousNumber, 10) / parseFloat(currentNumber, 10),
          );
          break;
        case "*":
          result = String(
            parseFloat(previousNumber, 10) * parseFloat(currentNumber, 10),
          );
          break;
      }
      setPreviousNumber(result);
      operator === "=" ? setCurrentNumber(result) : setCurrentNumber("0");
    }
    if (operator === "=") {
      setCurrentOperator("");
      setOperationState(false);
    } else {
      setCurrentOperator(operator);
      setOperationState(true);
    }
  };

  const handleDecimalState = () => {
    if (decimalState == false) {
      setDecimalState(true);
      setCurrentNumber(currentNumber + '.');
    } else {
    	console.log('Decimale già inserito!');
    }
  };

  // UseEffect: check for changes in the declared variable [name] and fire a function accordingly
  useEffect(() => {
    console.log(operationState);
  }, [operationState]);

  return (
    <div className="bg-slate-800 p-4 rounded-lg">
      {!operationState && <p>Ciao</p>}
      <ButtonPanel />
      <button
        className={`bg-white text-black p-4 ${operationState && "border-2 border-red-600"}`}
        onClick={() => switchOperator("=")}
      >
        =
      </button>
      <button
        className={`bg-white text-black p-4 ${operationState && "border-2 border-red-600"}`}
        onClick={() => switchOperator("+")}
      >
        +
      </button>
    </div>
  );
}

export default Calculator;
