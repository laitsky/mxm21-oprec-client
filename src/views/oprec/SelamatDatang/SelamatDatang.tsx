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
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { MxmLogoText } from '../../../assets';
import { studentVerify } from '../../../services/oprec.service';
import { OprecHomepageHeader } from '../../../shared/styles/header';
import { OprecHomepageContainer } from '../../../shared/styles/containers';
import { HomepageCheckCard } from '../../../shared/styles/cards';
import { MxmLoading } from '../../../shared/motions/MxmLoading';
import './selamat-datang.css';
import { formLabelStyle } from '../../../shared/constants';
import { OprecButton } from '../../../shared/styles/buttons';

interface Data {
  nim: string;
}
const SelamatDatang: React.FC = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    errors,
    formState,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data: Data) => {
    window.sessionStorage.clear();
    try {
      await studentVerify(data.nim);
      window.sessionStorage.setItem('stuNim', data.nim);
      history.push('/daftar-divisi');
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    } finally {
      reset();
    }
  };

  React.useEffect(() => {
    document.title = 'MAXIMA 2021: Open Recruitment';
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
        <OprecHomepageHeader>
          OPEN <br /> RECRUITMENT <br /> MAXIMA 2021
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
                <FormControl isInvalid={errors.nim}>
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
                      fontFamily="Kanit"
                      type="number"
                      name="nim"
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
                      // onChange={(e) => {
                      //   e.target.value.length === 5
                      //     ? handleSubmit(onSubmit)()
                      //     : null;
                      // }}
                    />
                  </InputGroup>
                  <Center mt={-6}>
                    {errors.nim && (
                      <Alert status="warning" variant="left-accent">
                        <AlertIcon />
                        <AlertDescription>
                          {errors.nim.message}
                        </AlertDescription>
                      </Alert>
                    )}
                  </Center>
                </FormControl>
              </Box>
              <Center mt={6}>
                {formState.isSubmitting ? (
                  <MxmLoading />
                ) : (
                  <OprecButton type="submit">SUBMIT</OprecButton>
                )}
              </Center>
            </form>
          </HomepageCheckCard>
        </motion.div>
      </OprecHomepageContainer>
    </motion.div>
  );
};

export default SelamatDatang;
