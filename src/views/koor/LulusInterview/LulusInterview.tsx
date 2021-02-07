import * as React from 'react';
import {
  useToast,
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
  Input,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import jwtDecode from 'jwt-decode';
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
  downloadStudentPDF,
  updateInterviewDate,
  updateLulusForm,
  updateLulusInterview,
} from '../../../services/koor.service';
import { KoorNavbar } from '../../../shared/components';

const LulusInterview: React.FC = () => {
  const [data, setData] = React.useState<Pendaftar[]>([]);
  const [keyword, setKeyword] = React.useState('');
  const toast = useToast();
  const accessToken: AccessTokenProps = jwtDecode(
    window.sessionStorage.getItem('accessToken')!,
  );
  const { divisiID, nim_koor } = accessToken;

  React.useEffect(() => {
    document.title =
      'MAXIMA 2021: Laman BPH / Koor - Kelulusan Interview';

    const fetchData = async () => {
      let result: Pendaftar[] = await getStudentData(
        nim_koor,
        divisiID,
      );
      result = result.filter((d) => d.lulusSeleksiForm);
      setData(result);
    };
    fetchData();
  }, []);

  const handleLulusInterviewChange = (nim_mhs: string, i: number) => async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lulusInterview: LulusInterviewProps = {
      nim_koor: nim_koor.toString(),
      nim_mhs,
      lulusInterview: +(e.target.value === 'true')
    };

    try {
      await updateLulusInterview(lulusInterview);
      toast({
        position: 'bottom-right',
        title: 'Perubahan berhasil.',
        description: `Berhasil mengganti status kelulusan interview form milik ${nim_mhs}`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        position: 'bottom-right',
        title: 'Ada masalah!',
        description: `${error.response.data.message} (NIM: ${nim_mhs})`,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }

    const newData = [...data];
    newData[i] = {
      ...newData[i],
      lulusInterview: +(e.target.value === 'true')
    };
    setData([...newData]);
  }
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
              <Th>nama</Th>
              <Th>divisi</Th>
              <Th>formulir</Th>
              <Th>Lulus interview? (coming soon)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              divisionsFilter.map((d, i) => (
                <Tr key={d.nim_mhs}>
                  <Td>
                    <strong>
                      {d.name} ({d.nim_mhs})
                    </strong>
                  </Td>
                  <Td>{d.divisi.name}</Td>
                  <Td>
                    <Button
                      leftIcon={<DownloadIcon />}
                      colorScheme="teal"
                      onClick={async () => {
                        const result = await downloadStudentPDF(
                          d.nim_mhs,
                        );
                        window.open(result.message);
                      }}
                    >
                      <Text fontSize="xs">Lihat Formulir</Text>
                    </Button>
                  </Td>
                  <Td>
                    <Select
                      defaultValue={d.lulusInterview.toString()}
                      onChange={handleLulusInterviewChange(d.nim_mhs.toString(), i)}
                    >
                      <option value="false">Tidak</option>
                      <option value="true">Ya</option>
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

export default LulusInterview;
