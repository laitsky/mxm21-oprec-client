import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Textarea,
  Center,
  Stack,
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
import { formLabelStyle } from '../../../shared/constants';
import { pertanyaanDivisi } from './pertanyaanDivisi';

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

  const dataDiri = JSON.parse(
    window.sessionStorage.getItem('dataDiri')!,
  );
  const { handleSubmit, errors, register } = useForm();
  const onSubmit: SubmitHandler<EsaiSingkatInput> = (data) => {
    const studentData = {
      ...dataDiri,
      ...data,
      token: generateToken(),
      statusID: 1,
    };
    window.sessionStorage.setItem(
      'studentData',
      JSON.stringify(studentData),
    );
    history.push('/finalisasi-data');
  };
  React.useEffect(() => {
    document.title = 'MAXIMA 2021: Esai Singkat';
  }, []);
  return (
    <FormComponent>
      <Center>
        <TitleContainer2>ESAI SINGKAT</TitleContainer2>
      </Center>

      <Center>
        <Box w="100%" p="1.5em 0.75em 1.5em 0.75em">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Center>
              <FormContainer>
                <Stack spacing={4}>
                  <FormControl isInvalid={errors.soal1}>
                    <FormLabel style={formLabelStyle}>
                      Bagaimana kamu mendefinisikan Dreamland sebagai
                      tema MAXIMA 2021?
                    </FormLabel>
                    <Textarea
                      name="soal1"
                      fontSize={responsiveLabel}
                      height="15em"
                      ref={register({ required: 'Isi esai!' })}
                    />
                    <FormErrorMessage fontSize={responsiveLabel}>
                      {errors.soal1 && errors.soal1.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.soal2}>
                    <FormLabel style={formLabelStyle}>
                      Apa yang akan kamu tingkatkan di MAXIMA 2021?
                    </FormLabel>
                    <Textarea
                      name="soal2"
                      fontSize={responsiveLabel}
                      height="15em"
                      ref={register({ required: 'Isi esai!' })}
                    />
                    <FormErrorMessage fontSize={responsiveLabel}>
                      {errors.soal2 && errors.soal2.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.soal3}>
                    <FormLabel style={formLabelStyle}>
                      {
                        pertanyaanDivisi.find(
                          (d) => d.divisi === dataDiri.divisiID,
                        )?.q
                      }
                    </FormLabel>
                    <Textarea
                      name="soal3"
                      fontSize={responsiveLabel}
                      height="15em"
                      ref={register({ required: 'Isi esai!' })}
                    />
                    <FormErrorMessage fontSize={responsiveLabel}>
                      {errors.soal3 && errors.soal3.message}
                    </FormErrorMessage>
                  </FormControl>
                </Stack>
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
          </form>
        </Box>
      </Center>
    </FormComponent>
  );
};

export default EsaiSingkat;
