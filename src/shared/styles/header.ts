import styled from 'styled-components';
import { Palette } from '../../types';
import { headerStripes } from './keyframes';

export const OprecHomepageHeader = styled.h1`
  font-family: "Kanit";
  font-weight: 700;
  text-align: left;
  font-size: 3.5em;
  padding-top: 0.5em;
  color: ${Palette.MxmYellow};
  text-shadow: 5px 3px #F4224B;
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

// background-size: 25px 25px;
// background-position: 0 0;
// linear-gradient(
//   -45deg,
//   ${Palette.MxmYellow} 25%,
//   ${Palette.MxmPink} 25%,
//   ${Palette.MxmPink} 50%,
//   ${Palette.MxmYellow} 50%,
//   ${Palette.MxmYellow} 75%,
//   ${Palette.MxmPink} 75%,
//   ${Palette.MxmPink}
// );
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
//animation: ${headerStripes} 1s linear infinite;