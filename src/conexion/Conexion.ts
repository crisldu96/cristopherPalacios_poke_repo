import axios from 'axios';

export const getAxiosRequest = async (urlApi: string): Promise<any> => {
  try {
    const response: any = await axios.get(urlApi).catch(err => {
      if (err.response) {
        throw err;
      }
    });
    const resp = response.data;
    return resp;
  } catch (err: any) {
    return await Promise.reject((err.message && err) || 'Existe un error con la API');
  }
};
