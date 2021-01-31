import * as React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Box,
  Flex,
  Center,
  InputGroup,
  Input,
  InputLeftAddon,
  Heading,
  Image,
  FormControl,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { MxmLogoText } from '../../../assets';
import { studentVerify } from '../../../services/oprec.service';
import { OprecHomepageHeader } from '../../../shared/styles/header';

const SelamatDatang: React.FC = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    errors,
    formState,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data: Record<string, unknown>) => {
    try {
      const result = await studentVerify(data.nim);
      console.log(result);
      history.push('/jadwal-oprec');
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <Flex direction="column" align="center" justify="center">
      <OprecHomepageHeader>OPEN RECRUITMENT</OprecHomepageHeader>
      <Image
        mt={12}
        src={MxmLogoText}
        alt="Logo MAXIMA 2021"
      />
      <Box h="10vh" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <FormControl isInvalid={errors.nim}>
            <InputGroup
              mb={8}
              w={{
                base: '90vw',
                sm: '70vw',
                md: '45vw',
                lg: '30vw',
                xl: '18vw',
              }}
            >
              <InputLeftAddon children="000000" />
              <Input
                type="number"
                placeholder="Masukkan NIM"
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
              />
            </InputGroup>
            <Center mt={-6}>
              {errors.nim && (
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle mr={2}>Error!</AlertTitle>
                  <AlertDescription>
                    {errors.nim.message}
                  </AlertDescription>
                </Alert>
              )}
            </Center>
          </FormControl>
        </Box>
        <Center mt={6}>
          <Button
            colorScheme="purple"
            isLoading={formState.isSubmitting}
            type="submit"
          >
            Mulai
          </Button>
        </Center>
      </form>
    </Flex>
  );
};

export default SelamatDatang;
