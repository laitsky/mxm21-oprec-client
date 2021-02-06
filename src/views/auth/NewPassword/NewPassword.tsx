import * as React from 'react';
import {
  Button,
  Box,
  Flex,
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightElement,
  Stack,
  Image,
  FormControl,
  FormLabel,
  Text,
  FormErrorMessage,
  Center,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { MxmLogo } from '../../../assets';
import { LoginFormCard } from '../../../shared/styles/cards';
import {
  formHeaderStyle,
  formLabelStyle,
} from '../../../shared/constants/styles';
import { SignUpData } from '../../../types';
import { signUp } from '../../../services/koor.service';

const bgStyle: React.CSSProperties = {
  height: '100vh',
  backgroundColor: '#E6E6F3',
  opacity: 1.0,
  backgroundImage: `repeating-radial-gradient( circle at 0 0, transparent 0, #e6e6f3 20px ), repeating-linear-gradient( #acaed855, #acaed8 )`,
};
const NewPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    errors,
    formState,
    reset,
  } = useForm();
  const [show, setShow] = React.useState<boolean>(false);
  const handleClick = () => setShow(!show);

  React.useEffect(() => {
    document.title = 'MAXIMA 2021: Aktivasi Akun';
  }, []);

  const onSubmit = async (data: SignUpData) => {
    try {
      const result = await signUp(data);
      console.log(result);
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
            <Text style={formHeaderStyle}>Aktivasi Akun</Text>
            <Stack spacing={4}>
              <FormControl id="nim_koor" isInvalid={errors.nim_koor}>
                <FormLabel style={formLabelStyle}>NIM</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="000000" />
                  <Input
                    type="number"
                    autoFocus
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
              <FormControl id="otp" isInvalid={errors.otp}>
                <FormLabel style={formLabelStyle}>Token</FormLabel>
                <Input
                  name="otp"
                  ref={register({ required: 'Isi kode OTP kamu!' })}
                />
                <FormErrorMessage>
                  {errors.otp && errors.otp.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password}>
                <FormLabel style={formLabelStyle}>Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    name="password"
                    pr="4.5rem"
                    type={show ? 'text' : 'password'}
                    ref={register({ required: 'Isi password kamu!' })}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleClick}
                    >
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                leftIcon={<ArrowForwardIcon />}
                colorScheme="teal"
              >
                Aktivasi Akun!
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
              <Link to="/request-token">
                <Text
                  fontSize="xs"
                  textAlign="center"
                  color="blue.500"
                >
                  Request Token Akun BPH/Koor
                </Text>
              </Link>
            </Stack>
          </Center>
        </LoginFormCard>
      </Box>
    </Flex>
  );
};

export default NewPassword;
