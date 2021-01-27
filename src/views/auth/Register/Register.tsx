import * as React from 'react';
import {
  Button,
  Center,
  Box,
  Flex,
  InputGroup,
  Input,
  InputLeftAddon,
  FormControl,
  FormLabel,
  Select,
  Stack,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { MxmLogo } from '../../../assets';
import { divisions } from '../../helper';

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
        <Stack spacing={2}>
          <FormControl id="name">
            <FormLabel>Nama Lengkap</FormLabel>
            <Input placeholder="Masukkan Nama" type="text" />
          </FormControl>
          <FormControl id="nim">
            <FormLabel>NIM</FormLabel>
            <InputGroup>
              <InputLeftAddon children="000000" />
              <Input placeholder="Masukkan NIM" />
            </InputGroup>
          </FormControl>
          <FormControl id="division">
            <FormLabel>Divisi</FormLabel>
            <Select placeholder="Pilih divisi">
              {divisions.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name}
                </option>
              ))}
            </Select>
          </FormControl>
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
