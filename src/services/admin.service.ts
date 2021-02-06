import axios from 'axios';

const BASE_URL = 'https://secure.lumiere.my.id/api/admin';

const token = window.sessionStorage.getItem('accessToken');
const config = {
  headers: {
    Bearer: token,
  },
};

interface ToggleProps {
  nim_koor: number;
  toggle: number;
}
export const toggleKoorRoutes = async (toggleProps: ToggleProps) => {
  const request = await axios.post(
    `${BASE_URL}/toggle_koor`,
    toggleProps,
    config,
  );
  return request.data;
};
