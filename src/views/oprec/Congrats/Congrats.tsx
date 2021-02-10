import { Heading, Box, useMediaQuery, Image, Divider, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { MxmLogo } from '../../../assets';
import { OprecButton } from '../../../shared/styles/buttons';
import { ColoredContainer, DescContainer, FormComponent2, BadgeContainer } from '../../../shared/styles/containers';
import { Palette } from '../../../types';
import { motion } from 'framer-motion';
import './congrats.css';

type LocationState = {
  tanggal_wawancara: string;
};

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

const Congrats: React.FC = () => {
  const [isLargerThan490] = useMediaQuery('(min-width: 490px)');
  const [isLargerThan400] = useMediaQuery('(min-width: 400px)');
  const location = useLocation();
  const history = useHistory();  
  const { tanggal_wawancara } = location.state as LocationState;

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
    <FormComponent2 color="white">
      <ColoredContainer color={Palette.MxmWhite}>
        <Image
          src={MxmLogo}
          alt="Logo MAXIMA 2021"
          className="img-responsive"
          mt={16}
          mb={12}
        />
        <Heading
          fontSize={responsiveTitle}
          fontFamily="Kanit"
          style={{
            color: Palette.MxmPink,
          }}
          mt={3}
          mb={16}
          textAlign="center"
        >
          Selamat, <br /> Kamu Lolos!
        </Heading>
        <DescContainer>
          Jangan lupa untuk mengikuti<br></br>
          seleksi terbuka pada:<br></br>
          <Box> 
            {tanggal_wawancara}<br></br>
            jam 17.00 - selesai
          </Box>
        </DescContainer>
      </ColoredContainer>

      <Divider mt={{ base:"0em", sm:"0.1em", md:"1em", lg:"1em", xl:"1em"}}/>
        <Box width={responsiveLogo} _hover={{ cursor: 'pointer' }}>
          <Image
            onClick={() => history.push('/')}
            src={MxmLogo}
            mt="3em"
          />
        </Box>
        <Text fontSize="sm" color={Palette.MxmNavy} mt={6}>
          ketuk logo untuk kembali ke halaman utama.
        </Text>
    </FormComponent2>
    </motion.div>
  );
};

export default Congrats;
