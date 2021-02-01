import * as React from 'react';
import {
  Button,
  Image,
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
  Text,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { MxmLogo } from '../../../assets';
import { divisions } from '../../helper';
import { LoginFormCard } from '../../../shared/styles/cards';
import {
  formLabelStyle,
  formHeaderStyle,
} from '../../../shared/constants/styles';

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
  React.useEffect(() => {
    document.title = 'MAXIMA 2020: Request Token';
  }, []);

  return (
    <Flex style={bgStyle} justify="center" align="center">
      <Box>
        <LoginFormCard>
          <Image src={MxmLogo} width={50} height="auto" />
          <Text style={formHeaderStyle}>Request Token</Text>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel style={formLabelStyle}>
                Nama Lengkap
              </FormLabel>
              <Input type="text" autoFocus />
            </FormControl>
            <FormControl id="nim">
              <FormLabel style={formLabelStyle}>NIM</FormLabel>
              <InputGroup>
                <InputLeftAddon children="000000" />
                <Input />
              </InputGroup>
            </FormControl>
            <FormControl id="division">
              <FormLabel style={formLabelStyle}>Divisi</FormLabel>
              <Select placeholder="Pilih divisi">
                {divisions.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Button leftIcon={<BellIcon />} colorScheme="teal">
              Request Token
            </Button>
          </Stack>
        </LoginFormCard>
      </Box>
    </Flex>
  );
};

export default Register;
