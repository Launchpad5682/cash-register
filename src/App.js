import { useState } from "react";
import "./styles.css";

function checkChange(bill, cash) {
  if (cash < bill) {
    return -1;
  } else if (cash === bill) {
    return 1;
  } else {
    let returnAmount = parseInt(cash) - parseInt(bill);

    let notes = [2000, 500, 100, 20, 10, 5, 1];
    let returnNotes = [0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < notes.length; i++) {
      returnNotes[i] = Math.floor(returnAmount / notes[i]);
      returnAmount = returnAmount - notes[i] * returnNotes[i];

      if (returnAmount === 0) {
        break;
      }
    }
    console.log(returnNotes);
    return returnNotes;
  }
}

function App() {
  const [btnNext, setBtnNext] = useState(true);
  const [cashdiv, setCashdiv] = useState(false);
  const [checkBtn, setCheckBtn] = useState(false);
  const [cashChange, setCashChange] = useState(false);

  // variables
  const [amount, setAmount] = useState("");
  const [validAmount, setValidAmount] = useState(false);
  const [cash, setCash] = useState("");
  const [changeMessage, setChangeMessage] = useState(false);
  const [invalidCash, setInvalidCash] = useState(false);
  const [changeList, setChangeList] = useState([]);
  const [reset, setReset] = useState(false);

  const notes = [2000, 500, 100, 20, 10, 5, 1];

  function nextClick() {
    setValidAmount(false);
    if (amount < 1) {
      setValidAmount(true);
    } else {
      setBtnNext(false);
      setCashdiv(true);
      setCheckBtn(true);
    }
  }

  function checkClick() {
    setInvalidCash(false);
    setChangeMessage(false);
    let response = checkChange(amount, cash);
    if (response === -1) {
      setInvalidCash(true);
    } else if (response === 1) {
      setChangeMessage(true);
    } else {
      setCashChange(true);
      setChangeList(response);
      console.log(response);
    }
    setReset(true);
  }

  function changeHandler(event) {
    let id = event.target.id;
    if (id === "next-btn") {
      setAmount(event.target.value);
    } else {
      setCash(event.target.value);
    }
  }

  function resetClick() {
    setAmount("");
    setBtnNext(true);
    setCash("");
    setCashChange(false);
    setCashdiv(false);
    setChangeList(false);
    setChangeMessage(false);
    setCheckBtn(false);
    setInvalidCash(false);
    setReset(false);
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
          onChange={changeHandler}
          value={amount}
          placeholder="Enter the Bill Amount"
          type="number"
          id="next-btn"
        ></input>
        {btnNext ? <button onClick={nextClick}>Next</button> : null}
      </div>
      {validAmount ? (
        <p>Billed amount is not valid, enter a valid amount</p>
      ) : null}
      {cashdiv ? (
        <div className="bill-box">
          <h3>Cash Given:</h3>
          <input
            onChange={changeHandler}
            value={cash}
            placeholder="Enter the Cash Amount"
            type="number"
          ></input>{" "}
          <button onClick={checkClick}>Check</button>
        </div>
      ) : null}
      {changeMessage ? <p>No change to be given</p> : null}
      {invalidCash ? <p>Invalid Cash</p> : null}
      {cashChange ? (
        <div className="output">
          <table>
            <tbody>
              <tr>
                <th>No. of Notes</th>
                {changeList.map((change) => (
                  <td>{change}</td>
                ))}
              </tr>
              <tr>
                <th>Note</th>
                {notes.map((note) => (
                  <td>{note}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
      {reset ? <button onClick={resetClick}>Reset</button> : null}
    </div>
  );
}

export default App;
