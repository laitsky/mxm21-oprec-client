import {
  Heading,
  Box,
  Image,
  Divider,
  Text,
  Center,
} from '@chakra-ui/react';
import * as React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MxmLogo } from '../../../assets';
import {
  ColoredContainer,
  DescContainer,
  FormComponent2,
} from '../../../shared/styles/containers';
import { Palette } from '../../../types';

type LocationState = {
  data: {
    name: string;
    nim: number;
    divisi: string;
    lineLink: string;
    qrLink: string;
  };
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

const Congrats: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const { data } = location.state as LocationState;

  const printQRCode = () => {
    if (
      data.divisi.startsWith('Koordinator') ||
      data.divisi.startsWith('BPH')
    ) {
      return (
        <Box mt={4}>
          <DescContainer>{data.divisi}</DescContainer>
        </Box>
      );
    }

    return (
      <DescContainer>
        Selamat bergabung dalam kepanitiaan MAXIMA 2021!
        <Box mt={4}>
          LINE Group Divisi <strong>{data.divisi}:</strong>
          <Center>
            <Image src={data.qrLink} alt="QR Grup Divisi" />
          </Center>
          <a href={data.lineLink}>{data.lineLink}</a>
        </Box>
      </DescContainer>
    );
  };
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
          <Link to="/">
            <Image
              src={MxmLogo}
              alt="Logo MAXIMA 2021"
              mt={16}
              mb={12}
            />
          </Link>
          <Heading
            fontSize={responsiveTitle}
            fontFamily="Kanit"
            style={{
              color: Palette.MxmPink,
            }}
            mt={3}
            mb={2}
            textAlign="center"
          >
            Selamat! <br />{' '}
            {data.name
              .toLowerCase()
              .split(' ')
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1),
              )
              .join(' ')}{' '}
            <br />
          </Heading>
          <Heading
            fontSize="2em"
            fontFamily="Kanit"
            style={{
              color: Palette.MxmPink,
              fontWeight: 200,
            }}
            textAlign="center"
            mb={4}
          >
            000000{data.nim}
          </Heading>
          {printQRCode()}
        </ColoredContainer>

        <Divider
          mt={{
            base: '0em',
            sm: '0.1em',
            md: '1em',
            lg: '1em',
            xl: '1em',
          }}
        />
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
