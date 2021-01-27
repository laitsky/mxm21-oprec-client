import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Button,
  Input,
  Center,
} from '@chakra-ui/react';

import {
  ButtonBackForm,
  ButtonNextForm,
} from '../../../styles/buttons';
import {
  FormComponent,
  FormContainer,
  TitleContainer2,
} from '../../../styles/containers';

const responsiveLabel = {
  base: '0.2em',
  sm: '0.4em',
  md: '0.6em',
  lg: '0.8em',
  xl: '1em',
};

type EsaiSingkatInput = {
  esai1: string;
  esai2: string;
  esai3: string;
};

const EsaiSingkat: React.FC = () => {
  const history = useHistory();
  const { handleSubmit, errors, register, formState } = useForm();
  const onSubmit: SubmitHandler<EsaiSingkatInput> = (data) => {
    alert(JSON.stringify(data));
    history.push('/finalisasi-data');
  };

  return (
    <FormComponent>
      <Center>
        <TitleContainer2>ESAI SINGKAT</TitleContainer2>
      </Center>

      <Center>
        <Box w="100%" p="1.5em">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Center>
              <FormContainer>
                <FormControl isInvalid={errors.esai1}>
                  <FormLabel fontSize={responsiveLabel}>
                    Bagaimana kamu mendefinisikan Dreamland sebagai
                    tema MAXIMA 2021?
                  </FormLabel>
                  <Input
                    name="esai1"
                    fontSize={responsiveLabel}
                    height="15em"
                    ref={register({ required: 'Isi esai1 !' })}
                  />
                  <FormErrorMessage fontSize={responsiveLabel}>
                    {errors.esai1 && errors.esai1.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.esai2}>
                  <FormLabel fontSize={responsiveLabel}>
                    Apa yang akan kamu tingkatkan di MAXIMA 2021?
                  </FormLabel>
                  <Input
                    name="esai2"
                    fontSize={responsiveLabel}
                    height="15em"
                    ref={register({ required: 'Isi esai2 !' })}
                  />
                  <FormErrorMessage fontSize={responsiveLabel}>
                    {errors.esai2 && errors.esai2.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.esai3}>
                  <FormLabel fontSize={responsiveLabel}>
                    (Pertanyaan Divisi)
                  </FormLabel>
                  <Input
                    name="esai3"
                    fontSize={responsiveLabel}
                    height="15em"
                    ref={register({ required: 'Isi esai3 !' })}
                  />
                  <FormErrorMessage fontSize={responsiveLabel}>
                    {errors.esai3 && errors.esai3.message}
                  </FormErrorMessage>
                </FormControl>
              </FormContainer>
            </Center>

            <Center pt="2em">
              <Box pr={{ base: '5em', sm: '10em', md: '20em' }}>
                <Link to="data-diri">
                  <ButtonBackForm>BACK</ButtonBackForm>
                </Link>
              </Box>
              <Box>
                <ButtonNextForm type="submit">NEXT</ButtonNextForm>
              </Box>
            </Center>
            {/* 
          <Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
            Submit
          </Button> */}
          </form>
        </Box>
      </Center>
    </FormComponent>
  );
};

export default EsaiSingkat;
