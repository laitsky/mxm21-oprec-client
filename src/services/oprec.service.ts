import axios from 'axios';

const BASE_URL = 'http://lumiere.my.id';

export const studentVerify = async (
  nim: unknown | number | string,
) => {
  const request = await axios.post(`${BASE_URL}/api/mhs/verify`, {
    nim_mhs: nim,
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
