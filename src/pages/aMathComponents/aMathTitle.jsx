import { React, useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  Divider,
  Grid,
} from "@mui/material";
import NavBar from "../website-constants/NavBarLoggedIn";

const TitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    margin-top: 2.5rem;
    text-align: center;
    color: 'white';
    final: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2
      }
    }
    box-shadow: "black";
  }
`;

export default function AppliedMathHeader() {
  return (
    <>
      <TitleText
        sx={{
          color: "#5383ec",
          fontSize: { xs: "9vw", md: "6vw" },
        }}
        key="aMathTitle-TitleText"
      >
        Engineering
      </TitleText>
    </>
  );
}
