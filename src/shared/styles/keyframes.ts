import { keyframes } from 'styled-components';
import { Palette } from '../../types';

export const headerStripes = keyframes`
  100% { 
    background-position: 20px 0, 20px 0, 20px 0;
  }
`;

export const blink = keyframes`
  100% {
    box-shadow: 0 0 3px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px ${Palette.MxmYellow},
      0 0 15px ${Palette.MxmYellow}, 0 0 20px ${Palette.MxmYellow};
  }
`;