import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { 
  Center, 
  FormControl, 
  FormErrorMessage,
  Button,
  Text,
  Image,
  Checkbox,
  Box
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FormComponent2 } from '../../../styles/containers';
import { FinalLogo } from '../../../assets';
import { ButtonMaxima, ButtonBackFinal, ButtonNextFinal } from '../../../styles/buttons';

const responsiveImg = { base: "12em", sm: "14em", md: "16em", lg: "18em", xl: "20em" };
const responsiveTitle = { base: "1.8em", sm: "2.15em", md: "2.35em", lg: "2.8em", xl: "3.1em" };
const responsiveLabel = { base: "0.6em", sm: "0.8em", md: "0.9em", lg: "1.05em", xl: "1.2em" };

type FinalDataCheck = {
  validasi: string;
};

const FinalisasiData: React.FC = () => {
  const { handleSubmit, errors, register, formState } = useForm();

  const onSubmit: SubmitHandler<FinalDataCheck> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <FormComponent2>
      <Center><Text color="white" fontSize={responsiveTitle} fontFamily="Kanit" fontWeight="700">FINALISASI DATA</Text></Center>
      <Center><Box width={responsiveImg} mt="2em"><Center><Image src={FinalLogo}></Image></Center></Box></Center>
      <Center mt="1em"><ButtonMaxima><Text fontFamily="Varela" fontSize={responsiveLabel}>Unduh Hasil Form | </Text></ButtonMaxima></Center>
      <Center mt="3em">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.validasi}>
            <Checkbox name="validasi" color="white" ref={ register({ required:'Centang ya!' }) }>
              <Text fontFamily="Varela" fontSize={responsiveLabel}>Data diri yang saya masukkan di<br/>atas telah benar dan dapat diper-<br/>tanggungjawabkan secara hukum.</Text>
            </Checkbox>
            <FormErrorMessage fontSize={responsiveLabel}>{ errors.validasi && errors.validasi.message }</FormErrorMessage>
          </FormControl>

          <Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
            Submit
          </Button>
        </form>
      </Center>

      <Center pt="3em">
      <Box pr={{base: "1em", sm: "3em", md: "5em"}}><Link to="esai-singkat"><ButtonBackFinal>BACK</ButtonBackFinal></Link></Box>
      <Box><Link to="final-oprec"><ButtonNextFinal>NEXT</ButtonNextFinal></Link></Box>
    </Center>
    </FormComponent2>





  );
};

export default FinalisasiData;
