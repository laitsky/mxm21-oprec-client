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
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { MxmLogo } from '../../../assets';
import { LoginFormCard } from '../../../shared/styles/cards';
import {
  formHeaderStyle,
  formLabelStyle,
} from '../../../shared/constants/styles';

const bgStyle: React.CSSProperties = {
  height: '100vh',
  backgroundColor: '#E6E6F3',
  opacity: 1.0,
  backgroundImage: `repeating-radial-gradient( circle at 0 0, transparent 0, #e6e6f3 20px ), repeating-linear-gradient( #acaed855, #acaed8 )`,
};
const NewPassword: React.FC = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const handleClick = () => setShow(!show);

  React.useEffect(() => {
    document.title = 'MAXIMA 2020: Aktivasi Akun';
  }, []);
  return (
    <Flex style={bgStyle} justify="center" align="center">
      <Box>
        <LoginFormCard>
          <Image src={MxmLogo} width={50} height="auto" />
          <Text style={formHeaderStyle}>Aktivasi Akun</Text>
          <Stack spacing={4}>
            <FormControl id="nim">
              <FormLabel style={formLabelStyle}>NIM</FormLabel>
              <InputGroup>
                <InputLeftAddon children="000000" />
                <Input autoFocus />
              </InputGroup>
            </FormControl>
            <FormControl id="token">
              <FormLabel style={formLabelStyle}>Token</FormLabel>
              <Input />
            </FormControl>
            <FormControl id="password">
              <FormLabel style={formLabelStyle}>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Masukkan Password Baru"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              leftIcon={<ArrowForwardIcon />}
              colorScheme="teal"
            >
              Aktivasi Akun!
            </Button>
          </Stack>
        </LoginFormCard>
      </Box>
    </Flex>
  );
};

export default NewPassword;
