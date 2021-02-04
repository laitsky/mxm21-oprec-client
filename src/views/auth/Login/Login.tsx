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
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import jwtDecode from 'jwt-decode';
import { UnlockIcon } from '@chakra-ui/icons';
import { MxmLogo } from '../../../assets';
import { LoginFormCard } from '../../../shared/styles/cards';
import { formLabelStyle } from '../../../shared/constants';
import { formHeaderStyle } from '../../../shared/constants/styles';
import { AccessTokenProps, KoorLogin } from '../../../types';
import { koorLogin } from '../../../services/koor.service';

const bgStyle: React.CSSProperties = {
  height: '100vh',
  backgroundClip: '#E5E5F7',
  opacity: 1.0,
  backgroundImage: `linear-gradient(#c6c9fc 2px, transparent 2px), linear-gradient(to right, #c6c9fc 2px, #E5E5F7 2px)`,
  backgroundSize: '40px 40px',
};
const Login: React.FC = () => {
  const history = useHistory();
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
    document.title = 'MAXIMA 2021: Masuk';
  }, []);

  const onSubmit = async (data: KoorLogin) => {
    try {
      const result = await koorLogin(data);
      window.sessionStorage.setItem(
        'accessToken',
        result.accessToken,
      );
      const { divisiID }: AccessTokenProps = jwtDecode(
        result.accessToken,
      );
      history.push('/seleksi-form');
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
            <Text style={formHeaderStyle}>Masuk ke akun Anda</Text>
            <Stack spacing={4}>
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
              <FormControl id="password" isInvalid={errors.password}>
                <FormLabel style={formLabelStyle}>Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    name="password"
                    pr="4.5rem"
                    type={show ? 'text' : 'password'}
                    ref={register({
                      required: 'Masukkan password kamu!',
                    })}
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
                leftIcon={<UnlockIcon />}
                colorScheme="teal"
              >
                Masuk
              </Button>
            </Stack>
          </form>
        </LoginFormCard>
      </Box>
    </Flex>
  );
};

export default Login;
