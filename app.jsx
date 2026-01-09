import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState(""); 
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };


  const handleCalculate = () => {
    try {
   
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult("Ошибка");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Калькулятор</h2>
      <input
        type="text"
        value={input}
        placeholder="0"
        readOnly
        style={styles.input}
      />
      <div style={styles.buttons}>
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((btn) => (
          <button
            key={btn}
            style={styles.button}
            onClick={() => {
              if (btn === "=") handleCalculate();
              else handleClick(btn);
            }}
          >
            {btn}
          </button>
        ))}
        <button style={{...styles.button, backgroundColor: "#f44336"}} onClick={handleClear}>
          C
        </button>
      </div>
      {result !== "" && <h3>Результат: {result}</h3>}
    </div>
  );
}

const styles = {
  container: {
    width: "250px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    width: "100%",
    height: "40px",
    fontSize: "18px",
    textAlign: "right",
    marginBottom: "10px",
    padding: "5px",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "5px",
  },
  button: {
    padding: "15px",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default Calculator;
