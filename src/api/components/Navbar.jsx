import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { NavListDrawer } from "./NavListDrawer";
import { useState } from "react";
import { Menu, SearchOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const Navbar = ({ navLinks, authLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
            edge="start"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6">SuperPets</Typography>

          <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}>
            {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" }}}>
            <Search>
              <SearchIconWrapper>
                <SearchOutlined />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {authLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left" //Indicando el lado de la pantalla donde va a aparecer
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer
          navLinks={navLinks}
          NavLink={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
};
