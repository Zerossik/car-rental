import axios from 'axios';

axios.defaults.baseURL = 'https://6499c72379fbe9bcf83ff66b.mockapi.io';

export const getAllCars = async (page = 1, limit = 8) => {
  try {
    const { data } = await axios(`/adverts?page=${page}&limit=${limit}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAdvert = async (id, data) => {
  try {
    return await axios.put(`/adverts/${id}`, data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAdvertById = async id => {
  try {
    return await axios(`/adverts/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};
