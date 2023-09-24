import styled from "styled-components";

export const Input = styled.input`
  background-color: var(--very-light-grayish-cyan);
  border: none;
  border-radius: 5px;
  width: 100%;
  direction: rtl;
  height: 45px;
  font-size: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  color: var(--very-dark-cyan);
  font-weight: 700;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: 2px solid var(--strong-cyan);
    border: none;
  }

  &::placeholder {
    color: var(--grayish-cyan);
  }
`;
