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
