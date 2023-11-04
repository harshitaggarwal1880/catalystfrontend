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
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px white inset; /* Change white to your desired background color */
      -webkit-text-fill-color: #a0bfe0; /* Change text color to your desired color */
    }
    &:-moz-autofill {
      -moz-box-shadow: 0 0 0 1000px white inset; /* Change white to your desired background color */
      -moz-text-fill-color: #a0bfe0; /* Change text color to your desired color */
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

const SignUpButton = styled(Button)`
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

function SignUp() {
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
        console.log("Please signup");
      });
  }, []);

  const handleSignUpSubmit = async (e) => {
    try {
      e.preventDefault();
      const userData = {
        username: e.target.username.value,
        password: e.target.password.value,
        email: e.target.email.value,
      };
      const confPass = e.target.confPassword.value;
      const checkCondition = (userData && userData.username !== "" && !(userData.username?.includes(" ")) && userData.password !== "" && !(userData.password?.includes(" ")) && userData.email !== "" && !(userData.email?.includes(" ")) && userData.confPass !== "" && !(userData.confPass?.includes(" ")))
      document
        .querySelectorAll("input")
        .forEach((singleInput) => (singleInput.value = ""));
      if (userData.password === confPass && checkCondition) {
        const signUpPromise = axios.post(
          "/api/auth/signup",
          userData,
          {
            withCredentials: true,
            credentials: "include",
          }
        );
        signUpPromise
          .then((res) => {
            if (res.data) {
              console.log("Signup successful");
              const loginPromise = axios.post(
                "/api/auth/login",
                userData,
                {
                  withCredentials: true,
                  credentials: "include",
                }
              );

              loginPromise
                .then((loginResponse) => {
                  if (loginResponse.data) {
                    console.log("Going to courses");
                    // window.location.reload();
                    navigate("/courses")

                  } else {
                    console.log("Login failed");
                  }
                })
                .catch((loginError) => {
                  console.log("Login error:", loginError);
                });
            } else {
              console.log("Signup failed");
            }
          })
          .catch((signUpError) => {
            console.log("Signup error:", signUpError);
          });
      } else {
        setError("Please enter valid information in the provided fields.");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <ThemeProvider theme={theme} key="signup-1">
        <NavBarLogin></NavBarLogin>
        <SplitBoxesGrid
          key="signup-2"
          container
          divider={<Divider key="signup-3" orientation="vertical" flexItem />}
        >
          <LayoutGrid item xs={12} sm={7.5} key="signup-4">
            <VertStack key="signup-5">
              {/* LOGIN MAIN TEXT */}
              <Typography
                key="signup-6"
                variant="h2"
                sx={{
                  textAlign: "left",
                  paddingBottom: "1rem",
                  fontWeight: 700,
                  margin: "1rem",
                  color: "#FFFFFF",
                }}
              >
                Sign Up
              </Typography>
              <form onSubmit={handleSignUpSubmit} key="signup-7">
                <FormControl onSubmit={handleSignUpSubmit} key="signup-8">
                  {/* EMAIL TEXT FIELD */}
                  <TextFieldStyled
                    key="signup-9"
                    type="text"
                    label="Username"
                    variant="outlined"
                    name="username"
                    sx={{
                      input: { color: "#A0BFE0" },
                      label: { color: "#A0BFE0" },
                    }}
                  />

                  <TextFieldStyled
                    key="signup-10"
                    type="email"
                    label="Email"
                    variant="outlined"
                    name="email"
                    // id="email"
                    sx={{
                      input: { color: "#A0BFE0" },
                      label: { color: "#A0BFE0" },
                    }}
                  />

                  {/* PASSWORD TEXT FIELD */}
                  <TextFieldStyled
                    key="signup-11"
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

                  <TextFieldStyled
                    key="signup-12"
                    type="password"
                    label="Confirm Password"
                    color="primary"
                    variant="outlined"
                    name="confPassword"
                    id="confPassword"
                    sx={{
                      input: { color: "#A0BFE0" },
                      label: { color: "#A0BFE0" },
                    }}
                  />

                  {/* FORGOT PWD*/}
                  <ColoredLink
                    key="signup-13"
                    sx={{ margin: "1rem 1rem 1rem 1rem", color: "#A0BFE0" }}
                  >
                    Already have an account?{" "}
                    <span
                      key="signup-14"
                      onClick={() => {
                        navigate("/login");
                      }}
                      style={{ textDecoration: "underline", color: "white" }}
                    >
                      Click Here
                    </span>
                  </ColoredLink>

                  {/* SUBMIT BUTTON*/}
                  <SignUpButton
                    key="signup-15"
                    variant="contained"
                    type="submit"
                  >
                    <GetStartedText key="signup-16" variant="h6">
                      Sign Up
                    </GetStartedText>
                  </SignUpButton>
                  {error && (
                    <Typography
                      key="signup-17"
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
                </FormControl>
              </form>
            </VertStack>
          </LayoutGrid>
        </SplitBoxesGrid>
      </ThemeProvider>
    </>
  );
}

export default SignUp;
