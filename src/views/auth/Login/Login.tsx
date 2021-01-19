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
} from '@chakra-ui/react';
import { UnlockIcon } from '@chakra-ui/icons';
import { MxmLogo } from '../../../assets';

const Login: React.FC = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Flex direction="column" align="center" justify="center">
        <Box p={4} color="white">
          <img src={MxmLogo} />
        </Box>
        <Box p={10} />
        <Stack spacing={6}>
          <InputGroup>
            <InputLeftAddon children="000000" />
            <Input placeholder="Masukkan NIM" />
          </InputGroup>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Masukkan password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button leftIcon={<UnlockIcon />} colorScheme="teal">
            Masuk
          </Button>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
