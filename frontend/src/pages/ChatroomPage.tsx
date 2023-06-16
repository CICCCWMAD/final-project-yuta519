import { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import {
  GetChatsByChatroomId,
  GetChatsResponse,
  Chat,
} from "../api/GetChatsByChatroomId";
import { CreateChat } from "../api/CreateChat";
import { GetChatroomById, Chatroom } from "../api/GetChatroomById";
import { AuthContext } from "../context/AuthContext";

export const ChatroomPage = () => {
  const [authuser, _] = useContext(AuthContext);
  const [chats, setChats] = useState<Chat[]>([]);
  const [chatroom, setChatroom] = useState<Chatroom>();
  const [message, setMessage] = useState("");
  const { chatroomId } = useParams();
  useEffect(() => {
    (async () => {
      loadMessages();
      if (!chatroomId) return;
      const chatroom = await GetChatroomById(chatroomId);
      setChatroom(chatroom.data);
    })();
  }, []);

  const loadMessages = useCallback(async () => {
    if (!chatroomId) return;
    const chatroomsResult: GetChatsResponse = await GetChatsByChatroomId(
      chatroomId
    );
    setChats(chatroomsResult.data);
  }, [chats]);

  const handleChangeMessage = (event: any) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!message.length || !chatroomId) return;
    await CreateChat({
      message,
      chatroomId,
      userId: authuser.id,
      userEmail: authuser.email,
      userName: authuser.name,
    });
    await loadMessages();
    setMessage("");
  };

  return (
    <>
      <Grid container>
        <Grid sm={1} />
        <Grid lg={8} sm={8} spacing={10}>
          <h1>{chatroom?.title}</h1>
          {chats.length
            ? chats.map((chat) => (
                <>
                  <Typography sx={{ mt: 5 }} variant="body1" gutterBottom>
                    {chat.user.name} {chat.post_at}
                  </Typography>
                  <Typography variant="h5"> {chat.message}</Typography>
                </>
              ))
            : null}
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 20 }}>
        <Grid sm={1} />
        <Grid lg={8} sm={8} spacing={10}>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={handleChangeMessage}
              label="Message"
              fullWidth
              margin="normal"
              placeholder=""
              value={message}
            />
            <Button variant="contained" color="primary" type="submit">
              create
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};
