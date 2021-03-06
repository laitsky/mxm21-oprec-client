import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import AppRouter from './AppRouter';

export const App: React.FC = () => (
  <AnimatePresence>
    <ChakraProvider theme={theme} resetCSS>
      {/* <ColorModeSwitcher /> */}
      <AppRouter />
    </ChakraProvider>
  </AnimatePresence>
);
