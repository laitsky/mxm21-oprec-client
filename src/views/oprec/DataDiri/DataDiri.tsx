import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Button,
  Select,
  Box,
  Center,
  Flex,
  Spacer,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputLeftElement,
} from '@chakra-ui/react';

import { AtSignIcon, ChatIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  ButtonBackForm,
  ButtonNextForm,
} from '../../../styles/buttons';
import {
  FormComponent,
  FormContainer,
  TitleContainer,
} from '../../../styles/containers';

const responsiveLabel = {
  base: '0.8em',
  sm: '0.8em',
  md: '0.6em',
  lg: '0.8em',
  xl: '1em',
};
const responsiveBox = {
  base: '2em',
  sm: '2em',
  md: '1.5em',
  lg: '2em',
  xl: '2.5em',
};

type DataDiriInput = {
  any: string;
};

const DataDiri: React.FC = () => {
  const history = useHistory();
  const { handleSubmit, errors, register, formState } = useForm();
  const onSubmit: SubmitHandler<DataDiriInput> = (data) => {
    alert(JSON.stringify(data));
    history.push('/esai-singkat');
  };

  return (
    <FormComponent>
      <Center>
        <TitleContainer>DATA DIRI</TitleContainer>
      </Center>

      <Center>
        <Box w="100%" p="1.5em">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Center>
              <FormContainer>
                <FormControl isInvalid={errors.namaLengkap}>
                  <FormLabel fontSize={responsiveLabel}>
                    Nama Lengkap
                  </FormLabel>
                  <Input
                    name="namaLengkap"
                    fontSize={responsiveLabel}
                    height="2.5em"
                    ref={register({
                      required: 'Isi nama lengkap kamu!',
                    })}
                  />
                  <FormErrorMessage fontSize={responsiveLabel}>
                    {errors.namaLengkap && errors.namaLengkap.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl py={5} isInvalid={errors.nim}>
                  <FormLabel fontSize={responsiveLabel}>
                    NIM
                  </FormLabel>
                  <InputGroup>
                    <InputLeftAddon
                      children="000000"
                      fontSize={responsiveLabel}
                      height="2.5em"
                    />
                    <Input
                      name="nim"
                      type="number"
                      placeholder="XXXXX"
                      fontSize={responsiveLabel}
                      height="2.5em"
                      ref={register({ required: 'Isi nim kamu!' })}
                    />
                  </InputGroup>
                  <FormErrorMessage fontSize={responsiveLabel}>
                    {errors.nim && errors.nim.message}
                  </FormErrorMessage>
                </FormControl>

                <Flex
                  direction={{
                    base: 'column',
                    sm: 'column',
                    md: 'row',
                    lg: 'row',
                    xl: 'row',
                  }}
                >
                  <FormControl
                    w={{
                      base: '100%',
                      sm: '100%',
                      md: '66%',
                      lg: '66%',
                      xl: '66%',
                    }}
                    isInvalid={errors.tempatLahir}
                  >
                    <FormLabel fontSize={responsiveLabel}>
                      Tempat Lahir
                    </FormLabel>
                    <Input
                      name="tempatLahir"
                      fontSize={responsiveLabel}
                      height="2.5em"
                      ref={register({
                        required: 'Isi tempat lahir kamu!',
                      })}
                    />
                    <FormErrorMessage fontSize={responsiveLabel}>
                      {errors.tempatLahir &&
                        errors.tempatLahir.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Spacer />
                  <FormControl
                    w={{
                      base: '100%',
                      sm: '100%',
                      md: '33%',
                      lg: '33%',
                      xl: '33%',
                    }}
                    py={{ base: 5, sm: 5, md: 0 }}
                    px={{ base: 0, sm: 0, md: 25 }}
                    isInvalid={errors.tanggalLahir}
                  >
                    <FormLabel fontSize={responsiveLabel}>
                      Tanggal Lahir
                    </FormLabel>
                    <Input
                      name="tanggalLahir"
                      type="date"
                      fontSize={responsiveLabel}
                      height="2.5em"
                      ref={register({
                        required: 'Isi tanggal lahir kamu!',
                      })}
                    />
                    <FormErrorMessage fontSize={responsiveLabel}>
                      {errors.tanggalLahir &&
                        errors.tanggalLahir.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Spacer />
                  <FormControl
                    w={{
                      base: '100%',
                      sm: '100%',
                      md: '20%',
                      lg: '20%',
                      xl: '20%',
                    }}
                    isInvalid={errors.jenisKelamin}
                  >
                    <FormLabel fontSize={responsiveLabel}>
                      Jenis Kelamin
                    </FormLabel>
                    <Select
                      name="jenisKelamin"
                      fontSize={responsiveLabel}
                      height="2.5em"
                      ref={register({
                        required: 'Isi jenis kelamin kamu!',
                      })}
                    >
                      <option selected disabled hidden />
                      <option value="laki-laki">Laki-laki</option>
                      <option value="perempuan">Perempuan</option>
                    </Select>
                    <FormErrorMessage fontSize={responsiveLabel}>
                      {errors.jenisKelamin &&
                        errors.jenisKelamin.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>

                <FormControl py={5} isInvalid={errors.alamat}>
                  <FormLabel fontSize={responsiveLabel}>
                    Alamat
                  </FormLabel>
                  <Input
                    name="alamat"
                    fontSize={responsiveLabel}
                    height="2.5em"
                    ref={register({ required: 'Isi alamat kamu!' })}
                  />
                  <FormErrorMessage fontSize={responsiveLabel}>
                    {errors.alamat && errors.alamat.message}
                  </FormErrorMessage>
                </FormControl>

                <Flex
                  direction={{
                    base: 'column',
                    sm: 'column',
                    md: 'row',
                    lg: 'row',
                    xl: 'row',
                  }}
                >
                  <FormControl isInvalid={errors.prodi}>
                    <FormLabel fontSize={responsiveLabel}>
                      Program Studi
                    </FormLabel>
                    <Select
                      name="prodi"
                      fontSize={responsiveLabel}
                      height="2.5em"
                      ref={register({
                        required: 'Isi program studi kamu!',
                      })}
                    >
                      <option selected disabled hidden />
                      <option value="desain-komunikasi-visual">
                        Desain Komunikasi Visual
                      </option>
                      <option value="film">Film</option>
                      <option value="arsitektur">Arsitektur</option>
                      <option value="komunikasi-strategis">
                        Komunikasi Strategis
                      </option>
                      <option value="jurnalistik">Jurnalistik</option>
                      <option value="informatika">Informatika</option>
                      <option value="sistem-informasi">
                        Sistem Informasi
                      </option>
                      <option value="teknik-komputer">
                        Teknik Komputer
                      </option>
                      <option value="teknik-elektro">
                        Teknik Elektro
                      </option>
                      <option value="teknik-fisika">
                        Teknik Fisika
                      </option>
                      <option value="manajemen">Manajemen</option>
                      <option value="akuntansi">Akuntansi</option>
                      <option value="perhotelan">Perhotelan</option>
                    </Select>
                    <FormErrorMessage fontSize={responsiveLabel}>
                      {errors.prodi && errors.prodi.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    py={{ base: 5, sm: 5, md: 0 }}
                    px={{ base: 0, sm: 0, md: 25 }}
                    isInvalid={errors.angkatan}
                  >
                    <FormLabel fontSize={responsiveLabel}>
                      Angkatan
                    </FormLabel>
                    <Select
                      name="angkatan"
                      fontSize={responsiveLabel}
                      height="2.5em"
                      ref={register({
                        required: 'Isi angkatan kamu!',
                      })}
                    >
                      <option selected disabled hidden />
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                    </Select>
                    <FormErrorMessage fontSize={responsiveLabel}>
                      {errors.angkatan && errors.angkatan.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.ips}>
                    <FormLabel fontSize={responsiveLabel}>
                      IPS
                    </FormLabel>
                    {/* <Input  name="ips" fontSize={responsiveLabel} height="2.5em" ref={register({ required:'Isi ips kamu!' })}/> */}

                    <NumberInput
                      step={0.01}
                      min={0}
                      max={4}
                      name="ips"
                      mt={{ base: '0em', md: '0.55em', lg: '0em' }}
                    >
                      <NumberInputField
                        fontSize={responsiveLabel}
                        height="2.5em"
                        ref={register({ required: 'Isi ips kamu!' })}
                      />
                      <NumberInputStepper fontSize={responsiveLabel}>
                        <NumberIncrementStepper
                          fontSize={responsiveLabel}
                        />
                        <NumberDecrementStepper
                          fontSize={responsiveLabel}
                        />
                      </NumberInputStepper>
                    </NumberInput>

                    <FormErrorMessage fontSize={responsiveLabel}>
                      {errors.ips && errors.ips.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>

                <Flex
                  direction={{
                    base: 'column',
                    sm: 'column',
                    md: 'row',
                    lg: 'row',
                    xl: 'row',
                  }}
                >
                  <FormControl
                    pt={{ base: 5, sm: 5, md: 5 }}
                    isInvalid={errors.divisi}
                  >
                    <FormLabel fontSize={responsiveLabel}>
                      Pilihan Divisi
                    </FormLabel>
                    <Select
                      name="divisi"
                      fontSize={responsiveLabel}
                      height="2.5em"
                      ref={register({
                        required: 'Isi pilihan divisi kamu!',
                      })}
                    >
                      <option selected disabled hidden />
                      <option value="acara">Acara</option>
                      <option value="website">Website</option>
                    </Select>
                    <FormErrorMessage fontSize={responsiveLabel}>
                      {errors.divisi && errors.divisi.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    id="email-student"
                    py={{ base: 5, sm: 5, md: 5 }}
                    pl={{ base: 0, sm: 0, md: 25 }}
                    isInvalid={errors.email}
                  >
                    <FormLabel fontSize={responsiveLabel}>
                      Email Student
                    </FormLabel>
                    <InputGroup>
                      <Input
                        name="email"
                        fontSize={responsiveLabel}
                        height="2.5em"
                        ref={register({
                          required: 'Isi email kamu!',
                        })}
                      />
                      <InputRightAddon
                        children="@student.umn.ac.id"
                        fontSize={responsiveLabel}
                        height="2.5em"
                      />
                    </InputGroup>
                    <FormErrorMessage fontSize={responsiveLabel}>
                      {errors.email && errors.email.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>

                <Flex
                  direction={{
                    base: 'column',
                    sm: 'column',
                    md: 'row',
                    lg: 'row',
                    xl: 'row',
                  }}
                >
                  <FormControl isInvalid={errors.hp}>
                    <FormLabel fontSize={responsiveLabel}>
                      No. HP & Whatsapp
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        boxSize={responsiveBox}
                        children={
                          <PhoneIcon
                            color="gray.300"
                            boxSize={responsiveLabel}
                          />
                        }
                      />
                      <Input
                        type="number"
                        name="hp"
                        fontSize={responsiveLabel}
                        height="2.5em"
                        ref={register({
                          required: 'Isi no HP kamu!',
                        })}
                      />
                    </InputGroup>
                    <FormErrorMessage fontSize={responsiveLabel}>
                      {errors.hp && errors.hp.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    py={{ base: 5, sm: 5, md: 0 }}
                    px={{ base: 0, sm: 0, md: 25 }}
                    isInvalid={errors.line}
                  >
                    <FormLabel fontSize={responsiveLabel}>
                      ID LINE
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        boxSize={responsiveBox}
                        children={
                          <ChatIcon
                            color="gray.400"
                            boxSize={responsiveLabel}
                          />
                        }
                      />
                      <Input
                        name="line"
                        fontSize={responsiveLabel}
                        height="2.5em"
                        ref={register({
                          required: 'Isi ID LINE kamu!',
                        })}
                      />
                    </InputGroup>
                    <FormErrorMessage fontSize={responsiveLabel}>
                      {errors.line && errors.line.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.instagram}>
                    <FormLabel fontSize={responsiveLabel}>
                      Username Instagram
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        boxSize={responsiveBox}
                        children={
                          <AtSignIcon
                            color="gray.400"
                            boxSize={responsiveLabel}
                          />
                        }
                      />
                      <Input
                        name="instagram"
                        fontSize={responsiveLabel}
                        height="2.5em"
                        ref={register({
                          required: 'Isi instagram kamu!',
                        })}
                      />
                    </InputGroup>
                    <FormErrorMessage fontSize={responsiveLabel}>
                      {errors.instagram && errors.instagram.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
              </FormContainer>
            </Center>

            <Center pt="2em">
              <Box pr={{ base: '5em', sm: '10em', md: '20em' }}>
                <Link to="/daftar-divisi">
                  <ButtonBackForm>BACK</ButtonBackForm>
                </Link>
              </Box>
              <Box>
                <ButtonNextForm type="submit">NEXT</ButtonNextForm>
              </Box>
            </Center>
            {/* <Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
            Submit
          </Button> */}
          </form>
        </Box>
      </Center>
    </FormComponent>
  );
};

export default DataDiri;
