import * as React from 'react';
import { Center, Box, Text, Image } from '@chakra-ui/react';
import {
  FormComponent2,
  BadgeContainer,
} from '../../../shared/styles/containers';
import { MxmWhiteLogo, LastLogo } from '../../../assets';

const responsiveImg = {
  base: '12em',
  sm: '14em',
  md: '16em',
  lg: '18em',
  xl: '20em',
};
const responsiveLogo = {
  base: '3em',
  sm: '3.5em',
  md: '4em',
  lg: '4.5em',
  xl: '5em',
};
const responsiveTitle = {
  base: '2.1em',
  sm: '2.3em',
  md: '2.6em',
  lg: '2.9em',
  xl: '3.2em',
};
const responsiveLabel = {
  base: '1.2em',
  sm: '1.35em',
  md: '1.5em',
  lg: '1.65em',
  xl: '1.8em',
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
