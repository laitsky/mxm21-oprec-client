import styled from 'styled-components';

export const ButtonExample = styled.button`
  outline: none;
  font-weight: 900;
  font-size: 1em;
  color: #f4224b;
  border-radius: 50px;
  background-color: white;
  padding: 0.5em 2.5em 0.5em 2.5em;
  border: solid #f4224b;
  transition-duration: 0.2s;
  &:hover {
    background-color: #f4224b;
    color: #ffd008;
    cursor: pointer;
  }
`;

export const BtnExampleWithProps = styled.button<{ color?: string }>`
  outline: none;
  font-weight: 900;
  font-size: 1em;
  color: ${(props) => props.color || 'green'};
  border-radius: 50px;
  background-color: white;
  padding: 0.5em 2.5em 0.5em 2.5em;
  border: solid black;
  transition-duration: 0.2s;
`;

export const BasicButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const ExtendedBasicButton = styled(BasicButton)`
  color: tomato;
  border-color: tomato;
`;

export const ButtonMaxima = styled.button`
  outline: none;
  font-size: 1em;
  color: white;
  border-radius: 1em;
  background-color: #41ceba;
  padding: 0.5em 2.5em 0.5em 2.5em;
  transition-duration: 0.2s;
  box-shadow: -3px 4px white;
  margin-bottom: 4px;
  border-radius: 0.4em;
  &:hover {
    background-color: white;
    color: #1f2c4c;
    cursor: pointer;
    margin-right: 1px;
    margin-top: 4px;
    margin-bottom: 0;
    box-shadow: 0px 0px #1f2c4c;
  }

  @media (max-width: 80em) {
    font-size: 1em;
  }

  @media (max-width: 62em) {
    font-size: 0.9em;
  }

  @media (max-width: 48em) {
    font-size: 0.8em;
  }

  @media (max-width: 30em) {
    font-size: 0.7em;
  }
`;

export const ButtonBackForm = styled.button`
  outline: none;
  font-family: Kanit;
  font-size: 1em;
  color: #1f2c4c;
  border-radius: 1em;
  background-color: white;
  padding: 0.5em 2.5em 0.5em 2.5em;
  transition-duration: 0.2s;
  box-shadow: -3px 4px #1f2c4c;
  margin-bottom: 4px;
  border-radius: 1em;
  &:hover {
    background-color: #1f2c4c;
    color: white;
    cursor: pointer;
    margin-right: 1px;
    margin-top: 4px;
    margin-bottom: 0;
    box-shadow: 0px 0px #1f2c4c;
  }

  @media (max-width: 80em) {
    font-size: 1em;
  }

  @media (max-width: 62em) {
    font-size: 0.9em;
  }

  @media (max-width: 48em) {
    font-size: 0.8em;
  }

  @media (max-width: 30em) {
    font-size: 0.7em;
  }
`;

export const ButtonNextForm = styled.button`
  outline: none;
  font-family: Kanit;
  font-size: 1em;
  color: white;
  border-radius: 1em;
  background-color: #1f2c4c;
  padding: 0.5em 2.5em 0.5em 2.5em;
  transition-duration: 0.2s;
  box-shadow: -3px 4px white;
  margin-bottom: 4px;
  border-radius: 1em;
  &:hover {
    background-color: white;
    color: #1f2c4c;
    cursor: pointer;
    margin-right: 1px;
    margin-top: 4px;
    margin-bottom: 0;
    box-shadow: 0px 0px #1f2c4c;
  }

  @media (max-width: 80em) {
    font-size: 1em;
  }

  @media (max-width: 62em) {
    font-size: 0.9em;
  }

  @media (max-width: 48em) {
    font-size: 0.8em;
  }

  @media (max-width: 30em) {
    font-size: 0.7em;
  }
`;

export const ButtonBackFinal = styled.button`
  outline: none;
  font-family: Kanit;
  font-size: 1em;
  color: #f4224b;
  border-radius: 1em;
  background-color: white;
  padding: 0.5em 2.5em 0.5em 2.5em;
  transition-duration: 0.2s;
  box-shadow: -3px 4px #f4224b;
  margin-bottom: 4px;
  border-radius: 1em;
  &:hover {
    background-color: #f4224b;
    color: white;
    cursor: pointer;
    margin-right: 1px;
    margin-top: 4px;
    margin-bottom: 0;
    box-shadow: 0px 0px #1f2c4c;
  }

  @media (max-width: 80em) {
    font-size: 1em;
  }

  @media (max-width: 62em) {
    font-size: 0.9em;
  }

  @media (max-width: 48em) {
    font-size: 0.8em;
  }

  @media (max-width: 30em) {
    font-size: 0.7em;
  }
`;

export const ButtonNextFinal = styled.button`
  outline: none;
  font-family: Kanit;
  font-size: 1em;
  color: #f4224b;
  border-radius: 1em;
  background-color: #ffd008;
  padding: 0.5em 2.5em 0.5em 2.5em;
  transition-duration: 0.2s;
  box-shadow: -3px 4px #f4224b;
  margin-bottom: 4px;
  border-radius: 1em;
  &:hover {
    background-color: #f4224b;
    color: #ffd008;
    cursor: pointer;
    margin-right: 1px;
    margin-top: 4px;
    margin-bottom: 0;
    box-shadow: 0px 0px #1f2c4c;
  }

  @media (max-width: 80em) {
    font-size: 1em;
  }

  @media (max-width: 62em) {
    font-size: 0.9em;
  }

  @media (max-width: 48em) {
    font-size: 0.8em;
  }

  @media (max-width: 30em) {
    font-size: 0.7em;
  }
`;
