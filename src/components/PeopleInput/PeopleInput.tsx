import { Input } from "../../styled/Input";
import "./PeopleInput.scss";
import { Dispatch, SetStateAction } from "react";
import { ReactComponent as PeopleIcon } from "../../assets/icon-person.svg";

type PeopleInputProps = {
  peopleAmount: string;
  setPeopleAmount: Dispatch<SetStateAction<string>>;
};
export default function PeopleInput({ peopleAmount, setPeopleAmount }: PeopleInputProps) {
  const isError: boolean = peopleAmount === "0";

  return (
    <div className="people-amount">
      <div className="people-amount__texts">
        <h2>Number of People</h2>
        {isError && <span className="people-amount__error">Can't be zero</span>}
      </div>
      <div className="people-amount__input-container">
        <PeopleIcon />
        <Input
          className={isError ? "people-amount-input-error" : ""}
          pattern="^[0-9]+$"
          type="number"
          placeholder="0"
          value={peopleAmount}
          onChange={(e) => setPeopleAmount(e.target.value)}
        />
      </div>
    </div>
  );
}
