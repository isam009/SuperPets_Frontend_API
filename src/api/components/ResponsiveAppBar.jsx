import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AccountCircle, PetsOutlined, ShoppingCart } from "@mui/icons-material";
import {
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

function ResponsiveAppBar({ navLinks, authLinks }) {
  const [open, setOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PetsOutlined sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            /*             component={NavLink}
            to={navLinks.path} */
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SuperPets
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              open={open}
              anchor="left" //Indicando el lado de la pantalla donde va a aparecer
              onClose={() => setOpen(false)}
              /* sx={{ display: { xs: "flex", md: "none" } }} */
            >
              {/* Menu dispositivos moviles responsivo */}
              <Box sx={{ width: 250 }}>
                <nav>
                  <List>
                    {navLinks.map((item) => (
                      <ListItem key={item.title} disablePadding>
                        <ListItemButton
                          component={NavLink}
                          to={item.path}
                          onClick={() => setOpen(false)}
                        >
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText>{item.title}</ListItemText>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </nav>
              </Box>
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Drawer>
            {/* Logo responsivo */}
          </Box>
          <PetsOutlined sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            /* component="a"
            href="" */
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SuperPets
          </Typography>
          {/* Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navLinks.map((item) => (
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                key={item.title}
                component={NavLink}
                onClick={handleCloseNavMenu}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => setOpen(true)}
            >
              Categorias
            </Button>
          </Box>
          <IconButton
            aria-label="cart"
            sx={{ mr: 2, color: "white", display: "block" }}
          >
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart color="inherit" />
            </Badge>
          </IconButton>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>
                  <AccountCircle sx={{ color: "inherit" }} />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* Menu Profile */}
              {authLinks.map((item) => (
                <MenuItem
                  color="inherit"
                  key={item.title}
                  component={NavLink}
                  to={item.path}
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">{item.title}</Typography>
                </MenuItem>
              ))}
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
