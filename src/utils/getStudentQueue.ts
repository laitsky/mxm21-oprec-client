import Swal from 'sweetalert2';
import {
  getAllQueue,
  getDivisionQueue,
} from '../services/koor.service';
import { Divisi } from '../types';

export const getStudentQueue = async (
  nim_koor: number,
  divisiID: Divisi,
) => {
  if (divisiID === Divisi.SuperAdmin || divisiID === Divisi.BPH) {
    try {
      const result = await getAllQueue(nim_koor!);
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
      const result = await getDivisionQueue(divisiID!);
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
