import {
  Box,
  Container,
  Table,
  Th,
  Thead,
  Tr,
  Tbody,
  Td,
  Input,
} from '@chakra-ui/react';
import jwtDecode from 'jwt-decode';
import * as React from 'react';
import { KoorNavbar } from '../../../shared/components';
import {
  AccessTokenProps,
  Divisi,
  SeleksiTerbukaProps,
} from '../../../types';
import { getStudentQueue } from '../../../utils/getStudentQueue';

const SeleksiTerbuka: React.FC = () => {
  const [data, setData] = React.useState<SeleksiTerbukaProps[]>([]);
  const [keyword, setKeyword] = React.useState('');

  const accessToken: AccessTokenProps = jwtDecode(
    window.sessionStorage.getItem('accessToken')!,
  );
  const { divisiID, nim_koor } = accessToken;

  React.useEffect(() => {
    document.title =
      'MAXIMA 2021: Laman BPH / Koor - Daftar Antrian Seleksi Terbuka';

    const fetchData = async () => {
      setData(await getStudentQueue(nim_koor, divisiID));
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  const divisionsFilter = keyword
    ? data.filter((d) =>
        d.divisi.name
          .toLowerCase()
          .includes(keyword.trim().toLowerCase()),
      )
    : data;

  const showDivisionSearch = () => {
    if (divisiID === Divisi.SuperAdmin || divisiID === Divisi.BPH) {
      return (
        <Input
          mb={4}
          placeholder="Cari divisi"
          value={keyword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setKeyword(e.target.value)
          }
        />
      );
    }
  };

  return (
    <Box mb={6}>
      <KoorNavbar />
      <Container maxW="6xl" mt={12}>
        {showDivisionSearch()}
        <Table
          variant="simple"
          fontFamily="DM Sans"
          letterSpacing={-0.4}
        >
          <Thead>
            <Tr>
              <Th>no urut</Th>
              <Th>nama</Th>
              <Th>divisi</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              divisionsFilter.map((d) => (
                <Tr key={d.nim_mhs}>
                  <Td>
                    <strong>#{d.no_urut}</strong>
                  </Td>
                  <Td>{d.mahasiswa.name}</Td>
                  <Td>{d.divisi.name}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Container>
    </Box>
  );
};

export default SeleksiTerbuka;
