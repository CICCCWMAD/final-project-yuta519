import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import CssBaseline from "@mui/material/CssBaseline";

import { FetchPokemons } from "../api/PokemonApi";

const Quiz = () => {
  const [state, update] = useState({});
  // const params = useParams();
  // console.log(params);

  useEffect(() => {
    (async () => {
      update(await FetchPokemons());
    })();
  }, []);

  console.log(state);

  return (
    <>
      <h1>quiz</h1>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={3}>xs=4</Grid>
          <Grid xs={3}>xs=4</Grid>
          <Grid xs={3}>xs=4</Grid>
          <Grid xs={3}>xs=4</Grid>
          <Grid xs={3}>xs=4</Grid>
          <Grid xs={3}>xs=4</Grid>
          <Grid xs={3}>xs=8</Grid>
          <Grid xs={3}>xs=8</Grid>
          <Grid xs={3}>xs=8</Grid>
        </Grid>
      </Box>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
};

const StyledBox = styled(Box)`
  margin: 100px;
`;

export default Quiz;
