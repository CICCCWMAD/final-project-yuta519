import { AxiosInstance, AxiosResponse } from "axios";

export const GetApi = async (client: AxiosInstance, path: string) => {
  try {
    const response: AxiosResponse = await client.get(path);
    return response.data;
  } catch (error) {
    throw error;
  }
};
