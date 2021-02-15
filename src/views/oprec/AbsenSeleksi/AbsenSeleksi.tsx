import * as React from 'react';
import {
  Alert,
  AlertIcon,
  AlertDescription,
  Box,
  Center,
  InputGroup,
  Input,
  InputLeftAddon,
  Image,
  FormControl,
  FormLabel,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { MxmLogoText } from '../../../assets';
import { absenSeleksi } from '../../../services/oprec.service';
import { OprecHomepageHeader } from '../../../shared/styles/header';
import { OprecHomepageContainer } from '../../../shared/styles/containers';
import { HomepageCheckCard } from '../../../shared/styles/cards';
import { MxmLoading } from '../../../shared/motions/MxmLoading';
import './absen-seleksi.css';
import { formLabelStyle } from '../../../shared/constants';
import { OprecButton } from '../../../shared/styles/buttons';
import { AbsenProps } from '../../../types';

const AbsenSeleksi: React.FC = () => {
  const [link, setLink] = React.useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, errors, formState } = useForm();

  const onSubmit = async (data: AbsenProps) => {
    window.sessionStorage.clear();
    try {
      const result = await absenSeleksi(data);
      setLink(result.message);
      onOpen();
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    }
  };

  React.useEffect(() => {
    document.title = 'MAXIMA 2021: Seleksi Terbuka';
  }, []);

  return (
    <motion.div
      initial={{ y: 999, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 70,
        damping: 20,
      }}
      style={{ minHeight: '100vh' }}
    >
      <OprecHomepageContainer>
        <div id="banner">
          <Link to="/check-nim">
            Klik di sini untuk melihat status kelulusan Seleksi
            Formulir kamu.
          </Link>
        </div>
        <OprecHomepageHeader>
          SELEKSI <br /> TERBUKA <br /> MAXIMA 2021
        </OprecHomepageHeader>
        <motion.div
          initial={{ y: -500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
            delay: 0.5,
          }}
        >
          <HomepageCheckCard>
            <Image
              src={MxmLogoText}
              alt="Logo MAXIMA 2021"
              className="img-responsive"
            />
            <Box h="5vh" />
            <form id="nim-form" onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <FormControl isInvalid={errors.nim_mhs}>
                  <FormLabel style={formLabelStyle}>
                    Masukkan NIM kamu:
                  </FormLabel>
                  <InputGroup mb={8}>
                    <InputLeftAddon
                      children="000000"
                      fontFamily="Varela"
                      fontSize="sm"
                    />
                    <Input
                      autoFocus
                      fontFamily="Kanit"
                      type="number"
                      name="nim_mhs"
                      ref={register({
                        required: 'Masukkan NIM kamu!',
                        minLength: {
                          value: 5,
                          message: 'NIM harus berupa 5 digit',
                        },
                        maxLength: {
                          value: 5,
                          message: 'NIM harus berupa 5 digit',
                        },
                      })}
                    />
                  </InputGroup>
                  <Center mt={-6}>
                    {errors.nim_mhs && (
                      <Alert status="warning" variant="left-accent">
                        <AlertIcon />
                        <AlertDescription>
                          {errors.nim_mhs.message}
                        </AlertDescription>
                      </Alert>
                    )}
                  </Center>
                </FormControl>
                <FormControl isInvalid={errors.token}>
                  <FormLabel style={formLabelStyle}>
                    Masukkan token kamu:
                  </FormLabel>
                  <Input
                    fontFamily="Kanit"
                    name="token"
                    ref={register({
                      required: 'Masukkan token kamu!',
                    })}
                  />
                  <Center mt={3}>
                    {errors.token && (
                      <Alert status="warning" variant="left-accent">
                        <AlertIcon />
                        <AlertDescription>
                          {errors.token.message}
                        </AlertDescription>
                      </Alert>
                    )}
                  </Center>
                </FormControl>
              </Box>
              <Center mt={8}>
                {formState.isSubmitting ? (
                  <MxmLoading />
                ) : (
                  <OprecButton type="submit">Absen!</OprecButton>
                )}
              </Center>
            </form>
          </HomepageCheckCard>
        </motion.div>
      </OprecHomepageContainer>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily="DM Sans">
            Seleksi Terbuka MAXIMA 2021
          </ModalHeader>
          <ModalBody
            textAlign="justify"
            fontFamily="Kanit"
            letterSpacing={-0.2}
          >
            <strong>Welcome dreamers</strong>, <br /> Selamat
            mengikuti seleksi terbuka (interview / briefing / FGD)
            MAXIMA 2021. Untuk masuk ke dalam pertemuan ZOOM, silakan
            klik tombol "Masuk ke ruang ZOOM" di bawah kanan.
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              variant="ghost"
              mr={3}
              onClick={onClose}
            >
              Tutup
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                window.open(link);
              }}
            >
              Masuk ke ruang ZOOM
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </motion.div>
  );
};

export default AbsenSeleksi;
