import * as React from 'react';
import { Box, Text, Image, Divider, Stack } from '@chakra-ui/react';
import { useLocation, useHistory } from 'react-router-dom';
import { DownloadIcon } from '@chakra-ui/icons';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import {
  FormComponent2,
  BadgeContainer,
} from '../../../shared/styles/containers';
import { MxmWhiteLogo, LastLogo } from '../../../assets';
import {
  responsiveLogo,
  responsiveTitle,
  responsiveLabel,
} from './constants';
import { ButtonMaxima } from '../../../shared/styles/buttons';
import { getPDF } from '../../../services/oprec.service';
import './final-oprec.css';
import { Palette } from '../../../types';

type LocationState = {
  nim_mhs: string;
  token: string;
};
const FinalOprec: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const [docLink, setDocLink] = React.useState('');
  try {
    var {
      nim_mhs,
      token,
    }: LocationState = location.state as LocationState;
  } catch (error) {
    console.error(error);
  }

  React.useEffect(() => {
    document.title = 'MAXIMA 2021: Terima Kasih!';

    Swal.fire({
      icon: 'info',
      html: `
        <div style="font-famiy: 'Kanit'">
        <h2 class="token-title">Token kamu:</h2>
        <h3 class="token-text">${token}</h3>
        <br />
        <h3 class="reminder">Simpan tokennya untuk keperluan tahapan seleksi selanjutnya ya!</h3>
        <hr />
        <h4 class="small-text">Kamu juga bisa melihat token kamu pada formulir pendaftaran yang dapat kamu unduh di halaman ini.</h4>
        </div>
      `,
      confirmButtonText: 'Mengerti!',
      confirmButtonColor: '#F4224B',
    });

    const fetchData = async () => {
      try {
        const returnedData = await getPDF({ nim_mhs, token });
        setDocLink(returnedData.message);
      } catch (error) {
        Swal.fire({
          title: 'Perhatian!',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'Coba lagi',
        });
      }
    };
    fetchData();
  }, []);

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
        <Image src={LastLogo} width={220} />

        <Text
          color={Palette.MxmYellow}
          fontSize={responsiveTitle}
          mt="0.5em"
          fontFamily="Kanit"
          fontWeight="700"
        >
          TERIMA KASIH!
        </Text>
        <Text
          color="white"
          fontSize={responsiveLabel}
          mt="1em"
          fontFamily="Kanit"
          textAlign="center"
          lineHeight="1.8em"
        >
          Hasil seleksi formulir akan diumumkan pada tanggal
        </Text>

        <BadgeContainer>28 Februari 2021</BadgeContainer>

        <ButtonMaxima
          bgColor={Palette.MxmPink}
          onClick={() => window.open(docLink)}
        >
          <Text fontSize={responsiveLabel} letterSpacing="-0.5px">
            <DownloadIcon ml={2} /> Unduh formulir pendaftaran
          </Text>
        </ButtonMaxima>

        <Divider mt={responsiveLabel} />
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

export default FinalOprec;
