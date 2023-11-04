import React from "react";
import { NewtonsCradle } from "@uiball/loaders";
import axios from "axios";
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

const SubGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
`;

export default function loading() {
  return (
    <>
      <SubGrid key="loading-1" container>
        <NewtonsCradle
          key="loading-2"
          item
          size={40}
          speed={1.4}
          color="white"
        />
      </SubGrid>
    </>
  );
}
