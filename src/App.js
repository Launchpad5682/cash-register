import { useState } from "react";
import "./styles.css";

function App() {
  const [btnNext, setBtnNext] = useState(true);
  const [cashdiv, setCashdiv] = useState(false);
  const [checkBtn, setCheckBtn] = useState(false);
  const [cashChange, setCashChange] = useState(false);

  function nextClick() {
    setBtnNext(false);
    setCashdiv(true);
    setCheckBtn(true);
  }

  function checkClick() {
    setCashChange(true);
    setCheckBtn(false);
  }

  return (
    <div className="App">
      <h2>Cash Register Manager</h2>
      <p>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </p>
      <div className="bill-box">
        <h3>Bill Amount:</h3>
        <input
          onChange={NaN}
          value=""
          placeholder="Enter the Bill Amount"
          type="number"
        ></input>
        {btnNext ? <button onClick={nextClick}>Next</button> : null}
      </div>
      {cashdiv ? (
        <div className="bill-box">
          <h3>Cash Given:</h3>
          <input
            value=""
            placeholder="Enter the Cash Amount"
            type="input"
          ></input>
          {checkBtn ? <button onClick={checkClick}>Check</button> : null}
        </div>
      ) : null}
      {cashChange ? (
        <div className="output">
          <table>
            <tbody>
              <tr>
                <th>No. of Notes</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Note</th>
                <td>2000</td>
                <td>500</td>
                <td>100</td>
                <td>20</td>
                <td>10</td>
                <td>5</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

export default App;
