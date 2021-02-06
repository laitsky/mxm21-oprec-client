import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
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
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';

import { AtSignIcon, ChatIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  ButtonBackForm,
  ButtonNextForm,
} from '../../../shared/styles/buttons';
import {
  FormComponent,
  FormContainer,
  TitleContainer,
} from '../../../shared/styles/containers';
import {
  divisionLists,
  formLabelStyle,
} from '../../../shared/constants';
import { motion } from 'framer-motion';

const DataDiri: React.FC = () => {
  const history = useHistory();
  const { handleSubmit, errors, register } = useForm();

  const onSubmit = (data: any) => {
    const newData = {
      ...data,
      nim_mhs: window.sessionStorage.getItem('stuNim'),
      email: `${data.email}@student.umn.ac.id`,
    };
    window.sessionStorage.setItem(
      'dataDiri',
      JSON.stringify(newData),
    );
    history.push({
      pathname: '/esai-singkat',
      state: {
        divisionQ: data.divisiID,
      },
    });
  };

  React.useEffect(() => {
    document.title = 'MAXIMA 2021: Data Diri';
    if (window.sessionStorage.getItem('stuNim') === null) {
      history.push('/');
    }
  }, []);
  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 70,
        damping: 20,
      }}
      style={{ minHeight: '100vh' }}
    >
      <FormComponent>
        <Center>
          <TitleContainer>DATA DIRI</TitleContainer>
        </Center>

        <Center>
          <Box w="100%" p="1.5em">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Center>
                <FormContainer>
                  <FormControl isInvalid={errors.name} name="name">
                    <FormLabel style={formLabelStyle}>
                      Nama Lengkap
                    </FormLabel>
                    <Input
                      name="name"
                      height="2.5em"
                      ref={register({
                        required: 'Isi nama lengkap kamu',
                      })}
                    />
                    <FormErrorMessage>
                      {errors.name && errors.name.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl py={5} isInvalid={errors.nim_mhs}>
                    <FormLabel style={formLabelStyle}>NIM</FormLabel>
                    <InputGroup>
                      <InputLeftAddon
                        children="000000"
                        height="2.5em"
                      />
                      <Input
                        name="nim_mhs"
                        type="number"
                        height="2.5em"
                        ref={register({
                          required: 'Masukkan NIM kamu',
                          minLength: {
                            value: 5,
                            message: 'NIM harus berupa 5 digit',
                          },
                          maxLength: {
                            value: 5,
                            message: 'NIM harus berupa 5 digit',
                          },
                        })}
                        value={
                          window.sessionStorage.getItem('stuNim') ||
                          ''
                        }
                        disabled
                      />
                    </InputGroup>
                    <FormErrorMessage>
                      {errors.nim_mhs && errors.nim_mhs.message}
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
                      isInvalid={errors.tempat_lahir}
                    >
                      <FormLabel style={formLabelStyle}>
                        Tempat Lahir
                      </FormLabel>
                      <Input
                        name="tempat_lahir"
                        height="2.5em"
                        ref={register({
                          required: 'Isi tempat lahir kamu',
                        })}
                      />
                      <FormErrorMessage>
                        {errors.tempat_lahir &&
                          errors.tempat_lahir.message}
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
                      isInvalid={errors.tanggal_lahir}
                    >
                      <FormLabel style={formLabelStyle}>
                        Tanggal Lahir
                      </FormLabel>
                      <Input
                        name="tanggal_lahir"
                        type="date"
                        height="2.5em"
                        ref={register({
                          required: 'Isi tanggal lahir kamu',
                        })}
                      />
                      <FormErrorMessage>
                        {errors.tanggal_lahir &&
                          errors.tanggal_lahir.message}
                      </FormErrorMessage>
                    </FormControl>
                    <Spacer />
                    <FormControl
                      w={{
                        base: '100%',
                        sm: '100%',
                        md: '25%',
                        lg: '25%',
                        xl: '20%',
                      }}
                      name="jenis_kelamin"
                      isInvalid={errors.jenis_kelamin}
                    >
                      <FormLabel style={formLabelStyle}>
                        Jenis Kelamin
                      </FormLabel>
                      <Select
                        name="jenis_kelamin"
                        height="2.5em"
                        ref={register({
                          required: 'Isi jenis kelamin kamu',
                        })}
                      >
                        <option value="" selected disabled hidden>
                          L/P
                        </option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </Select>
                      <FormErrorMessage>
                        {errors.jenis_kelamin &&
                          errors.jenis_kelamin.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Flex>

                  <FormControl py={5} isInvalid={errors.alamat}>
                    <FormLabel style={formLabelStyle}>
                      Alamat
                    </FormLabel>
                    <Input
                      name="alamat"
                      height="2.5em"
                      ref={register({ required: 'Isi alamat kamu' })}
                    />
                    <FormErrorMessage>
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
                      <FormLabel style={formLabelStyle}>
                        Program Studi
                      </FormLabel>
                      <Select
                        name="prodi"
                        height="2.5em"
                        ref={register({
                          required: 'Isi program studi kamu',
                        })}
                      >
                        <option value="" selected disabled hidden>
                          Pilih prodi
                        </option>
                        <option value="Desain Komunikasi Visual">
                          Desain Komunikasi Visual
                        </option>
                        <option value="Film">Film</option>
                        <option value="Arsitektur">Arsitektur</option>
                        <option value="Komunikasi Strategis">
                          Komunikasi Strategis
                        </option>
                        <option value="Jurnalistik">
                          Jurnalistik
                        </option>
                        <option value="Informatika">
                          Informatika
                        </option>
                        <option value="Sistem Informasi">
                          Sistem Informasi
                        </option>
                        <option value="Teknik Komputer">
                          Teknik Komputer
                        </option>
                        <option value="Teknik Elektro">
                          Teknik Elektro
                        </option>
                        <option value="Teknik Fisika">
                          Teknik Fisika
                        </option>
                        <option value="Manajemen">Manajemen</option>
                        <option value="Akuntansi">Akuntansi</option>
                        <option value="Perhotelan">Perhotelan</option>
                      </Select>
                      <FormErrorMessage>
                        {errors.prodi && errors.prodi.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      py={{ base: 5, sm: 5, md: 0 }}
                      px={{ base: 0, sm: 0, md: 25 }}
                      isInvalid={errors.angkatan}
                    >
                      <FormLabel style={formLabelStyle}>
                        Angkatan
                      </FormLabel>
                      <Select
                        name="angkatan"
                        height="2.5em"
                        ref={register({
                          required: 'Isi angkatan kamu',
                        })}
                      >
                        <option value="" selected disabled hidden>
                          Pilih angkatan
                        </option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                      </Select>
                      <FormErrorMessage>
                        {errors.angkatan && errors.angkatan.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.ips}>
                      <FormLabel style={formLabelStyle}>
                        IPS
                      </FormLabel>

                      <NumberInput
                        step={0.01}
                        min={0}
                        max={4}
                        name="ips"
                        mt={{ base: '0em', md: '0.55em', lg: '0em' }}
                      >
                        <NumberInputField
                          height="2.5em"
                          ref={register({ required: 'Isi IPS kamu' })}
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>

                      <FormErrorMessage>
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
                      isInvalid={errors.divisiID}
                    >
                      <FormLabel style={formLabelStyle}>
                        Pilihan Divisi
                      </FormLabel>
                      <Select
                        name="divisiID"
                        height="2.5em"
                        ref={register({
                          required: 'Isi pilihan divisi kamu',
                        })}
                      >
                        <option value="" selected disabled hidden>
                          Pilih divisi
                        </option>
                        {divisionLists.slice(1).map((d) => (
                          <option key={d.divisiID} value={d.divisiID}>
                            {d.name}
                          </option>
                        ))}
                      </Select>
                      <FormErrorMessage>
                        {errors.divisiID && errors.divisiID.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      id="email-student"
                      py={{ base: 5, sm: 5, md: 5 }}
                      pl={{ base: 0, sm: 0, md: 25 }}
                      isInvalid={errors.email}
                    >
                      <FormLabel style={formLabelStyle}>
                        Email Student
                      </FormLabel>
                      <InputGroup>
                        <Input
                          name="email"
                          ref={register({
                            required: 'Isi email kamu',
                          })}
                        />
                        <InputRightAddon
                          style={{ fontSize: '0.75rem' }}
                          children="@student.umn.ac.id"
                        />
                      </InputGroup>
                      <FormErrorMessage>
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
                    <FormControl isInvalid={errors.no_hp}>
                      <FormLabel style={formLabelStyle}>
                        No. HP & Whatsapp
                      </FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          boxSize="2.5em"
                          children={
                            <PhoneIcon
                              color="gray.300"
                              boxSize="1em"
                            />
                          }
                        />
                        <Input
                          type="number"
                          name="no_hp"
                          height="2.5em"
                          ref={register({
                            required: 'Isi no HP kamu',
                          })}
                        />
                      </InputGroup>
                      <FormErrorMessage>
                        {errors.no_hp && errors.no_hp.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      py={{ base: 5, sm: 5, md: 0 }}
                      px={{ base: 0, sm: 0, md: 25 }}
                      isInvalid={errors.uLine}
                    >
                      <FormLabel style={formLabelStyle}>
                        ID LINE
                      </FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          boxSize="2.5em"
                          children={
                            <ChatIcon
                              color="gray.400"
                              boxSize="1em"
                            />
                          }
                        />
                        <Input
                          name="uLine"
                          height="2.5em"
                          ref={register({
                            required: 'Isi ID Line kamu',
                          })}
                        />
                      </InputGroup>
                      <FormErrorMessage>
                        {errors.uLine && errors.uLine.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.uInstagram}>
                      <FormLabel style={formLabelStyle}>
                        Username Instagram
                      </FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          boxSize="2.5em"
                          children={
                            <AtSignIcon
                              color="gray.400"
                              boxSize="1em"
                            />
                          }
                        />
                        <Input
                          name="uInstagram"
                          height="2.5em"
                          ref={register({
                            required: 'Isi Instagram kamu',
                          })}
                        />
                      </InputGroup>
                      <FormErrorMessage>
                        {errors.uInstagram &&
                          errors.uInstagram.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Flex>
                </FormContainer>
              </Center>

              <Center pt="2em">
                <Box pr={{ base: '2.5em', sm: '5em', md: '20em' }}>
                  <Link to="/daftar-divisi">
                    <ButtonBackForm>
                      <ArrowLeftIcon h={3} mr={2} mb={1} />
                      BACK
                    </ButtonBackForm>
                  </Link>
                </Box>
                <Box>
                  <ButtonNextForm type="submit">
                    <ArrowRightIcon h={3} mr={2} mb={1} />
                    NEXT
                  </ButtonNextForm>
                </Box>
              </Center>
            </form>
          </Box>
        </Center>
      </FormComponent>
    </motion.div>
  );
};

export default DataDiri;
