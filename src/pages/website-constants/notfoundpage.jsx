import React from "react";
// import { NewtonsCradle } from "@uiball/loaders";
import axios from "axios";
import theme from "./Theme.jsx";
import styled, { ThemeProvider } from "styled-components";
import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  Divider,
  Grid,
  ButtonGroup,
} from "@mui/material";
import { motion } from "framer-motion";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const SubGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
`;

export default function NotFound() {
  return (
    <>
      <ThemeProvider theme={theme} key="notfoundpage-1">
        <SubGrid container key="notfoundpage-2">
          <Stack
            key="notfoundpage-3"
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Typography
              key="notfoundpage-4"
              variant="h1"
              color="white"
              sx={{ textAlign: "center", fontWeight: "700", margin: "1rem" }}
            >
              404
            </Typography>
            <Typography
              key="notfoundpage-5"
              variant="h3"
              color="white"
              sx={{ textAlign: "center", margin: "1rem 0rem 2rem 0rem" }}
            >
              Page Not Found
            </Typography>
            <SentimentVeryDissatisfiedIcon
              key="notfoundpage-6"
              style={{ fontSize: "8rem" }}
              sx={{ color: "white" }}
            ></SentimentVeryDissatisfiedIcon>
          </Stack>
        </SubGrid>
      </ThemeProvider>
    </>
  );
}
