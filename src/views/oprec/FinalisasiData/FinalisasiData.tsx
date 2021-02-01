import * as React from 'react';
import {
  Center,
  FormControl,
  FormErrorMessage,
  Button,
  Text,
  Image,
  Flex,
  Icon,
  Checkbox,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FormComponent2 } from '../../../shared/styles/containers';
import { FinalLogo } from '../../../assets';
import {
  ButtonMaxima,
  ButtonBackFinal,
  ButtonNextFinal,
} from '../../../shared/styles/buttons';
import { generateTempPDF } from '../../../services/oprec.service';
import {
  responsiveImg,
  responsiveLabel,
  responsiveTitle,
} from './constants';
import { DownloadIcon } from '@chakra-ui/icons';

type FinalDataCheck = {
  validasi: string;
};

const FinalisasiData: React.FC = () => {
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [studentData, setStudentData] = React.useState({});
  const [docLink, setDocLink] = React.useState();

  // React.useEffect(() => {
  //   setStudentData(JSON.parse(window.sessionStorage.getItem('studentData')!));
  // }, []);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const returnedData = await generateTempPDF(studentData);
  //       setDocLink(returnedData);
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   }
  //   fetchData();
  // }, [studentData]);

  // React.useEffect(() => {
  //   console.log(docLink);
  // }, [docLink]);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIsDisabled(e.target.checked);
  };
  return (
    <FormComponent2>
      <Center>
        <Text
          color="white"
          fontSize={responsiveTitle}
          fontFamily="Kanit"
          fontWeight="700"
        >
          FINALISASI DATA
        </Text>
      </Center>
      <Center>
        <Box width={responsiveImg} my="3em">
          <Center>
            <Image src={FinalLogo} />
          </Center>
        </Box>
      </Center>
      <Center my="1em">
        <ButtonMaxima>
          <Text fontFamily="Varela" fontSize={responsiveLabel}>
            Unduh Hasil Form  |  <Icon as={DownloadIcon} height={responsiveLabel} verticalAlign="middle"/>
          </Text>
        </ButtonMaxima>
      </Center>
      <Center my="3em">
        <Box width={{ base: '22em', sm: '24em', md: '24em', lg: '28em', xl: '32em' }}>
          <Flex>
            <Checkbox name="validasi" color="white" defaultChecked={isDisabled} onChange={handleCheckboxChange} height={{ base: '1.5em', sm: '1.5em', md: '1.7em', lg: '2em', xl: '2.3em' }} mr="0.5em"></Checkbox>
            <Text fontFamily="Varela"  color="white" fontSize={responsiveLabel} wordBreak="break-all" >
              Data diri yang saya masukkan di atas telah benar dan dapat dipertanggung-jawabkan secara hukum.
            </Text>
          </Flex>
        </Box>
      </Center>

      <Center pt="3em">
        <Box pr={{ base: '10em', sm: '14em', md: '12em', lg: '14em', xl: '15em' }}>
          <Link to="esai-singkat">
            <ButtonBackFinal>BACK</ButtonBackFinal>
          </Link>
        </Box>
        <Box>
          <Link to="final-oprec">
            <ButtonNextFinal disabled={!isDisabled!}>NEXT</ButtonNextFinal>
          </Link>
        </Box>
      </Center>
    </FormComponent2>
  );
};

export default FinalisasiData;
