import styled from 'styled-components';
import { Palette } from '../../types';

export const FormComponent = styled.div<{ yellow?: boolean }>`
  min-height: 100vh;
  background-color: ${(props) =>
    props.yellow ? Palette.MxmYellow : Palette.MxmCyan};
  padding: 0.5em;
  font-family: Varela;
`;

export const FormComponent2 = styled.div`
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  place-items: center;
  min-height: 100vh;
  background-color: ${Palette.MxmNavy};
  padding-top: 3em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-bottom: 3em;
  font-family: Varela;

  @media (max-width: 360px) {
    height: 100%;
  }
`;

export const FormContainer = styled.div`
  background-color: white;
  color: black;
  box-shadow: 2px 4px 16px grey;
  width: 45vw;
  font-size: 1em;
  padding: 1.5em;
  border-radius: 0.4em;

  @media (max-width: 1865px) {
    width: 52vw;
  }

  @media (max-width: 1630px) {
    width: 55vw;
  }

  @media (max-width: 1530px) {
    width: 58vw;
  }

  @media (max-width: 1448px) {
    width: 63vw;
  }

  @media (max-width: 1334px) {
    width: 70vw;
  }

  @media (max-width: 1160px) {
    width: 75vw;
  }

  @media (max-width: 1083px) {
    width: 100vw;
  }
`;

export const TitleContainer = styled.div`
  background-color: ${Palette.MxmNavy};
  color: white;
  box-shadow: 2px 4px 16px grey;
  width: 6em;
  font-family: Kanit;
  font-size: 2.5em;
  font-weight: 700;
  height: 1.6em;
  text-align: center;
  margin-top: 0.5em;
  border-radius: 0.4em;
`;

export const TitleContainer2 = styled.div`
  background-color: ${Palette.MxmNavy};
  color: white;
  box-shadow: 2px 4px 16px grey;
  width: 8em;
  font-family: Kanit;
  font-size: 2.5em;
  font-weight: 700;
  height: 1.6em;
  text-align: center;
  margin-top: 0.5em;
  border-radius: 0.4em;
`;

export const BadgeContainer = styled.div`
  background-color: #41ceba;
  color: white;
  border: 1px solid white;
  width: 8em;
  font-family: Kanit;
  font-size: 2em;
  height: 1.5em;
  text-align: center;
  margin-top: 0.3em;
  margin-bottom: 1em;
  border-radius: 0.4em;

  @media (max-width: 80em) {
    font-size: 2em;
  }

  @media (max-width: 62em) {
    font-size: 1.7em;
  }

  @media (max-width: 48em) {
    font-size: 1.4em;
  }

  @media (max-width: 30em) {
    font-size: 1.1em;
  }
`;

export const DivisionContainer = styled.div`
  padding: 2em 3em 0em 3em;
  border-radius: 10px;
  margin-top: 2em;
  margin-bottom: 2em;
  max-width: 75vw;

  @media (max-width: 1441px) {
    max-width: 85vw;
  }

  @media (max-width: 1160px) {
    max-width: 90vw;
  }

  @media (max-width: 663px) {
    padding: 0;
  }
`;

export const OprecHomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  background-color: #1f2c4c;
  opacity: 1;
  background-blend-mode: multiply;
  min-height: 100vh;
`;

export const ColoredContainer = styled.div<{ color?: Palette }>`
  display: flex;
  flex-direction: column;
  place-items: center;

  background-color: ${(props) => props.color || 'black'};
  min-height: 100vh;
`;
