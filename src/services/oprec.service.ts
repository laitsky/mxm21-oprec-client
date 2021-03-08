import axios from 'axios';
import { AbsenProps } from '../types';

const BASE_URL = 'https://lumiere.my.id';

export const studentVerify = async (
  nim_mhs: unknown | number | string,
) => {
  const request = await axios.post(`${BASE_URL}/api/mhs/verify`, {
    nim_mhs,
  });
  return request.data;
};

export const studentSignUp = async (signUpData: unknown) => {
  const request = await axios.post(
    `${BASE_URL}/api/mhs/signup`,
    signUpData,
  );
  return request.data;
};

export const generateTempPDF = async (studentData: unknown) => {
  const request = await axios.post(
    `${BASE_URL}/api/mhs/pdf_temp`,
    studentData,
  );
  return request.data;
};

export const getPDF = async (data: unknown) => {
  const request = await axios.post(
    `${BASE_URL}/api/mhs/pdf_download`,
    data,
  );
  return request.data;
};

export const checkStudentStats = async (nim_mhs: number) => {
  const request = await axios.post(`${BASE_URL}/api/mhs/status`, {
    nim_mhs,
  });
  return request.data;
};

export const absenSeleksi = async (data: AbsenProps) => {
  const request = await axios.post(
    `${BASE_URL}/api/mhs/zoom_link`,
    data,
  );
  return request.data;
};
