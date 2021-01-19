import * as React from 'react';
import {
  Button,
  Center,
  Box,
  Flex,
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { MxmLogo } from '../../../assets';

const Register: React.FC = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Flex direction="column" align="center" justify="center">
        <Box p={4} color="white">
          <img src={MxmLogo} />
        </Box>
        <Box p={10} />
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon children="000000" />
            <Input placeholder="Masukkan NIM" />
          </InputGroup>
          <Center>
            <Button
              leftIcon={<BellIcon />}
              colorScheme="teal"
              variant="outline"
            >
              Request Token
            </Button>
          </Center>
        </Stack>
      </Flex>
    </>
  );
};

export default Register;
