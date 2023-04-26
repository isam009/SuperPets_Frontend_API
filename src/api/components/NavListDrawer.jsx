import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const NavListDrawer = ({ navLinks, NavLink, setOpen }) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton component={NavLink} to={item.path} onClick={() => setOpen(false)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};
