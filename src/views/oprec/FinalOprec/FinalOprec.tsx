import * as React from 'react';
import { Center, Box, Text, Image } from '@chakra-ui/react';
import {
  FormComponent2,
  BadgeContainer,
} from '../../../shared/styles/containers';
import { MxmWhiteLogo, LastLogo } from '../../../assets';

const responsiveImg = {
  base: '16em',
  sm: '18em',
  md: '18em',
  lg: '20em',
  xl: '22em',
};
const responsiveLogo = {
  base: '4.2em',
  sm: '4.5em',
  md: '4.5em',
  lg: '5.5em',
  xl: '6em',
};
const responsiveTitle = {
  base: '2.6em',
  sm: '2.8em',
  md: '2.8em',
  lg: '3.1em',
  xl: '3.4em',
};
const responsiveLabel = {
  base: '1.5em',
  sm: '1.6em',
  md: '1.6em',
  lg: '1.8em',
  xl: '2em',
};

const FinalOprec: React.FC = () => {
  return (
    <FormComponent2>
      <Center>
        <Box width={responsiveImg}>
          <Center>
            <Image src={LastLogo} />
          </Center>
        </Box>
      </Center>
      <Center>
        <Text
          color="#ffd008"
          fontSize={responsiveTitle}
          mt="0.5em"
          fontFamily="Kanit"
          fontWeight="700"
        >
          TERIMA KASIH!
        </Text>
      </Center>
      <Center>
        <Text
          color="white"
          fontSize={responsiveLabel}
          mt="1em"
          fontFamily="Kanit"
          textAlign="center"
          lineHeight="1.8em"
        >
          Hasil seleksi formulir akan
          <br />
          diumumkan pada tanggal
        </Text>
      </Center>
      <Center>
        <BadgeContainer>14 Februari 2021</BadgeContainer>
      </Center>
      <Center>
        <Box width={responsiveLogo}>
          <Center>
            <Image src={MxmWhiteLogo} mt="3em" />
          </Center>
        </Box>
      </Center>
    </FormComponent2>
  );
};

export default FinalOprec;
