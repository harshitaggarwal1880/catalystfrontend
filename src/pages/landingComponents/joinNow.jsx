import React from "react";
import { Box, Grid, Button, Typography, Stack, Divider } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TitleStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0rem 4rem 0rem;
  }
`;
const SubtitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const SignupButtonTop = styled(Button)`
  && {
    background-color: transparent;
    border: 2px solid;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #5383ec;
    font-size: 20px;
    margin-top: 2rem;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
    &:hover {
      box-shadow: inset 400px 0 0 0 #5383ec;
    }
  }
`;

export default function JoinNow() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        key="joinnow-1"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem 0rem 3rem 0rem",
        }}
      >
        <TitleStack spacing={2} key="joinnow-2">
          <SubtitleText key="joinnow-3" color="common.white" variant="h4">
            Start your journey today!
          </SubtitleText>
          <SignupButtonTop
            key="joinnow-4"
            variant="contained"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Join Us
          </SignupButtonTop>
        </TitleStack>
      </Box>
    </>
  );
}
