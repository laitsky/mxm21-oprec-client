import * as React from 'react';
import {
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
import { dataPendaftar } from './dummyData';
import { AccessTokenProps, Divisi, Pendaftar } from '../../../types';
import {
  getAllStudent,
  getStudentByDivision,
} from '../../../services/koor.service';

const getStudentData = async (divisiID: Divisi) => {
  if (divisiID === Divisi.SuperAdmin || divisiID === Divisi.BPH) {
    try {
      const result = await getAllStudent();
      console.log(result);
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    }
  } else {
    try {
      const result = await getStudentByDivision(divisiID);
      console.log(result);
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    }
  }
};

const RegistrationList: React.FC = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    document.title = 'MAXIMA 2021: Laman BPH / Koor - Seleksi Form';
    const accessToken: AccessTokenProps = jwtDecode(
      window.sessionStorage.getItem('accessToken')!,
    );
    const { divisiID } = accessToken;
    const fetchData = async () => {
      try {
        const result = await getAllStudent();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  // const handleSelectLulusChange = (nim_mhs: string, i: number) => (
  //   e: React.ChangeEvent<HTMLSelectElement>,
  // ) => {
  //   console.log(nim_mhs, +(e.target.value === 'true'));
  //   const newData = [...data];
  //   newData[i] = {
  //     ...newData[i],
  //     lulus: +(e.target.value === 'true'),
  //   };
  //   setData([...newData]);
  // };

  const handleInterviewDateChange = (nim_mhs: string) => (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    console.log(nim_mhs, e.target.value);
  };

  return (
    <>
      <Container maxW="4xl">
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
            {/* {data.map((d, i) => (
              <Tr key={d.nim_mhs}>
                <Td>
                  {d.name} ({d.nim_mhs})
                </Td>
                <Td>{d.divisi}</Td>
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
                    defaultValue={d.lulus.toString()}
                    onChange={handleSelectLulusChange(d.nim_mhs, i)}
                  >
                    <option value="false">Tidak</option>
                    <option value="true">Ya</option>
                  </Select>
                </Td>
                <Td>
                  <Select
                    defaultValue="option1"
                    onChange={handleInterviewDateChange(d.nim_mhs)}
                    disabled={!d.lulus}
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
            ))} */}
          </Tbody>
        </Table>
      </Container>
    </>
  );
};

export default RegistrationList;
