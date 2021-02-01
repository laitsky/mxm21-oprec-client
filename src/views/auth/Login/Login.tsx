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
  Center,
  Image,
  FormControl,
  FormLabel,
  Text,
} from '@chakra-ui/react';
import { UnlockIcon } from '@chakra-ui/icons';
import { MxmLogo } from '../../../assets';
import { LoginFormCard } from '../../../shared/styles/cards';
import { formLabelStyle } from '../../../shared/constants';
import { formHeaderStyle } from '../../../shared/constants/styles';

const bgStyle: React.CSSProperties = {
  height: '100vh',
  backgroundClip: '#E5E5F7',
  opacity: 1.0,
  backgroundImage: `linear-gradient(#c6c9fc 2px, transparent 2px), linear-gradient(to right, #c6c9fc 2px, #E5E5F7 2px)`,
  backgroundSize: '40px 40px',
};

const Login: React.FC = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const handleClick = () => setShow(!show);

  React.useEffect(() => {
    document.title = 'MAXIMA 2020: Masuk';
  }, []);
  return (
    <Flex style={bgStyle} justify="center" align="center">
      <Box>
        <LoginFormCard>
          <Image src={MxmLogo} width={50} height="auto" />
          <Text style={formHeaderStyle}>Masuk ke akun Anda</Text>
          <Stack spacing={4}>
            <FormControl id="nim">
              <FormLabel style={formLabelStyle}>NIM</FormLabel>
              <InputGroup>
                <InputLeftAddon children="000000" />
                <Input autoFocus />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <FormLabel style={formLabelStyle}>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button leftIcon={<UnlockIcon />} colorScheme="teal">
              Masuk
            </Button>
          </Stack>
        </LoginFormCard>
      </Box>
    </Flex>
  );
};

export default Login;
