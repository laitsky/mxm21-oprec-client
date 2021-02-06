import * as React from 'react';
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Center,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
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
import { DivisiNextButton } from '../../../shared/styles/buttons';
import { motion } from 'framer-motion';

const DaftarDivisi: React.FC = () => {
  React.useEffect(() => {
    Swal.fire({
      title: 'Jadwal Seleksi Penerimaan Panitia MAXIMA 2021',
      icon: 'info',
      html: `
        <div style="font-family: 'Kanit'">
        <h2 class='jadwal-header'>8-12 Februari 2021</h2>
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
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 70,
        damping: 20,
      }}
      style={{ minHeight: '100vh' }}
    >
      <Box
        style={{
          minWidth: '100%',
          backgroundColor: Palette.MxmNavy,
        }}
        pb={5}
      >
        <Flex direction="column" align="center">
          <Box pt={14}>
            <Heading
              fontFamily="Kanit"
              fontWeight="700"
              color="white"
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
            <DivisiNextButton>
              <ArrowRightIcon h={3} mr={2} mb={1} />
              NEXT
            </DivisiNextButton>
          </Link>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default DaftarDivisi;
