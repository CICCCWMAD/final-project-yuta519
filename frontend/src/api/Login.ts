import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

interface Props {
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  data:{
    status: number;
    message: string;
    isLogin: boolean;
    jwt?: string;
    user?: User;
  }
}

export const Login = async (
  { email, password }: Props
): Promise<LoginResponse> => {
  try {
    return await client.post('/api/auth/login', {email, password});
  } catch (error) {
    throw error;
  }
};
