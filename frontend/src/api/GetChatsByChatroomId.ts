import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});


export interface Chat {
  _id: string;
  message: string;
  post_at: string;
  user: {
    id: string;
    name: string;
    email: string;
  }
}

export interface GetChatsResponse {
  data: Chat[]
}

export const GetChatsByChatroomId = async ( chatroomId: string ) => {
  try {
    return await client.get(`/api/chats?chatroomId=${chatroomId}`);
  } catch (error) {
    throw error;
  }
};
