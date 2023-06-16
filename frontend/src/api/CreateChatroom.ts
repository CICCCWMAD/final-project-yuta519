import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

interface Props {
  title: string;
}

export interface LoginResponse {
  data:{
    status: number;
    message: string;
    isLogin: boolean;
    jwt?: string;
  }
}

export const CreateChatroom = async (
  { title }: Props
): Promise<LoginResponse> => {
  try {
    return await client.post('/api/chatrooms', {title});
  } catch (error) {
    throw error;
  }
};
