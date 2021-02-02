import styled from 'styled-components';
import { headerStripes } from './keyframes';

export const OprecHomepageHeader = styled.h1`
  font-family: 'Bungee Shade', cursive;
  text-align: center;
  font-size: 4em;
  background: linear-gradient(
    -45deg,
    #4bc0c8 25%,
    #feac5e 25%,
    #feac5e 50%,
    #4bc0c8 50%,
    #4bc0c8 75%,
    #feac5e 75%,
    #feac5e
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 20px 20px;
  background-position: 0 0;
  animation: ${headerStripes} 1s linear infinite;

  @media (max-width: 850px) {
    font-size: 2.8em;
  }

  @media (max-width: 505px) {
    font-size: 1.75em;
  }
`;
