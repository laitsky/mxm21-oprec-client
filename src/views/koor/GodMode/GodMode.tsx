import { Box } from '@chakra-ui/react';
import jwtDecode from 'jwt-decode';
import * as React from 'react';
import { toggleKoorRoutes } from '../../../services/admin.service';
import { AccessTokenProps } from '../../../types';

const GodMode: React.FC = () => {
  const accessToken: AccessTokenProps = jwtDecode(
    window.sessionStorage.getItem('accessToken')!,
  );
  const { nim_koor } = accessToken;
  return (
    <Box>
      <h1>
        Toggle Koor{' '}
        <button
          onClick={async () => {
            const result = await toggleKoorRoutes({
              nim_koor,
              toggle: 1,
            });
            console.log(result);
          }}
        >
          toggle
        </button>
      </h1>
    </Box>
  );
};

export default GodMode;
