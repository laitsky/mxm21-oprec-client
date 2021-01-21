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
import { dataPendaftar } from './dummyData';
import { Pendaftar } from '../../../types';

const RegistrationList: React.FC = () => {
  const [data, setData] = React.useState<Pendaftar[]>([]);
  React.useEffect(() => {
    setData(dataPendaftar);
  }, []);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSelectLulusChange = (nim: string, i: number) => (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    console.log(nim, i, e.target.value);
    const newData = [...data];
    newData[i] = { ...newData[i], lulus: e.target.value === 'true' };
    setData([...newData]);
  };

  const handleInterviewDateChange = (nim: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(nim, e.target.value);
  }

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
            {data.map((d, i) => (
              <Tr key={d.nim}>
                <Td>
                  {d.name} ({d.nim})
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
                    onChange={handleSelectLulusChange(d.nim, i)}
                  >
                    <option value="true">Ya</option>
                    <option value="false">Tidak</option>
                  </Select>
                </Td>
                <Td>
                    <Select
                      defaultValue={'option1'}
                      onChange={handleInterviewDateChange(d.nim)}
                      disabled={!d.lulus}
                    >
                      <option value="option1" disabled>
                        Pilih
                      </option>
                      <option value="15 Februari 2021">15 Februari 2021</option>
                      <option value="16 Februari 2021">16 Februari 2021</option>
                      <option value="17 Februari 2021">17 Februari 2021</option>
                      <option value="18 Februari 2021">18 Februari 2021</option>
                      <option value="19 Februari 2021">19 Februari 2021</option>
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
