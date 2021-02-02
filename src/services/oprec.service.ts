import axios from 'axios';

const BASE_URL = 'http://lumiere.my.id';

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
