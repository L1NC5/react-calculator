import { useState } from "react";

function Calculator() {
  const [previousNumber, setPreviousNumber] = useState("0");
  const [currentNumber, setCurrentNumber] = useState("0");
  const [currentOperator, setCurrentOperator] = useState("");
  let activeOperator = false;

  const switchOperator = (operator) => {
    if (currentOperator !== "") {
      let result = 0;
      switch (currentOperator) {
        case "+":
          result = String(
            parseInt(previousNumber, 10) + parseInt(currentNumber, 10),
          );
          break;
        case "-":
          result = String(
            parseInt(previousNumber, 10) - parseInt(currentNumber, 10),
          );
          break;
        case "/":
          result = String(
            parseInt(previousNumber, 10) / parseInt(currentNumber, 10),
          );
          break;
        case "*":
          result = String(
            parseInt(previousNumber, 10) * parseInt(currentNumber, 10),
          );
          break;
      }
      setPreviousNumber(result);
      if (operator === "=") {
        setCurrentNumber(result);
        activeOperator = false;
      } else {
        setCurrentNumber("0");
        activeOperator = true;
      }
    }
    switch (operator) {
      default:
        console.log("operator = 0");
    }
  };

  return (
    <>
    	{!activeOperator && <p>Ciao</p>}
      <button
        className={`bg-white text-black p-4 ${activeOperator && 'border-2 border-red-600'}`}
        onClick={() => switchOperator("=")}
      >
        Test
      </button>
    </>
  );
}

export default Calculator;
