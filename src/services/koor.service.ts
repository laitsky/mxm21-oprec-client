import axios from 'axios';
import {
  InterviewDateProps,
  KoorLogin,
  LulusInterviewProps,
  RequestTokenData,
  SeleksiFormProps,
  SignUpData,
} from '../types';

const token = window.sessionStorage.getItem('accessToken');
const config = {
  headers: {
    Bearer: token,
  },
};

const BASE_URL = 'http://lumiere.my.id/api/koor';

export const requestToken = async (
  requestTokenData: RequestTokenData,
) => {
  const request = await axios.post(
    `${BASE_URL}/signup`,
    requestTokenData,
  );
  return request.data;
};

export const signUp = async (signUpData: SignUpData) => {
  const request = await axios.post(
    `${BASE_URL}/reset_pass`,
    signUpData,
  );
  return request.data;
};

export const koorLogin = async (koorLogin: KoorLogin) => {
  const request = await axios.post(`${BASE_URL}/signin`, koorLogin);

  return request.data;
};

export const getAllStudent = async () => {
  const request = await axios.get(
    `${BASE_URL}/mahasiswa_all`, config
  );
  return request.data;
};

export const getStudentByDivision = async (divisiID: string) => {
  const request = await axios.post(
    `${BASE_URL}/mahasiswa_divisi`,
    {
      divisiID,
    },
    config,
  );
  return request.data;
};

export const updateInterviewDate = async (
  interviewDateProps: InterviewDateProps,
) => {
  const request = await axios.post(
    `${BASE_URL}/tanggal_interview`,
    interviewDateProps,
    config,
  );
  return request.data;
};

export const updateLulusForm = async (
  seleksiForm: SeleksiFormProps,
) => {
  const request = await axios.post(
    `${BASE_URL}/seleksi_form`,
    seleksiForm,
    config,
  );
  return request.data;
};

export const updateLulusInterview = async (
  lulusInterview: LulusInterviewProps,
) => {
  const request = await axios.post(
    `${BASE_URL}/hasil_interview`,
    lulusInterview,
    config,
  );
  return request.data;
};
