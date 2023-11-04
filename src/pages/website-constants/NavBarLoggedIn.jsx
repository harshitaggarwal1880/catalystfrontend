import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/icons-material/Person2";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import BiotechIcon from "@mui/icons-material/Biotech";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import iconImg from "./catalystlogo.png";
import Image from "mui-image";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "./Theme";
import Cookies from 'js-cookie';

const pages = [
  { label: "Courses", path: "/courses" },
  { label: "Biotechnology", path: "/biotechnology" },
  { label: "Engineering", path: "/engineering" },
];

const MenuButton = styled(Button)`
  && {
    background-color: transparent;
    ${"" /* border: 2px solid; */}
    cursor: pointer;
    font-size: 110%;
    box-shadow: inset 0 0 0 0 #5383ec;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
    &:hover {
      box-shadow: inset 400px 0 0 0 #5383ec;
    }
  }
`;

const ButtonText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    color: white;
    font-weight: 500;
    font-size: 100%;
  }
`;

function NavBar(props) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("/api/auth/clear", {
      //   withCredentials: true,
      //   credentials: "include",
      // });
      const res = await axios.post("/api/auth/clear", {
        withCredentials: true,
      });

      if (res.data) {
        // window.location.reload();
        navigate("/login")        
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppBar
      key="navin-1"
      position="static"
      sx={{ background: "transparent", boxShadow: "none", padding: "1rem" }}
    >
      <Container key="navin-2" maxWidth="xxl">
        <Toolbar disableGutters key="navin-3">
          {/* Hamburger Menu Icon (centered on XS breakpoint) */}
          <Box
            key="navin-4"
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Tooltip title="Open Menu" key="navin-5">
              <IconButton key="navin-6" onClick={toggleDrawer} sx={{ p: 0 }}>
                <MenuIcon key="navin-7" sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>

          {isSmallScreen ? null : ( // Hide the image on extra-small screens
            <img
              key="navin-8"
              src={iconImg}
              alt="Catalyst Logo"
              style={{
                width: "4rem",
                marginRight: "0.2rem", // Default styling
              }}
            />
          )}
          {/* </Container> */}
          <Typography
            key="navin-9"
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "avenir",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer"
            }}
            onClick={() => {
              navigate("/")
            }}
          >
            P
            <span
              key="navin-10"
              style={{
                fontSize: "1.5rem",
                alignSelf: "flex-end",
                margin: "0rem 0.5rem 0.15rem 0.15rem",
              }}
            >
              ROJECT
            </span>
            C
            <span
              style={{
                fontSize: "1.5rem",
                alignSelf: "flex-end",
                margin: "0rem 0.5rem 0.15rem 0.15rem",
              }}
            >
              ATALYST
            </span>
          </Typography>
          {/* User settings (right corner on XS breakpoint) */}
          <Box
            key="navin-11"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              paddingLeft: "1rem",
            }}
          >
            {pages.map((page) => (
              <MenuButton
                key={page.label}
                onClick={() => navigate(page.path)}
                sx={{ color: "white", display: "block", marginRight: "1rem" }}
                variant="h4"
              >
                <ButtonText key="navin-12">{page.label}</ButtonText>
              </MenuButton>
            ))}
          </Box>

          <Box key="navin-13" sx={{ flexGrow: 0 }}>
            <Tooltip key="navin-14" title="Open settings">
              <IconButton
                key="navin-15"
                onClick={handleOpenUserMenu}
                sx={{ p: 0, padding: "10px", border: "1px solid grey" }}
              >
                <Avatar key="navin-16" sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Menu
              key="navin-17"
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="navin-18" onClick={handleLogOut}>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer for XS breakpoint */}
      <Drawer
        key="navin-19"
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <List key="navin-20">
          {pages.map((page) => (
            <ListItem
              // button
              key={page.label}
              onClick={() => {
                toggleDrawer();
                navigate(page.path);
              }}
            >
              <ListItemText primary={page.label} key="navin-21" />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default NavBar;
