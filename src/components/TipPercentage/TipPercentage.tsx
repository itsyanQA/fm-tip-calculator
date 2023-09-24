import { TipOption } from "../../styled/TipOption";
import "./TipPercentage.scss";
import { Dispatch, SetStateAction, useState } from "react";

type TipPercentageProps = {
  tipPercentage: string;
  setTipPercentage: Dispatch<SetStateAction<string>>;
};

export default function TipPercentage({ tipPercentage, setTipPercentage }: TipPercentageProps) {
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const TIP_OPTIONS_FIRST_GROUP = ["5", "10", "15"];
  const TIP_OPTIONS_SECOND_GROUP = ["25", "50"];
  const isSelected = (tipOption: string) => tipOption === tipPercentage;
  const onOptionClickHandler = (e: any) => setTipPercentage(e.target.value);

  return (
    <div className="tip-percentage">
      <h2>Select Tip %</h2>
      <div className="tip-percentage__options">
        <div className="tip-percentage__options__group">
          {TIP_OPTIONS_FIRST_GROUP.map((tipOption) => (
            <TipOption
              key={tipOption}
              value={tipOption}
              onClick={onOptionClickHandler}
              className={isSelected(tipOption) ? "tip-percentage__options__group__selected" : ""}
            >
              {`${tipOption}%`}
            </TipOption>
          ))}
        </div>
        <div className="tip-percentage__options__group">
          {TIP_OPTIONS_SECOND_GROUP.map((tipOption) => (
            <TipOption
              key={tipOption}
              value={tipOption}
              onClick={onOptionClickHandler}
              className={isSelected(tipOption) ? "tip-percentage__options__group__selected" : ""}
            >
              {`${tipOption}%`}
            </TipOption>
          ))}
          {!isCustom ? (
            <TipOption onClick={() => setIsCustom((prev) => !prev)} className="tip-percentage__custom-option">
              Custom
            </TipOption>
          ) : (
            <input
              type="number"
              pattern="^[0-9]+$"
              placeholder="0"
              value={tipPercentage}
              onChange={(e) => setTipPercentage(e.target.value)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
