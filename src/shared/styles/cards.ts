import styled from 'styled-components';
import { Palette } from '../../types';

export const DivisionCard = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 1em 12em 1.5em 2em;
`;

export const DivisionCardImg = styled.img`
  flex-grow: 1;
  margin-top: 1em;
  margin-bottom: 1em;
  height: 75px;
  width: auto;
`

export const DivisionCardBody = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  padding: 1em 2em 1em 2em;
`

export const DivisionCardTitle = styled.div`
  flex-grow: 1;
  font-family: Kanit;
  font-weight: 700;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: ${Palette.MxmPink}
`

export const DivisionCardContent = styled.div`
  flex-grow: 3;
  font-family: Varela;
  font-size: 1em;
  letter-spacing: -0.35px;
  color: ${Palette.MxmNavy}
`;