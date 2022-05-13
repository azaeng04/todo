import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const httpRequest = async (options: AxiosRequestConfig) => {
  let response: AxiosResponse<unknown, any> = null;
  try {
    response = await axios.request(options);
  } catch (error) {
    const { response: errResponse } = error as AxiosError;
    response = errResponse;
  }
  return response;
};
