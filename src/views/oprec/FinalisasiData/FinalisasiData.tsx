import * as React from 'react';
import {
  Center,
  FormControl,
  FormErrorMessage,
  Button,
  Text,
  Image,
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
        <Box width={responsiveImg} mt="2em">
          <Center>
            <Image src={FinalLogo} />
          </Center>
        </Box>
      </Center>
      <Center mt="1em">
        <ButtonMaxima>
          <Text fontFamily="Varela" fontSize={responsiveLabel}>
            Unduh Hasil Form |{' '}
          </Text>
        </ButtonMaxima>
      </Center>
      <Center mt="3em">
        <Checkbox
          name="validasi"
          color="white"
          defaultChecked={isDisabled}
          onChange={handleCheckboxChange}
        >
          <Text fontFamily="Varela" fontSize={responsiveLabel}>
            Data diri yang saya masukkan di
            <br />
            atas telah benar dan dapat diper-
            <br />
            tanggungjawabkan secara hukum.
          </Text>
        </Checkbox>
      </Center>

      <Center pt="3em">
        <Box pr={{ base: '1em', sm: '3em', md: '5em' }}>
          <Link to="esai-singkat">
            <ButtonBackFinal>BACK</ButtonBackFinal>
          </Link>
        </Box>
        <Box>
          <Link to="final-oprec">
            <ButtonNextFinal disabled={!isDisabled!}>
              NEXT
            </ButtonNextFinal>
          </Link>
        </Box>
      </Center>
    </FormComponent2>
  );
};

export default FinalisasiData;
