import Swal from 'sweetalert2';
import {
  getAllStudent,
  getStudentByDivision,
} from '../services/koor.service';
import { Divisi } from '../types';

export const getStudentData = async (
  nim_koor: number,
  divisiID: Divisi,
) => {
  if (divisiID === Divisi.SuperAdmin || divisiID === Divisi.BPH) {
    try {
      const result = await getAllStudent(nim_koor!);
      return result;
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
      const result = await getStudentByDivision(divisiID!);
      return result;
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
