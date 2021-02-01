import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Textarea,
  Input,
  Center,
} from '@chakra-ui/react';

import {
  ButtonBackForm,
  ButtonNextForm,
} from '../../../shared/styles/buttons';
import {
  FormComponent,
  FormContainer,
  TitleContainer2,
} from '../../../shared/styles/containers';
import { generateToken } from '../../../utils';

const responsiveLabel = {
  base: '1em',
  sm: '1em',
  md: '0.8em',
  lg: '0.8em',
  xl: '1em',
};

type EsaiSingkatInput = {
  soal1: string;
  soal2: string;
  soal3: string;
};

const EsaiSingkat: React.FC = () => {
  const history = useHistory();
  const { handleSubmit, errors, register, formState } = useForm();
  const onSubmit: SubmitHandler<EsaiSingkatInput> = (data) => {
    const dataDiri = JSON.parse(
      window.sessionStorage.getItem('dataDiri')!,
    );

    const studentData = {
      ...dataDiri,
      ...data,
      token: generateToken(),
      statusID: 1,
    };
    window.sessionStorage.clear();
    window.sessionStorage.setItem(
      'studentData',
      JSON.stringify(studentData),
    );
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
                <FormControl isInvalid={errors.soal1}>
                  <FormLabel fontSize={responsiveLabel}>
                    Bagaimana kamu mendefinisikan Dreamland sebagai
                    tema MAXIMA 2021?
                  </FormLabel>
                  <Textarea
                    name="soal1"
                    fontSize={responsiveLabel}
                    height="15em"
                    ref={register({ required: 'Isi soal1 !' })}
                  />
                  <FormErrorMessage fontSize={responsiveLabel}>
                    {errors.soal1 && errors.soal1.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.soal2}>
                  <FormLabel fontSize={responsiveLabel}>
                    Apa yang akan kamu tingkatkan di MAXIMA 2021?
                  </FormLabel>
                  <Textarea
                    name="soal2"
                    fontSize={responsiveLabel}
                    height="15em"
                    ref={register({ required: 'Isi soal2 !' })}
                  />
                  <FormErrorMessage fontSize={responsiveLabel}>
                    {errors.soal2 && errors.soal2.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.soal3}>
                  <FormLabel fontSize={responsiveLabel}>
                    (Pertanyaan Divisi)
                  </FormLabel>
                  <Textarea
                    name="soal3"
                    fontSize={responsiveLabel}
                    height="15em"
                    ref={register({ required: 'Isi soal3 !' })}
                  />
                  <FormErrorMessage fontSize={responsiveLabel}>
                    {errors.soal3 && errors.soal3.message}
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
