import * as React from 'react';
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Center,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
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
import './daftar-divisi.css';
import { ButtonBackForm } from '../../../shared/styles/buttons';

const DaftarDivisi: React.FC = () => {
  React.useEffect(() => {
    Swal.fire({
      title:
        '<h3 class="jadwal-title">Jadwal Seleksi Penerimaan Panitia MAXIMA 2021</h3>',
      icon: 'info',
      html: `
        <div style="font-family: 'Kanit'">
        <h2 class='jadwal-header'>8-11 Februari 2021</h2>
        <h3 class='jadwal-text'>Open Recruitment</h3>
        <h2 class='jadwal-header'>14 Februari 2021</h2>
        <h3 class='jadwal-text'>Pengumuman Tahap Seleksi Formulir</h3>
        </div>
      `,
      confirmButtonText: 'Mengerti!',
      confirmButtonColor: '#F4224B',
    });
  });

  React.useEffect(() => {
    document.title = 'MAXIMA 2021: Daftar Divisi';
  }, []);
  return (
    <Box
      style={{
        minWidth: '100%',
        background:
          'linear-gradient(90deg, rgba(31,44,76,1) 0%, rgba(44,61,103,1) 100%)',
      }}
      pb={5}
    >
      <Flex direction="column" align="center">
        <Box pt={14}>
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
          <ButtonBackForm>NEXT</ButtonBackForm>
        </Link>
      </Flex>
    </Box>
  );
};

export default DaftarDivisi;
