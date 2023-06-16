import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});


export interface Chatroom {
  _id: string;
  title: string;
}

export interface GetChatroomsResponse {
  data: Chatroom[]
}

export const GetChatrooms = async () => {
  try {
    return await client.get('/api/chatrooms');
  } catch (error) {
    throw error;
  }
};
