import axios from 'axios';

axios.defaults.baseURL = 'https://6499c72379fbe9bcf83ff66b.mockapi.io';

export const getAllCars = async () => {
  try {
    const { data } = await axios('/cars');

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
