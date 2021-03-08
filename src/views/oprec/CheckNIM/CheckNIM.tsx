import {
  Box,
  Heading,
  useMediaQuery,
  Image,
  Alert,
  AlertDescription,
  AlertIcon,
  Center,
  Spinner,
} from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Link, useHistory } from 'react-router-dom';
import { OprecButton } from '../../../shared/styles/buttons';
import { ColoredContainer } from '../../../shared/styles/containers';
import { MxmInput } from '../../../shared/styles/input';
import { Palette } from '../../../types';
import { MxmWhiteLogo } from '../../../assets';
import './check-nim.css';
import { checkStudentStats } from '../../../services/oprec.service';

const CheckNIM: React.FC = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onChange',
  });
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isLargerThan490] = useMediaQuery('(min-width: 490px)');
  const [isLargerThan400] = useMediaQuery('(min-width: 400px)');
  const history = useHistory();

  React.useEffect(() => {
    document.title = 'MAXIMA 2021: Cek Seleksi Panitia';
  }, []);

  const onSubmit = async (data: any) => {
    setLoading(true);
    const { nim_mhs } = data;
    try {
      const result = await checkStudentStats(nim_mhs);
      console.log(result);
      if (result.lulusInterview) {
        history.push({
          pathname: '/congrats',
          state: {
            data: {
              name: result.name,
              nim: result.nim,
              divisi: result.divisi,
              lineLink: result.line_group_link,
              qrLink: result.line_qr_link,
            },
          },
        });
      } else {
        history.push('/sorry');
      }
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ColoredContainer color={Palette.MxmYellow}>
        <Link to="/">
          <Image
            src={MxmWhiteLogo}
            alt="Logo MAXIMA 2021"
            className="img-responsive"
            mt={16}
            mb={12}
          />
        </Link>
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
        >
          Selamat Datang!
        </Heading>
        <Heading
          size={
            isLargerThan490 ? '2xl' : isLargerThan400 ? 'xl' : 'md'
          }
          fontFamily="Kanit"
          style={{
            color: Palette.MxmPink,
          }}
        >
          Silakan masukkan NIM anda
        </Heading>

        <MxmInput
          name="nim_mhs"
          placeholder="NIM 5 digit"
          maxLength={5}
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
        <Center>
          {errors.nim_mhs && (
            <Alert status="warning" variant="left-accent">
              <AlertIcon />
              <AlertDescription>
                {errors.nim_mhs.message}
              </AlertDescription>
            </Alert>
          )}
        </Center>
        <Box mt={3} />

        {loading ? (
          <Spinner color="teal.300" size="lg" />
        ) : (
          <OprecButton type="submit">Cari!</OprecButton>
        )}
      </ColoredContainer>
    </form>
  );
};

export default CheckNIM;
