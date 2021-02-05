import * as React from 'react';
import {
  Box,
  Button,
  Text,
  Container,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2';
import {
  AccessTokenProps,
  Divisi,
  InterviewDateProps,
  LulusInterviewProps,
  Pendaftar,
  SeleksiFormProps,
} from '../../../types';
import { getStudentData } from '../../../utils/getStudentData';
import {
  updateInterviewDate,
  updateLulusForm,
} from '../../../services/koor.service';
import { KoorNavbar } from '../../../shared/components';

const RegistrationList: React.FC = () => {
  const [data, setData] = React.useState<Pendaftar[]>([]);

  const accessToken: AccessTokenProps = jwtDecode(
    window.sessionStorage.getItem('accessToken')!,
  );
  const { divisiID, nim_koor } = accessToken;

  React.useEffect(() => {
    document.title = 'MAXIMA 2021: Laman BPH / Koor - Seleksi Form';

    const fetchData = async () => {
      setData(await getStudentData(nim_koor, divisiID));
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    console.log('test', data);
  }, [data]);

  const handleSelectLulusChange = (
    nim_mhs: string,
    i: number,
  ) => async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const seleksiForm: SeleksiFormProps = {
      nim_koor: nim_koor.toString(),
      nim_mhs,
      lulusSeleksiForm: +(e.target.value === 'true'),
    };
    try {
      await updateLulusForm(seleksiForm);
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    }
    const newData = [...data];
    newData[i] = {
      ...newData[i],
      lulusSeleksiForm: +(e.target.value === 'true'),
    };
    setData([...newData]);
  };

  const handleInterviewDateChange = (nim_mhs: string) => async (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const interviewDate: InterviewDateProps = {
      nim_koor: nim_koor.toString(),
      nim_mhs,
      tanggal_wawancara: e.target.value,
    };
    console.log(nim_koor.toString(), nim_mhs, e.target.value);
    try {
      const result = await updateInterviewDate(interviewDate);
      console.log(result);
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    }
  };

  return (
    <Box>
      <KoorNavbar />
      <Container maxW="6xl" mt={12}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>nama</Th>
              <Th>divisi</Th>
              <Th>formulir</Th>
              <Th>lulus seleksi form?</Th>
              <Th>tanggal seleksi</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((d, i) => (
                <Tr key={d.nim_mhs}>
                  <Td>
                    {d.name} ({d.nim_mhs})
                  </Td>
                  <Td>{d.divisi.name}</Td>
                  <Td>
                    <Button
                      leftIcon={<DownloadIcon />}
                      colorScheme="teal"
                    >
                      <Text fontSize="xs">Lihat Formulir</Text>
                    </Button>
                  </Td>
                  <Td>
                    <Select
                      defaultValue={d.lulusSeleksiForm.toString()}
                      onChange={handleSelectLulusChange(
                        d.nim_mhs.toString(),
                        i,
                      )}
                    >
                      <option value="false">Tidak</option>
                      <option value="true">Ya</option>
                    </Select>
                  </Td>
                  <Td>
                    <Select
                      defaultValue="option1"
                      onChange={handleInterviewDateChange(
                        d.nim_mhs.toString(),
                      )}
                      disabled={!d.lulusSeleksiForm}
                    >
                      <option value="option1" disabled>
                        Pilih
                      </option>
                      <option value="15 Februari 2021">
                        15 Februari 2021
                      </option>
                      <option value="16 Februari 2021">
                        16 Februari 2021
                      </option>
                      <option value="17 Februari 2021">
                        17 Februari 2021
                      </option>
                      <option value="18 Februari 2021">
                        18 Februari 2021
                      </option>
                      <option value="19 Februari 2021">
                        19 Februari 2021
                      </option>
                    </Select>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Container>
    </Box>
  );
};

export default RegistrationList;
