import "./Result.scss";

type ResultProps = {
  resultText: string;
  resultTipAmount: string;
};

export default function Result({ resultText, resultTipAmount }: ResultProps) {
  return (
    <div className="result">
      <div className="result__tip">
        <span className="result__tip__in-of">{resultText}</span>
        <span className="result__tip__out-of">/ person</span>
      </div>
      <span className="result__number">{`$${resultTipAmount || "0.00"}`}</span>
    </div>
  );
}
