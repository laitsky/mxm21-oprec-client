import * as React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Jadwal: React.FC = () => {
  return (
    <Box>
      <Link to="/daftar-divisi">
        <Button colorScheme="cyan">Lanjut</Button>
      </Link>
    </Box>
  );
};

export default Jadwal;
