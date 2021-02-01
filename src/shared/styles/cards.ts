import styled from 'styled-components';
import { Palette } from '../../types';

export const LoginFormCard = styled.div`
  background-color: #fafafa;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transition: 0.3s;
  padding: 2.5em 3em 2.5em 3em;
  border-radius: 7px;
  
  @media (max-width: 450px) {
    padding: 1.5em;
  }

  @media (max-height: 667px) {
    height: 100vh;
    width: 100vw;
  }

`

export const DivisionCard = styled.div`
  background-color: white;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.3s;
  padding: 0.5em 2em 1em 2em;
  border-radius: 15px;
  line-height: 1.85;
  @media (max-width: 450px) {
    flex-direction: column;
    margin-left: 1.5em;
    padding-left: 0;
    padding-right: 0.5em;
  }
`;

export const DivisionCardImg = styled.img`
  height: 75px;
  width: auto;
  @media (max-width: 450px) {
    margin-top: 1em;
    height: 65px;
  }

`
export const DivisionCardBody = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  margin: 1em 2em 1em 1.5em;
  padding-left: 1.5em;
  border-left: 0.5px solid ${Palette.MxmPink};

  @media (max-width: 400px) {
    margin-right: 0;
  }
`

export const DivisionCardTitle = styled.div`
  flex-grow: 1;
  font-family: Kanit;
  font-weight: 700;
  font-size: 1.85em;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: ${Palette.MxmPink};

  @media (max-width: 452px) {
    font-size: 1em;
    letter-spacing: 1.5px;
  }
`

export const DivisionCardContent = styled.div`
  flex-grow: 3;
  font-family: Varela;
  font-size: 0.95em;
  letter-spacing: -0.35px;
  color: ${Palette.MxmNavy}
`;
