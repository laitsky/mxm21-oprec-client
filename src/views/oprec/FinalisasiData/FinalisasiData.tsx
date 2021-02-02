import * as React from 'react';
import {
  Text,
  Image,
  Flex,
  Icon,
  Checkbox,
  Box,
  Spinner,
} from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import { DownloadIcon } from '@chakra-ui/icons';
import Swal from 'sweetalert2';
import { FormComponent2 } from '../../../shared/styles/containers';
import { FinalLogo } from '../../../assets';
import {
  ButtonMaxima,
  ButtonBackFinal,
  ButtonNextFinal,
} from '../../../shared/styles/buttons';
import {
  generateTempPDF,
  studentSignUp,
} from '../../../services/oprec.service';
import {
  responsiveImg,
  responsiveLabel,
  responsiveTitle,
} from './constants';

const FinalisasiData: React.FC = () => {
  const history = useHistory();
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const studentData = JSON.parse(
    window.sessionStorage.getItem('studentData')!,
  );

  const [docLink, setDocLink] = React.useState();

  React.useEffect(() => {
    document.title = 'MAXIMA 2020: Finalisasi Data';
    const fetchData = async () => {
      try {
        const returnedData = await generateTempPDF(studentData);
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

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIsDisabled(e.target.checked);
  };

  const handleNextBtn = async () => {
    try {
      await studentSignUp(studentData);
      history.push({
        pathname: '/final-oprec',
        state: {
          nim_mhs: studentData.nim_mhs,
          token: studentData.token,
        },
      });
      window.sessionStorage.clear();
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <FormComponent2>
      <Text
        color="white"
        fontSize={responsiveTitle}
        fontFamily="Kanit"
        fontWeight="700"
      >
        FINALISASI DATA
      </Text>

      <Box width={responsiveImg} my="3em">
        <Image src={FinalLogo} />
      </Box>

      {docLink ? (
        <>
          <ButtonMaxima onClick={() => window.open(docLink)}>
            <Text fontFamily="Varela" fontSize={responsiveLabel}>
              Unduh Hasil Form |
              <Icon
                ml={2}
                as={DownloadIcon}
                height={responsiveLabel}
                verticalAlign="middle"
              />
            </Text>
          </ButtonMaxima>
          <Box
            pt="2em"
            width={{
              base: '22em',
              sm: '24em',
              md: '24em',
              lg: '28em',
              xl: '32em',
            }}
          >
            <Flex>
              <Checkbox
                name="validasi"
                color="white"
                defaultChecked={isDisabled}
                onChange={handleCheckboxChange}
                height={{
                  base: '1.5em',
                  sm: '1.5em',
                  md: '1.7em',
                  lg: '2em',
                  xl: '2.3em',
                }}
                mr="0.5em"
              />
              <Text
                fontFamily="Varela"
                color="white"
                fontSize={responsiveLabel}
                wordBreak="break-all"
              >
                Data diri yang saya masukkan di atas telah benar dan
                dapat dipertanggung-jawabkan secara hukum.
              </Text>
            </Flex>
          </Box>
        </>
      ) : (
        <Flex direction="column" placeItems="center">
          <Text color="white" mb={4}>
            Mohon menunggu, formulir Anda sedang dibuat.
          </Text>
          <Spinner
            size="xl"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
          />
        </Flex>
      )}

      <Flex direction="row" pt="3em">
        <Box
          pr={{
            base: '10em',
            sm: '14em',
            md: '12em',
            lg: '14em',
            xl: '15em',
          }}
        >
          <Link to="esai-singkat">
            <ButtonBackFinal>BACK</ButtonBackFinal>
          </Link>
        </Box>
        <Box>
          <ButtonNextFinal
            disabled={!isDisabled!}
            onClick={handleNextBtn}
          >
            NEXT
          </ButtonNextFinal>
        </Box>
      </Flex>
    </FormComponent2>
  );
};

export default FinalisasiData;
