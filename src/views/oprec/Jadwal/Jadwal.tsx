import * as React from 'react';
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Palette } from '../../../types';
import { SunIcon } from '@chakra-ui/icons';

const Jadwal: React.FC = () => {
  return (
    <Box
      style={{
        minWidth: '100%',
        minHeight: '100vh',
        background:
          'linear-gradient(90deg, rgba(31,44,76,1) 0%, rgba(44,61,103,1) 100%)',
      }}
    >
      <Flex direction="column" align="center">
        <Box pb={6} pt={12}>
          <Heading
            fontFamily="Kanit"
            fontWeight="700"
            color={Palette.MxmYellow}
            letterSpacing={1.5}
            size="2xl"
            textAlign="center"
          >
            LINIMASA OPEN RECRUITMENT MAXIMA 2021
          </Heading>
        </Box>
      </Flex>

      <Stack spacing={12}>
        <Box>
          <Heading
            fontFamily="Kanit"
            fontWeight="700"
            color={Palette.MxmCyan}
            letterSpacing={1.2}
            size="xl"
          >
            <SunIcon h={4} />
            8-11 Februari 2021
          </Heading>
          <Text
            fontFamily="DM Sans"
            fontSize="xl"
            style={{ color: Palette.MxmPink }}
          >
            Open Recruitment
          </Text>
        </Box>

        <Box>
          <Heading
            fontFamily="Kanit"
            fontWeight="700"
            color={Palette.MxmCyan}
            letterSpacing={1.2}
            size="xl"
          >
            <SunIcon h={4} />
            14 Februari 2021
          </Heading>
          <Text
            fontFamily="DM Sans"
            fontSize="xl"
            style={{ color: Palette.MxmPink }}
          >
            Pengumuman Tahap Seleksi Formulir
          </Text>
        </Box>
      </Stack>
      <Link to="/daftar-divisi">
        <Button colorScheme="cyan">Lanjut</Button>
      </Link>
    </Box>
  );
};

export default Jadwal;
