import * as React from 'react';
import { Container, Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  DivisionCard,
  DivisionCardBody,
  DivisionCardContent,
  DivisionCardImg,
  DivisionCardTitle,
} from '../../../shared/styles/cards';
import { divisionDataList } from './constants';



const DaftarDivisi: React.FC = () => {
  return (
    <Flex direction="column" align="center">
      <Heading
        fontFamily="Kanit"
        fontWeight="700"
        color="#F4224B"
        letterSpacing={1.2}
        size="3xl"
      >
        Daftar Divisi
      </Heading>
      <SimpleGrid columns={2} spacing="20px">
        {divisionDataList.map(d => (
          <DivisionCard>
            <DivisionCardImg src={d.img} />
            <DivisionCardBody>
              <DivisionCardTitle>{d.title}</DivisionCardTitle>
              <DivisionCardContent>{d.desc}</DivisionCardContent>
            </DivisionCardBody>
          </DivisionCard>
        ))}
      </SimpleGrid>
      <Link to="/data-diri">
        <Button colorScheme="cyan">Lanjut</Button>
      </Link>
    </Flex>
  );
};

export default DaftarDivisi;
