import useTipLogic from "../../hooks/use-tip-logic";
import BillInput from "../BillInput/BillInput";
import PeopleInput from "../PeopleInput/PeopleInput";
import Result from "../Result/Result";
import TipPercentage from "../TipPercentage/TipPercentage";
import "./TipCalculator.scss";

export default function TipCalculator() {
  const {
    bill,
    tipPercentage,
    peopleAmount,
    tipPerPerson,
    totalPerPerson,
    shouldDisableResetButton,
    setBill,
    setTipPercentage,
    setPeopleAmount,
    resetClickHandler,
  } = useTipLogic();

  return (
    <main className="tip-calculator-container">
      <header>
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </header>
      <article className="tip">
        <div className="tip__left-div">
          <BillInput bill={bill} setBill={setBill} />
          <TipPercentage tipPercentage={tipPercentage} setTipPercentage={setTipPercentage} />
          <PeopleInput peopleAmount={peopleAmount} setPeopleAmount={setPeopleAmount} />
        </div>
        <div className="tip__right-div">
          <div className="tip__results-container">
            <Result resultText="Tip Amount" resultTipAmount={tipPerPerson} />
            <Result resultText="Total" resultTipAmount={totalPerPerson} />
          </div>
          <button
            className={`tip__clear-btn ${shouldDisableResetButton ? "disabled" : ""}`}
            onClick={resetClickHandler}
          >
            reset
          </button>
        </div>
      </article>
    </main>
  );
}
