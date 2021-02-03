import axios from 'axios';
import { KoorLogin, RequestTokenData, SignUpData } from '../types';

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
