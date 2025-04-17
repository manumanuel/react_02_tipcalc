import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmount_A, setTipAmount_A] = useState(0);
  const [tipAmount_B, setTipAmount_B] = useState(0);

  const totalTip = Number(tipAmount_A) + Number(tipAmount_B);
  const tipPercentage = totalTip / 100;
  const totalBill = parseFloat(billAmount) + parseFloat(totalTip);

  function handleReset() {
    setBillAmount(0);
    setTipAmount_A(0);
    setTipAmount_B(0);
  }

  return (
    <>
      <Bill billAmount={billAmount} onSetBillAmount={setBillAmount} />
      <TipPerPerson tipAmt={tipAmount_A} onSetTip={setTipAmount_A}>
        How you rate the service ?
      </TipPerPerson>
      <TipPerPerson tipAmt={tipAmount_B} onSetTip={setTipAmount_B}>
        How your companion rate the service ?
      </TipPerPerson>
      <Output
        billTotal={billAmount}
        tipPercentage={tipPercentage}
        tipAmount={totalTip}
        totalBill={totalBill}
      />
      <Reset onReset={handleReset} />
    </>
  );
}

function Bill({ billAmount, onSetBillAmount }) {
  return (
    <div>
      <label>How much is the bill amount</label>
      <input
        type="number"
        placeholder="0.00"
        value={billAmount}
        onChange={(el) => onSetBillAmount(el.target.value)}
      />
    </div>
  );
}
function TipPerPerson({ children, tipAmt, onSetTip }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tipAmt} onChange={(el) => onSetTip(el.target.value)}>
        <option value="0">Not satisfied</option>
        <option value="5">It was okay</option>
        <option value="10">Good</option>
        <option value="20">Excellent Service</option>
      </select>
    </div>
  );
}
function Output({ billTotal, tipAmount, tipPercentage, totalBill }) {
  return (
    <div>
      {billTotal > 0 && (
        <>
          <h3>Output</h3>
          <p>Total Amount: {billTotal}</p>
          <span>
            <p>Tip Amount: {tipAmount}</p>
            <p>Tip Percentage: {tipPercentage}</p>
          </span>

          <p>Total Amount with Tip: {totalBill} </p>
        </>
      )}
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
