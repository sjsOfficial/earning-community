import axios from 'axios';

const BASE_URL = '/apis';

export const getUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user/details`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};