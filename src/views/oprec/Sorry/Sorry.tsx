import { Heading, Box, useMediaQuery, Image, Divider, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { MxmWhiteLogo } from '../../../assets';
import { OprecButton } from '../../../shared/styles/buttons';
import { ColoredContainer, DescContainer, FormComponent2 } from '../../../shared/styles/containers';
import { Palette } from '../../../types';
import { motion } from 'framer-motion';

export const responsiveLogo = {
  base: '4em',
  sm: '4.5em',
  md: '4.5em',
  lg: '4.5em',
  xl: '5em',
};

export const responsiveTitle = {
  base: '2.5em',
  sm: '3em',
  md: '3.5em',
  lg: '3.5em',
  xl: '3.5em',
};

const responsiveLabel = {
  base: '1em',
  sm: '1em',
  md: '0.8em',
  lg: '0.8em',
  xl: '1em',
};

const Sorry: React.FC = () => {
  const [isLargerThan490] = useMediaQuery('(min-width: 490px)');
  const [isLargerThan400] = useMediaQuery('(min-width: 400px)');
  const history = useHistory();  

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 70,
        damping: 20,
      }}
      style={{ minHeight: '100vh' }}
    >
    <FormComponent2>
      <ColoredContainer color={Palette.MxmNavy}>
        <Image
          src={MxmWhiteLogo}
          alt="Logo MAXIMA 2021"
          className="img-responsive"
          mt={16}
          mb={12}
        />
        <Heading
          fontSize={responsiveTitle}
          fontFamily="Kanit"
          style={{
            color: Palette.MxmCyan,
          }}
          mt={3}
          mb={16}
          textAlign="center"
        >
          Mohon maaf, <br /> Kamu Belum Lolos
        </Heading>
        <DescContainer color="white">
          Jangan berkecil hati! Masih banyak<br></br>
          kesempatan di depan. Teruslah<br></br>
          berusaha meraih mimpimu!
        </DescContainer>
      </ColoredContainer>

      <Divider mt={{ base:"0em", sm:"0.1em", md:"1em", lg:"1em", xl:"1em"}}/>
        <Box width={responsiveLogo} _hover={{ cursor: 'pointer' }}>
          <Image
            onClick={() => history.push('/')}
            src={MxmWhiteLogo}
            mt="3em"
          />
        </Box>
        <Text fontSize="sm" color="white" mt={6}>
          ketuk logo untuk kembali ke halaman utama.
        </Text>
    </FormComponent2>
    </motion.div>
  );
};

export default Sorry;
