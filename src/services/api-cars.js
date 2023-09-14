import axios from 'axios';

axios.defaults.baseURL = 'https://6499c72379fbe9bcf83ff66b.mockapi.io';

export const getAllCars = async (page = 1, limit = 8) => {
  try {
    const { data } = await axios(`/cars?page=${page}&limit=${limit}`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
