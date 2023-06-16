import { useCallback, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { CreateChatroom } from "../api/CreateChatroom";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import {
  Chatroom,
  GetChatrooms,
  GetChatroomsResponse,
} from "../api/GetChatrooms";

export const ChatroomsPage = () => {
  const [chatrooms, setChantrooms] = useState<Chatroom[]>([]);
  const [chatroomName, setChantroomName] = useState("");
  const navigate = useNavigate();

  const handleGetChatrooms = useCallback(async () => {
    const chatroomsResult: GetChatroomsResponse = await GetChatrooms();
    setChantrooms(chatroomsResult.data);
  }, []);

  useEffect(() => {
    (async () => {
      await handleGetChatrooms();
    })();
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!chatroomName) return;
    await CreateChatroom({ title: chatroomName });
    await handleGetChatrooms();
    setChantroomName("");
    console.log("created");
  };

  const handleChangeChatroomName = (event: any) => {
    setChantroomName(event.target.value);
  };

  return (
    <>
      <h1>Chantrooms</h1>
      <Grid container>
        <Grid sm={1} />
        <Grid lg={8} sm={8} spacing={10}>
          <h1>Create New Chantroom</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={handleChangeChatroomName}
              label="Chatroom Name"
              fullWidth
              margin="normal"
              placeholder=""
              value={chatroomName}
            />
            <Button variant="contained" color="primary" type="submit">
              create
            </Button>
          </form>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 5 }}>
        <Grid sm={1} />
        <Grid lg={8} sm={8} spacing={10}>
          <h1>Existing Chantrooms</h1>
          {chatrooms.length
            ? chatrooms.map((chatroom) => (
                <Typography variant="h5" gutterBottom>
                  <div onClick={() => navigate(`/chatrooms/${chatroom._id}`)}>
                    {chatroom.title}
                  </div>
                </Typography>
              ))
            : null}
        </Grid>
      </Grid>
    </>
  );
};
