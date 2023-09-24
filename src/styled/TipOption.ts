import styled from "styled-components";

export const TipOption = styled.button`
  text-align: center;
  background-color: var(--very-dark-cyan);
  color: var(--white);
  width: 40%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: hsla(172, 67%, 45%, 80%);
    color: var(--very-dark-cyan);
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
