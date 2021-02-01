import * as React from 'react';
import {
  Container,
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Center,
  borderParser,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  DivisionCard,
  DivisionCardBody,
  DivisionCardContent,
  DivisionCardImg,
  DivisionCardTitle,
} from '../../../shared/styles/cards';
import { divisionDataList } from './constants';
import { DivisionContainer } from '../../../shared/styles/containers';
import { Palette } from '../../../types';

const DaftarDivisi: React.FC = () => {
  return (
    <Flex direction="column" align="center">
      <Box
        pb={8}
        style={{
          minWidth: '100%',
          background:
            'linear-gradient(90deg, rgba(31,44,76,1) 0%, rgba(44,61,103,1) 100%)',
          padding: '4em 0 4em 0',
        }}
      >
        <Center>
          <Heading
            fontFamily="Kanit"
            fontWeight="700"
            color={Palette.MxmYellow}
            letterSpacing={1.5}
            size="2xl"
          >
            DAFTAR DIVISI & JOB DESCRIPTION
          </Heading>
        </Center>
      </Box>
      <Center>
        <DivisionContainer>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing="1.5em">
            {divisionDataList.map((d) => (
              <DivisionCard>
                <DivisionCardImg src={d.img} />
                <DivisionCardBody>
                  <DivisionCardTitle>{d.title}</DivisionCardTitle>
                  <DivisionCardContent>{d.desc}</DivisionCardContent>
                </DivisionCardBody>
              </DivisionCard>
            ))}
          </SimpleGrid>
        </DivisionContainer>
      </Center>
      <Link to="/data-diri">
        <Button colorScheme="cyan">Lanjut</Button>
      </Link>
    </Flex>
  );
};

export default DaftarDivisi;
