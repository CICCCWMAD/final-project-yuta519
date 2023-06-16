import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

interface Props {
  message: string;
  chatroomId: string;
  userId: string;
  userEmail: string;
  userName: string;

}

export interface LoginResponse {
  data:{
    status: number;
    message: string;
    isLogin: boolean;
    jwt?: string;
  }
}

export const CreateChat = async (
  { message, chatroomId, userId, userEmail, userName,
}: Props
): Promise<LoginResponse> => {
  try {
    return await client.post(
      '/api/chats',
      {
        message,
        chatroomId,
        userId,
        userEmail,
        userName,
      }
    );
  } catch (error) {
    throw error;
  }
};
