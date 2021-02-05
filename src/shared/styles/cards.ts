import styled from 'styled-components';
import { Palette } from '../../types';
import { blink } from './keyframes';

export const LoginFormCard = styled.div`
  background-color: #fafafa;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transition: 0.3s;
  padding: 2.5em 3em 2.5em 3em;
  border-radius: 7px;

  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }

  @media (max-width: 450px) {
    padding: 1.5em;
  }
`;

export const HomepageCheckCard = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  background-color: #fafafa;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  -webkit-animation: ${blink} 1.2s infinite alternate;
  animation: ${blink} 1.2s infinite alternate;
  transition: 0.3s;
  padding: 2.5em 3em 2.5em 3em;
  margin-top: 2em;
  margin-bottom: 2em;
  border-radius: 7px;
  @media (max-width: 450px) {
    padding: 1.5em;
  }

  @media (max-width: 402px) {
    padding: 2.5em 1.2em 0.5em 1.2em;
    height: auto;
  }
`;

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

  @media (max-width: 490px) {
    padding: 1em 0.5em 1em 0.5em;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    padding-left: 0;
    padding-right: 1em;
  }
`;

export const DivisionCardImg = styled.img`
  height: 75px;
  width: auto;
  @media (max-width: 450px) {
    margin-top: 1em;
    height: 65px;
  }
`;
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
`;

export const DivisionCardTitle = styled.div`
  flex-grow: 1;
  font-family: Kanit;
  font-weight: 700;
  font-size: 1.85em;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  //color: ${Palette.MxmPink};
  background: -webkit-linear-gradient(
    90deg,
    rgba(244, 34, 75, 1) 0%,
    rgba(196, 26, 59, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 452px) {
    font-size: 1em;
    letter-spacing: 1.5px;
  }
`;

export const DivisionCardContent = styled.div`
  flex-grow: 3;
  font-family: Varela;
  font-size: 0.95em;
  letter-spacing: -0.35px;
  color: ${Palette.MxmNavy};
`;
