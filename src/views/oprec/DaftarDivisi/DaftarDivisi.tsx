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
    <Box
      style={{
        minWidth: '100%',
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
            DAFTAR DIVISI & JOB DESCRIPTION
          </Heading>
        </Box>
        <Center>
          <DivisionContainer>
            <SimpleGrid columns={[1, 1, 1, 2]} spacing="1.5em">
              {divisionDataList.map((d) => (
                <DivisionCard key={d.title}>
                  <DivisionCardImg src={d.img} />
                  <DivisionCardBody>
                    <DivisionCardTitle>{d.title}</DivisionCardTitle>
                    <DivisionCardContent>
                      {d.desc}
                    </DivisionCardContent>
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
    </Box>
  );
};

export default DaftarDivisi;
