import * as React from 'react';
import {
  Button,
  Image,
  Box,
  Flex,
  InputGroup,
  Input,
  InputLeftAddon,
  FormControl,
  FormLabel,
  Select,
  Stack,
  Text,
  FormErrorMessage,
  Center,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { BellIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { MxmLogo } from '../../../assets';
import { LoginFormCard } from '../../../shared/styles/cards';
import {
  formLabelStyle,
  formHeaderStyle,
} from '../../../shared/constants/styles';
import { divisionLists } from '../../../shared/constants';
import { RequestTokenData } from '../../../types';
import { requestToken } from '../../../services/koor.service';

const bgStyle: React.CSSProperties = {
  height: '100vh',
  backgroundColor: '#E5E5F7',
  opacity: 1.0,
  backgroundImage: `linear-gradient(30deg, #f9f9f9 12%, transparent 12.5%, transparent 87%, #f9f9f9 87.5%, #f9f9f9), linear-gradient(150deg, #f9f9f9 12%, transparent 12.5%, transparent 87%, #f9f9f9 87.5%, #f9f9f9), linear-gradient(30deg, #f9f9f9 12%, transparent 12.5%, transparent 87%, #f9f9f9 87.5%, #f9f9f9), linear-gradient(150deg, #f9f9f9 12%, transparent 12.5%, transparent 87%, #f9f9f9 87.5%, #f9f9f9), linear-gradient(60deg, #f9f9f977 25%, transparent 25.5%, transparent 75%, #f9f9f977 75%, #f9f9f977), linear-gradient(60deg, #f9f9f977 25%, transparent 25.5%, transparent 75%, #f9f9f977 75%, #f9f9f977)`,
  backgroundSize: '34px 60px',
  backgroundPosition:
    '0 0, 0 0, 17px 30px, 17px 30px, 0 0, 17px 30px',
};

const Register: React.FC = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    errors,
    formState,
    reset,
  } = useForm();

  React.useEffect(() => {
    document.title = 'MAXIMA 2021: Request Token';
  }, []);

  const onSubmit = async (data: RequestTokenData) => {
    try {
      await requestToken(data);
      toast({
        position: 'bottom-right',
        title: 'Berhasil mendaftar.',
        description: `Kamu berhasil melakukan request token. Silakan tunggu pembagian token.`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    } finally {
      reset();
    }
  };

  return (
    <Flex style={bgStyle} justify="center" align="center">
      <Box>
        <LoginFormCard>
          <Image src={MxmLogo} width={50} height="auto" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Text style={formHeaderStyle}>Request Token</Text>
            <Stack spacing={4}>
              <FormControl id="name" isInvalid={errors.name}>
                <FormLabel style={formLabelStyle}>
                  Nama Lengkap
                </FormLabel>
                <Input
                  name="name"
                  type="text"
                  autoFocus
                  ref={register({ required: 'Isi nama kamu!' })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="nim_koor" isInvalid={errors.nim_koor}>
                <FormLabel style={formLabelStyle}>NIM</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="000000" />
                  <Input
                    type="number"
                    name="nim_koor"
                    ref={register({
                      required: 'Masukkan NIM kamu!',
                      minLength: {
                        value: 5,
                        message: 'NIM harus berupa 5 digit',
                      },
                      maxLength: {
                        value: 5,
                        message: 'NIM harus berupa 5 digit',
                      },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.nim_koor && errors.nim_koor.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="divisiID" isInvalid={errors.divisiID}>
                <FormLabel style={formLabelStyle}>Divisi</FormLabel>
                <Select
                  name="divisiID"
                  placeholder="Pilih divisi"
                  ref={register({ required: 'Pilih divisi kamu!' })}
                >
                  {divisionLists.map((d) => (
                    <option key={d.divisiID} value={d.divisiID}>
                      {d.name}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {errors.divisiID && errors.divisiID.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                leftIcon={<BellIcon />}
                colorScheme="teal"
              >
                Request Token
              </Button>
            </Stack>
          </form>
          <Center mt={8}>
            <Stack spacing={1}>
              <Link to="/login">
                <Text
                  fontSize="xs"
                  textAlign="center"
                  color="blue.500"
                >
                  Sudah memiliki akun? Masuk di sini.
                </Text>
              </Link>
              <Link to="/register">
                <Text
                  fontSize="xs"
                  textAlign="center"
                  color="blue.500"
                >
                  Aktivasi akun kamu di sini.
                </Text>
              </Link>
            </Stack>
          </Center>
        </LoginFormCard>
      </Box>
    </Flex>
  );
};

export default Register;
