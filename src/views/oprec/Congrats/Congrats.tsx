import { Heading, Box, useMediaQuery, Image } from '@chakra-ui/react';
import * as React from 'react';
import { MxmLogo } from '../../../assets';
import { OprecButton } from '../../../shared/styles/buttons';
import { ColoredContainer } from '../../../shared/styles/containers';
import { Palette } from '../../../types';
import './congrats.css';

const Congrats: React.FC = () => {
  const [isLargerThan490] = useMediaQuery('(min-width: 490px)');
  const [isLargerThan400] = useMediaQuery('(min-width: 400px)');

  return (
    <div>
      <ColoredContainer color={Palette.MxmWhite}>
        <Image
          src={MxmLogo}
          alt="Logo MAXIMA 2021"
          className="img-responsive"
          mt={16}
          mb={12}
        />
        <Heading
          size={
            isLargerThan490 ? '2xl' : isLargerThan400 ? 'xl' : 'md'
          }
          fontFamily="Kanit"
          style={{
            color: Palette.MxmPink,
          }}
          mt={3}
          mb={3}
          textAlign="center"
        >
          Selamat, <br /> Kamu Lolos!
        </Heading>
        <h3>
          Jangan lupa untuk mengikuti seleksi terbuka pada tanggal
          [tanggal] jam 17.00 - selesai
        </h3>
        <Box mt={3} />
      </ColoredContainer>
    </div>
  );
};

export default Congrats;
