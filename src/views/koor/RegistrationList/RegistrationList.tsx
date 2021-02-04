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
import { AccessTokenProps, Divisi, Pendaftar } from '../../../types';
import {
  getAllStudent,
  getStudentByDivision,
} from '../../../services/koor.service';
import { getStudentData } from '../../../utils/getStudentData';

const RegistrationList: React.FC = () => {
  const [data, setData] = React.useState<Pendaftar[]>([]);

  React.useEffect(() => {
    document.title = 'MAXIMA 2021: Laman BPH / Koor - Seleksi Form';
    const accessToken: AccessTokenProps = jwtDecode(
      window.sessionStorage.getItem('accessToken')!,
    );
    const { divisiID, nim_koor } = accessToken;
    const fetchData = async () => {
      setData(await getStudentData(nim_koor, divisiID));
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    console.log('test', data);
  }, [data]);

  const handleSelectLulusChange = (nim_mhs: string, i: number) => (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    console.log(nim_mhs, +(e.target.value === 'true'));
    const newData = [...data];
    newData[i] = {
      ...newData[i],
      lulusSeleksiForm: +(e.target.value === 'true'),
    };
    setData([...newData]);
  };

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
    </>
  );
};

export default RegistrationList;
