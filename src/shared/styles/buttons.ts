import styled from 'styled-components';
import { Palette } from '../../types';

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

export const ButtonMaxima = styled.button<{ bgColor?: string }>`
  outline: none;
  font-size: 1em;
  color: white;
  border-radius: 1em;
  background-color: ${(props) => props.bgColor || '#41ceba'};
  padding: 0.5em 2.5em 0.5em 2.5em;
  transition-duration: 0.2s;
  box-shadow: -3px 4px white;
  margin-bottom: 4px;
  border-radius: 1.5em;
  &:hover {
    background-color: white;
    color: #1f2c4c;
    cursor: pointer;
    margin-right: 1px;
    margin-top: 4px;
    margin-bottom: 0;
    box-shadow: 0px 0px #1f2c4c;
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

  @media (max-width: 340px) {
    font-size: 0.8em;
  })
`;

export const DivisiNextButton = styled.button`
  outline: none;
  font-family: Kanit;
  font-size: 1em;
  color: white;
  border-radius: 1em;
  background-color: ${Palette.MxmCyan};
  padding: 0.5em 2.5em 0.5em 2.5em;
  transition-duration: 0.2s;
  box-shadow: -3px 4px white;
  margin-bottom: 4px;
  border-radius: 1em;
  &:hover {
    background-color: white;
    color: ${Palette.MxmNavy};
    cursor: pointer;
    margin-right: 1px;
    margin-top: 4px;
    margin-bottom: 0;
    box-shadow: 0px 0px white;
  }

  @media (max-width: 340px) {
    font-size: 0.8em;
  })
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

  @media (max-width: 340px) {
    font-size: 0.8em;
  })
`;

export const OprecButton = styled.button`
outline: none;
font-family: Kanit;
font-size: 1em;
color: white;
border-radius: 1em;
background-color: #1f2c4c;
padding: 0.5em 2.5em 0.5em 2.5em;
transition-duration: 0.2s;
box-shadow: -3px 4px ${Palette.MxmCyan};
margin-bottom: 4px;
border-radius: 1em;
&:hover {
  background-color: ${Palette.MxmCyan};
  color: white;
  cursor: pointer;
  margin-right: 1px;
  margin-top: 4px;
  margin-bottom: 0;
  box-shadow: 0px 0px #1f2c4c;
}

@media (max-width: 340px) {
  font-size: 0.8em;
})
`;

export const ButtonBackFinal = styled.button`
  outline: none;
  font-family: Kanit;
  font-size: 1em;
  color: ${Palette.MxmNavy};
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

  @media (max-width: 340px) {
    font-size: 0.8em;
  })
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

  &:hover:enabled {
    background-color: #f4224b;
    color: #ffd008;
    cursor: pointer;
    margin-right: 1px;
    margin-top: 4px;
    margin-bottom: 0;
    box-shadow: 0px 0px #1f2c4c;
  }

  &:disabled {
    background-color: #d6af0b;
  }

  @media (max-width: 340px) {
    font-size: 0.8em;
  })0.8
`;
