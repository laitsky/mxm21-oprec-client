import * as React from 'react';
import { Button, Box, Flex, Center, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SelamatDatang: React.FC = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Heading>Logo MAXIMA 2021 Disini</Heading>
      <Heading>SELAMAT DATANG!</Heading>
      <Box height="30vh" />
      <Link to="/playground">
        <Button colorScheme="purple">Mulai</Button>
      </Link>
    </Flex>
  );
};

export default SelamatDatang;
