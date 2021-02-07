import styled from 'styled-components';
import { Palette } from '../../types';

export const MxmInput = styled.input`
  font-family: 'Kanit';
  border-radius: 50px;
  padding: 1.2vh 1.8em 1.2vh 1.8em;
  margin: 2vh 0;
  outline: none;
  color: ${Palette.MxmPink};
  letter-spacing: 1px;
  box-shadow: 6px 6px ${Palette.MxmPink};
  transition-duration: 0.4s;
  &:focus {
    box-shadow: 9px 9px ${Palette.MxmPink};
  }
`;
