import React, { useLayoutEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  Divider,
  Grid,
  InputBase,
} from "@mui/material";
import { motion } from "framer-motion";
import theme from "./website-constants/Theme.jsx";
import { FormControl, TextField } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "./website-constants/NavBarLoggedOut.jsx";
import axios from "axios";
import NavBarLogin from "./website-constants/NavBarLoginPage.jsx";

const SplitBoxesGrid = styled(Grid)`
  && {
    display: flex;
    align-items: center;
    font-size: 25px;
    height: 100vh;
    ${
      "" /* background-image: url("https://wallpaperboat.com/wp-content/uploads/2019/10/free-website-background-07.jpg"); */
    }
  }
`;

const LayoutGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 25px;
    height: 100vh;
    padding: 1rem 2rem 1rem 2rem;
  }
`;

const VertStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: left;
  }
`;

const TextFieldStyled = styled(TextField)`
  && {
    margin: 1rem;
    width: 50vw;
    inputcolor: "#A0BFE0";
    border: "1px solid white";
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #7895cb;
    }
    &:hover fieldset {
      border-color: #7895cb;
    }
    &.Mui-focused fieldset {
      border-color: #7895cb;
    }
  }
`;

const ColoredLink = styled(Typography)`
  color: #ffffff;
  cursor: pointer;
  &:visited {
    color: #ffffff;
  }
`;

const LogInButton = styled(Button)`
  && {
    background-color: transparent;
    border: 2px solid;
    width: 7rem;
    margin-left: 1rem;
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

const GetStartedText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    color: white;
    ${"" /* padding: 0.05rem; */}
    font-weight: 500;
    text-transform: none;
  }
`;

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(""); // State to hold login error message

  useLayoutEffect(() => {
    axios   
      .post("/api/auth/authenticate", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        navigate("/courses")
      })
      .catch((err) => {
        console.log("Please login");
      });
  }, []);

  const handleLogInSubmit = async (e) => {
    try {
      e.preventDefault();
      const userData = {
        username: e.target.username.value,
        password: e.target.password.value,
      };
      const checkCondition =
        userData.username !== "" &&
        !userData.username.includes(" ") &&
        userData.password !== "" &&
        !userData.password.includes(" ");
      document
        .querySelectorAll("input")
        .forEach((singleInput) => (singleInput.value = ""));
      if (checkCondition) {
        const loginResponse = await axios.post(
          "/api/auth/login",
          userData,
          {
            withCredentials: true,
            credentials: "include",
          }
        );
        if (loginResponse.data) {
          // window.location.reload();
          navigate("/courses")
        } else {
          setError(
            "Login failed. Please try a different username or password."
          );
        }
      } else {
        setError("Please enter a username and password.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme} key="login-1">
        <NavBarLogin></NavBarLogin>
        <SplitBoxesGrid
          key="login-2"
          container
          divider={<Divider key="login-3" orientation="vertical" flexItem />}
        >
          <LayoutGrid item xs={12} sm={7.5} key="login-4">
            <VertStack key="login-5">
              {/* LOGIN MAIN TEXT */}
              <Typography
                key="login-6"
                variant="h2"
                sx={{
                  textAlign: "left",
                  paddingBottom: "1rem",
                  fontWeight: 700,
                  margin: "1rem",
                  color: "#FFFFFF",
                }}
              >
                Log In
              </Typography>
              <form key="login-7" onSubmit={handleLogInSubmit}>
                <FormControl key="login-8" onSubmit={handleLogInSubmit}>
                  {/* EMAIL TEXT FIELD */}
                  <TextFieldStyled
                    key="login-9"
                    type="text"
                    label="Username"
                    variant="outlined"
                    name="username"
                    // id="username"
                    sx={{
                      input: { color: "#A0BFE0" },
                      label: { color: "#A0BFE0" },
                    }}
                  />

                  {/* PASSWORD TEXT FIELD */}
                  <TextFieldStyled
                    key="login-10"
                    type="password"
                    label="Password"
                    color="primary"
                    variant="outlined"
                    name="password"
                    // id="password"
                    sx={{
                      input: { color: "#A0BFE0" },
                      label: { color: "#A0BFE0" },
                    }}
                  />

                  {/* SUBMIT BUTTON */}
                  <LogInButton key="login-11" variant="contained" type="submit" sx={{marginTop: "1rem"}}>
                    <GetStartedText key="login-12" variant="h6">
                      Log In
                    </GetStartedText>
                  </LogInButton>
                  {error && (
                    <Typography
                      key="login-13"
                      sx={{
                        color: "red",
                        textAlign: "left",
                        margin: "1rem 1rem 0rem 1rem",
                        fontWeight: 200,
                        fontSize: 20,
                      }}
                    >
                      {error}
                    </Typography>
                  )}
                  <ColoredLink
                    key="login-14"
                    sx={{ margin: "1rem 1rem 1rem 1rem", color: "#A0BFE0" }}
                  >
                    Don't have an account?{" "}
                    <span
                      key="login-15"
                      onClick={() => {
                        navigate("/signup");
                      }}
                      style={{ textDecoration: "underline", color: "white" }}
                    >
                      Click Here
                    </span>
                  </ColoredLink>
                </FormControl>
              </form>
            </VertStack>
          </LayoutGrid>
        </SplitBoxesGrid>
      </ThemeProvider>
    </>
  );
}

export default Login;
