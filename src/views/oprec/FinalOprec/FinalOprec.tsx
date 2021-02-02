import * as React from 'react';
import {
  Center,
  Box,
  Text,
  Image,
  Divider,
  Stack,
  HStack,
} from '@chakra-ui/react';
import { useLocation, useHistory } from 'react-router-dom';
import { DownloadIcon } from '@chakra-ui/icons';
import Swal from 'sweetalert2';
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
import { getPDF } from '../../../services/oprec.service';

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
    console.log(error);
  }

  React.useEffect(() => {
    document.title = 'MAXIMA 2020: Terima Kasih!';
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
    <FormComponent2>
      <Image src={LastLogo} width={220} />

      <Text
        color="#ffd008"
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

      <BadgeContainer>14 Februari 2021</BadgeContainer>

      <Stack spacing={3}>
        <Box bg="tomato" p={3} rounded={4} textAlign="center">
          <Text fontSize="sm" color="white" letterSpacing="-0.5px">
            Token Pendaftaran:{' '}
            <span style={{ fontWeight: 'bolder' }}>{token}</span>
          </Text>
        </Box>
        <Box
          bg="cyan.500"
          p={3}
          mb={6}
          rounded={4}
          _hover={{ bg: 'cyan.600', cursor: 'pointer' }}
          onClick={() => window.open(docLink)}
        >
          <Text fontSize="sm" color="white" letterSpacing="-0.5px">
            <DownloadIcon ml={2} /> Unduh formulir pendaftaran
          </Text>
        </Box>
      </Stack >

      <Divider />
      <Box width={responsiveLogo} _hover={{ cursor: 'pointer' }}>
        <Image
          onClick={() => history.push('/')}
          src={MxmWhiteLogo}
          mt="3em"
        />
      </Box>
        <Text fontSize="sm" color="white" mt={6}>ketuk logo untuk kembali ke halaman utama.</Text>
    </FormComponent2>
  );
};

export default FinalOprec;
