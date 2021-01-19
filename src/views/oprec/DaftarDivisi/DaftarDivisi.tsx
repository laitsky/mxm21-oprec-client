import * as React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const DaftarDivisi: React.FC = () => {
  return (
    <Box>
      <h1>Ini adalah halaman daftar divisi.</h1>
      <Link to="/data-diri">
        <Button colorScheme="cyan">Lanjut</Button>
      </Link>
    </Box>
  );
};

export default DaftarDivisi;
