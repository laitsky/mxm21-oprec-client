import * as React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  SettingsIcon,
} from '@chakra-ui/icons';
import { MxmLogo } from '../../../assets';

const Links = ['Seleksi Formulir'];

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded="md"
    _hover={{ textDecoration: 'none', bg: 'gray.200' }}
    href="#"
  >
    {children}
  </Link>
);

const KoorNavbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="gray.100" px={4}>
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
        >
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box>
              <Image src={MxmLogo} w={10} />
            </Box>
            <HStack
              as="nav"
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
              >
                <SettingsIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => {
                  window.sessionStorage.clear();
                  window.location.replace('/')
                }}>Keluar</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default KoorNavbar;
