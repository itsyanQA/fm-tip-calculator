import { useState, useEffect } from "react";

export default function useTipLogic() {
  const [bill, setBill] = useState<string>("");
  const [tipPercentage, setTipPercentage] = useState<string>("");
  const [peopleAmount, setPeopleAmount] = useState<string>("");
  const [tipPerPerson, setTipPerPerson] = useState<string>("");
  const [totalPerPerson, setTotalPerPerson] = useState<string>("");

  useEffect(() => {
    if (+bill && +tipPercentage && +peopleAmount) {
      const tipPerPerson = ((+bill / 100) * +tipPercentage) / +peopleAmount;
      const totalPerPerson = +bill / +peopleAmount + tipPerPerson;
      setTipPerPerson(tipPerPerson.toFixed(2).toString());
      setTotalPerPerson(totalPerPerson.toFixed(2).toString());
    }
  }, [bill, tipPercentage, peopleAmount]);

  const resetClickHandler = (): void => {
    if (!shouldDisableResetButton) {
      setBill("");
      setTipPerPerson("");
      setPeopleAmount("");
      setTipPerPerson("");
      setTotalPerPerson("");
    }
  };

  const shouldDisableResetButton: boolean = !!(!bill || !tipPercentage || !peopleAmount);

  return {
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
  };
}
