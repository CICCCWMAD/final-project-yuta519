import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";

const Works = () => {
  return (
    <>
      <h1>Anime & Movie Works</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <Card sx={{ minWidth: 275 }}>
              <CardActionArea>
                <Link href="/works/pokemon/" color="inherit" underline="none">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      pokemon
                    </Typography>
                    <CardMedia
                      sx={{ height: 200 }}
                      // image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`}
                      image={`https://zukan.pokemon.co.jp/img/ball.svg`}
                    />
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card sx={{ minWidth: 275 }}>
              <CardActionArea>
                <Link href="/" color="inherit" underline="none">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      STAR WARS (preparing...)
                    </Typography>
                    <CardMedia
                      sx={{ height: 200 }}
                      image={`https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg`}
                    />
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Works;
