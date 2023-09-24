import { Input } from "../../styled/Input";
import "./BillInput.scss";
import { ReactComponent as DollarIcon } from "../../assets/icon-dollar.svg";
import { SetStateAction, Dispatch } from "react";

type BillInputProps = {
  bill: string;
  setBill: Dispatch<SetStateAction<string>>;
};

export default function BillInput({ bill, setBill }: BillInputProps) {
  return (
    <div className="bill">
      <h2>Bill</h2>
      <div className="bill__input-container">
        <DollarIcon />
        <Input
          type="number"
          pattern="^[0-9]+$"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          placeholder="0"
        />
      </div>
    </div>
  );
}
