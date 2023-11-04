import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import BiotechIcon from "@mui/icons-material/Biotech";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";
import iconImg from "./catalystlogo.png";

const pages = ["Log In", "Sign Up"];

function NavBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    if (event.currentTarget.role != null) {
      navigate("/" + event.currentTarget.role);
    }
  };

  const GetStartedText = styled(Typography)`
    && {
      display: flex;
      justify-content: center;
      color: white;
      font-weight: 500;
    }
  `;

  // const SignupButtonTop = styled(Button)`
  //   && {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     background:transparent;
  //     &:hover, &:focus {
  //       background: linear-gradient(
  //         to right,
  //         #b200ff,
  //         #a300ea,
  //         #9500d5,
  //         #8600c0,
  //         #7800ac
  //       );
  //     }
  //   }
  // `;

  const SignupButtonTop = styled(Button)`
    && {
      background-color: transparent;
      border: 2px solid;
      cursor: pointer;
      box-shadow: inset 0 0 0 0 #5383ec;
      -webkit-transition: ease-out 0.4s;
      -moz-transition: ease-out 0.4s;
      transition: ease-out 0.4s;
      &:hover {
        box-shadow: inset 400px 0 0 0 #5383ec;
      }
    }
  `;

  const LoginButtonTop = styled(Button)`
    && {
      background-color: transparent;
      cursor: pointer;
      box-shadow: inset 0 0 0 0 #5383ec;
      -webkit-transition: ease-out 0.4s;
      -moz-transition: ease-out 0.4s;
      transition: ease-out 0.4s;
      &:hover {
        box-shadow: inset 400px 0 0 0 #5383ec;
      }
    }
  `;

  return (
    <AppBar
      key="navout-1"
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Grid
        key="navout-2"
        item
        xs={11}
        sx={{ margin: "1.5rem 2rem 1rem 2rem", padding: "0 1rem 0 1rem" }}
      >
        <Toolbar disableGutters key="navout-3">
          <div
            key="navout-4"
            style={{ display: "flex", flexGrow: 1, alignItems: "center" }}
          >
            {isSmallScreen ? null : ( // Hide the image on extra-small screens
              <img
                key="navout-5"
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
              key="navout-6"
              variant="h4"
              noWrap
              component="a"
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
                key="navout-7"
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
          </div>
          <Box
            key="navout-8"
            sx={{ display: { xs: "none", md: "flex" }, gap: "2rem" }}
          >
            <LoginButtonTop
              key="navout-9"
              variant="contained"
              onClick={() => {
                navigate("/login");
              }}
            >
              <GetStartedText variant="h6" key="navout-10">
                Log In
              </GetStartedText>
            </LoginButtonTop>
            <SignupButtonTop
              key="navout-11"
              variant="contained"
              onClick={() => {
                navigate("/signup");
              }}
            >
              <GetStartedText key="navout-12" variant="h6">
                Sign Up
              </GetStartedText>
            </SignupButtonTop>
          </Box>
          <Box
            key="navout-13"
            sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              key="navout-14"
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              key="navout-15"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  role={page.replaceAll(" ", "").toLowerCase()}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Grid>
    </AppBar>
  );
}
export default NavBar;
