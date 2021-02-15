import * as React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  SettingsIcon,
} from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { MxmLogo } from '../../../assets';

const Links = [
  {
    name: 'Seleksi Formulir',
    route: '/seleksi-form',
  },
  {
    name: 'Seleksi Terbuka',
    route: '/koor-seleksiterbuka',
  },
  {
    name: 'Lulus Interview',
    route: '/koor-lulusinterview',
  },
];

interface NavLinkProps {
  children: React.ReactNode;
  route?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  route,
}: NavLinkProps) => (
  <RouterLink to={route as string}>
    <Link
      px={2}
      py={1}
      rounded="md"
      _hover={{ textDecoration: 'none', bg: 'gray.200' }}
    >
      {children}
    </Link>
  </RouterLink>
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
                <NavLink key={link.route} route={link.route}>
                  {link.name}
                </NavLink>
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
                {/* <MenuItem>Link 1</MenuItem>
                <MenuDivider /> */}
                <MenuItem
                  onClick={() => {
                    window.sessionStorage.clear();
                    window.location.replace('/login');
                  }}
                >
                  Keluar
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.route} route={link.route}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default KoorNavbar;
