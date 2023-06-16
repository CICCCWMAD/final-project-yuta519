import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Backdrop from "@mui/material/Backdrop";
import { Box, CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { SearchBar } from "../components/SearchBar";
import { FetchPokemons } from "../api/PokemonApi";
import { FetchPokemonListResponse } from "../types/PokemonTypes";

const Pokemons = () => {
  const [state, update] = useState<FetchPokemonListResponse>({
    page: 1,
    limit: 90,
    count: 0,
    pokemons: [],
  });
  const [searchQuery, setQuery] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleChangePage = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const target = event.target as HTMLElement;
    update(await FetchPokemons(Number(target.innerText)));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const allPokemons = await FetchPokemons(1, 2000);
    const filteredPokemons = allPokemons.pokemons.filter(
      (pokemon) => pokemon.name.indexOf(searchQuery) >= 0
    );
    update((prev) => {
      return {
        ...prev,
        count: filteredPokemons.length,
        pokemons: filteredPokemons,
      };
    });
    setLoading(false);
    if (!searchQuery.length) update(await FetchPokemons());
  };

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    (async () => {
      update(await FetchPokemons());
    })();
  }, []);

  return (
    <>
      <StyledContainer>
        <h1>POKéMON</h1>
        <h2>{state.count}</h2>
        <SearchBar
          onChange={setQuery}
          placeholder=""
          value={searchQuery}
          onSubmit={handleSubmit}
        />
      </StyledContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={{ xs: 1, sm: 3, md: 12 }}>
          {state.pokemons.map((pokemonInfo) => {
            return (
              <Grid key={pokemonInfo.id} xs={1} sm={1} md={2}>
                <Card sx={{ minWidth: 275 }}>
                  <CardActionArea>
                    <Link
                      href={`/works/pokemon/${pokemonInfo.id}`}
                      color="inherit"
                      underline="none"
                    >
                      <CardContent>
                        <CardMedia
                          sx={{ height: 300 }}
                          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonInfo.id}.png`}
                          title={pokemonInfo.name}
                        />
                        <Typography variant="h5" component="div">
                          {pokemonInfo.name}
                        </Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" onClick={handleOpenModal}>
                      SHARE
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <StyledPagination
        count={Math.ceil(state.count / state.limit)}
        defaultPage={state.page}
        onClick={handleChangePage}
      />
      <Modal
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button size="small" onClick={handleCloseModal}>
            Close
          </Button>
        </Box>
      </Modal>
      <Backdrop open={isLoading}>
        <StyledCircularProgress />
      </Backdrop>
    </>
  );
};

const StyledContainer = styled.div`
  text-align: center;
`;

const StyledPagination = styled(Pagination)`
  margin: 30px;
  display: flex;
  justify-content: center;
`;

const StyledCircularProgress = styled(CircularProgress)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Pokemons;
