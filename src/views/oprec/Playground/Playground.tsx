import * as React from 'react';
import { Center } from '@chakra-ui/react';
import {
  ButtonExample,
  BtnExampleWithProps,
  BasicButton,
  ExtendedBasicButton,
  ButtonMaxima,
} from '../../../styles/buttons';
import { MxmLogo } from '../../../assets';

const Playground: React.FC = () => {
  return (
    <>
      <Center>
        <img src={MxmLogo} />
        <ButtonExample>test</ButtonExample>
        <BtnExampleWithProps>
          btn example with props
        </BtnExampleWithProps>
        <BasicButton>Basic Button</BasicButton>
        <ExtendedBasicButton>
          Extended Basic Button
        </ExtendedBasicButton>
        <ButtonMaxima>Next</ButtonMaxima>
      </Center>
    </>
  );
};

export default Playground;
