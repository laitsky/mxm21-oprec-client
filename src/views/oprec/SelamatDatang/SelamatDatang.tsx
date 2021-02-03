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
import { MxmLogoText } from '../../../assets';
import { studentVerify } from '../../../services/oprec.service';
import { OprecHomepageHeader } from '../../../shared/styles/header';
import { OprecHomepageContainer } from '../../../shared/styles/containers';
import { HomepageCheckCard } from '../../../shared/styles/cards';
import { MxmLoading } from '../../../shared/motions/MxmLoading';
import './selamat-datang.css';
import { formLabelStyle } from '../../../shared/constants';

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

  const onSubmit = async (data: Record<string, unknown>) => {
    try {
      await studentVerify(data.nim);
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
    document.title = 'MAXIMA 2020: Open Recruitment';
  }, []);

  return (
    <OprecHomepageContainer>
      <OprecHomepageHeader>
        OPEN <br /> RECRUITMENT <br /> MAXIMA 2021
      </OprecHomepageHeader>
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
                  onChange={(e) => {
                    e.target.value.length === 5
                      ? handleSubmit(onSubmit)()
                      : null;
                  }}
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
            {formState.isSubmitting && <MxmLoading />}
          </Center>
        </form>
      </HomepageCheckCard>
    </OprecHomepageContainer>
  );
};

export default SelamatDatang;
