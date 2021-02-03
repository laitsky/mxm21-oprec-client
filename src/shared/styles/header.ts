import styled from 'styled-components';
import { Palette } from '../../types';
import { headerStripes } from './keyframes';

export const OprecHomepageHeader = styled.h1`
  font-family: 'Bungee Shade', cursive;
  text-align: left;
  font-size: 3.5em;
  padding-top: 0.5em;
  background: linear-gradient(
    -45deg,
    ${Palette.MxmYellow} 25%,
    ${Palette.MxmCyan} 25%,
    ${Palette.MxmCyan} 50%,
    ${Palette.MxmYellow} 50%,
    ${Palette.MxmYellow} 75%,
    ${Palette.MxmCyan} 75%,
    ${Palette.MxmCyan}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 25px 25px;
  background-position: 0 0;
  animation: ${headerStripes} 1s linear infinite;

  @media (max-width: 850px) {
    font-size: 2.8em;
  }

  @media (max-width: 450px) {
    font-size: 2.5em;
    padding-top: 1.5em;
  }

  @media (max-width: 382px) {
    font-size: 2.15em;
  }
`;
