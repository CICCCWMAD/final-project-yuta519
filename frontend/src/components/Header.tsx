import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Link from "@mui/material/Link";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar>
          <Toolbar>
            <Link href="/" color="inherit" underline="none">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Final Project
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
};

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fffafa",
    },
  },
});

export default Header;
