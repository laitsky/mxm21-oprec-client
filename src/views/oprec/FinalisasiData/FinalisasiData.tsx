import * as React from 'react';
import {
  Text,
  Image,
  Flex,
  Icon,
  Checkbox,
  Box,
  Spinner,
  HStack,
} from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import { DownloadIcon, LockIcon } from '@chakra-ui/icons';
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
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@chakra-ui/icons';

const FinalisasiData: React.FC = () => {
  const history = useHistory();
  const [isDisabled, setIsDisabled] = React.useState(false);
  const studentData = JSON.parse(
    window.sessionStorage.getItem('studentData')!,
  );

  const [docLink, setDocLink] = React.useState();

  React.useEffect(() => {
    document.title = 'MAXIMA 2021: Finalisasi Data';
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
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    }
  };
  return (
    <motion.div
      initial={{ scale: 0.6 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
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
                Cek data kamu di sini |
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
                  defaultChecked={isDisabled}
                  onChange={handleCheckboxChange}
                  height={{
                    base: '1.5em',
                    sm: '1.5em',
                    lg: '1.8em',
                  }}
                  mr="0.5em"
                  _hover={{
                    height: '1.5em',
                  }}
                />
                <Text
                  fontFamily="Varela"
                  fontSize={responsiveLabel}
                  wordBreak="break-all"
                  color="white"
                >
                  Data diri yang saya masukkan di atas telah benar dan
                  dapat dipertanggung-jawabkan secara hukum.
                </Text>
              </Flex>
            </Box>
          </>
        ) : (
          <Flex direction="column" placeItems="center">
            <Text mb={4} color="white">
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

        <HStack
          spacing={{
            base: '3em',
            sm: '8em',
            md: '10em',
            lg: '11em',
            xl: '15em',
          }}
          mt={12}
        >
          <Link to="esai-singkat">
            <ButtonBackFinal>
              <ArrowLeftIcon h={3} mr={2} mb={1} />
              BACK
            </ButtonBackFinal>
          </Link>

          <ButtonNextFinal
            disabled={!isDisabled!}
            onClick={handleNextBtn}
          >
            <LockIcon h={3} mr={1} mb={1} />
            KIRIM
          </ButtonNextFinal>
        </HStack>
      </FormComponent2>
    </motion.div>
  );
};

export default FinalisasiData;
