import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import { FetchPokemonById } from "../api/PokemonApi";
import { Pokemon } from "../types/PokemonTypes";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, update] = useState<Pokemon>({
    id: "",
    name: "",
    baseExperience: 0,
    height: 0,
    weight: 0,
    pokemonStat: {
      hp: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefens: 0,
      speed: 0,
    },
    types: [],
    moves: [],
    pokemonTexts: [],
  });

  useEffect(() => {
    (async () => {
      if (id) update(await FetchPokemonById(id));
    })();
  }, []);

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  return (
    <>
      <h1>{pokemon.name}</h1>
      <Grid container spacing={2} columns={{ xs: 3, sm: 6, md: 12 }}>
        <Grid
          key={pokemon.id}
          sx={{ display: "flex" }}
          xs={6}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {pokemon.id ? (
            <div>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width="300"
                height="300"
                alt={pokemon.name}
              />
            </div>
          ) : null}
        </Grid>
        <Grid xs={6}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              outerRadius={90}
              data={[
                {
                  subject: "HP",
                  pokemon: pokemon.pokemonStat.hp,
                  fullMark: 200,
                },
                {
                  subject: "Attack",
                  pokemon: pokemon.pokemonStat.attack,
                  fullMark: 200,
                },
                {
                  subject: "Defense",
                  pokemon: pokemon.pokemonStat.defense,
                  fullMark: 200,
                },
                {
                  subject: "Special Attack",
                  pokemon: pokemon.pokemonStat.specialAttack,
                  fullMark: 200,
                },
                {
                  subject: "Special Defense",
                  pokemon: pokemon.pokemonStat.specialDefens,
                  fullMark: 200,
                },
                {
                  subject: "Speed",
                  pokemon: pokemon.pokemonStat.speed,
                  fullMark: 200,
                },
              ]}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 200]} />
              <Radar
                name={pokemon.name}
                dataKey="pokemon"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Grid>
        <Grid xs={12}>
          <Typography>
            {`${pokemon.pokemonTexts[0]?.text} (From version of ${pokemon.pokemonTexts[0]?.version})`}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <Toolbar
              sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
              }}
            >
              <Typography
                sx={{ flex: "1 1 100%" }}
                variant="h6"
                id="tableTitle"
                component="div"
              >
                Base
              </Typography>
            </Toolbar>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Height</TableCell>
                    <TableCell align="center">
                      {pokemon.height * 10} cm
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Weight</TableCell>
                    <TableCell align="center">
                      {pokemon.weight * 0.1} kg
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Abilities</TableCell>
                    <TableCell>
                      <Stack spacing={1} alignItems="center">
                        <Stack direction="row" spacing={1}>
                          {pokemon.types.map((type) => (
                            <Chip label={type} color="success" />
                          ))}
                        </Stack>
                      </Stack>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid xs={6}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <Toolbar
              sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
              }}
            >
              <Typography
                sx={{ flex: "1 1 100%" }}
                variant="h6"
                id="tableTitle"
                component="div"
              >
                Pokemon Stat
              </Typography>
            </Toolbar>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>HP</TableCell>
                    <TableCell>{pokemon.pokemonStat.hp}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Attack</TableCell>
                    <TableCell>{pokemon.pokemonStat.attack}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Defense</TableCell>
                    <TableCell>{pokemon.pokemonStat.defense}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Special Attack</TableCell>
                    <TableCell>{pokemon.pokemonStat.specialAttack}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Special Defense</TableCell>
                    <TableCell>{pokemon.pokemonStat.specialDefens}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Speed</TableCell>
                    <TableCell>{pokemon.pokemonStat.speed}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid xs={12}>
          <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle">
            Available Moves
          </Typography>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              listStyle: "none",
              p: 0.5,
              m: 0,
            }}
            component="ul"
          >
            {pokemon.moves.map((move) => (
              <ListItem>
                <Chip label={move} />
              </ListItem>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default PokemonDetail;
