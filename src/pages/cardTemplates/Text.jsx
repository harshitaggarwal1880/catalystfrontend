import React from "react";
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
import theme from "../website-constants/Theme";
import Image from "mui-image";

const TitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: left;
    color: white;
  }
`;

const SubGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    ${"" /* width: 100%; */}
  }
`;

const DescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    ${"" /* font-size: 20px; */}
    padding-bottom: 1rem;
    text-align: left;
    line-height: 175%;
    color: white;
  }
`;

const SplitBoxesGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    height: 100%;
    gap: 3vw;
    padding: 2vw;
  }
`;

const VertStack = styled(Stack)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
  }
`;

export default function TextCard({ displayInfo }) {
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Adjust the delay as needed
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } }, // Adjust the delay as needed
  };
  return (
    <>
      <ThemeProvider theme={theme} key="text-1" border="none">
        <SplitBoxesGrid container key="text-2">
          <SubGrid item xs={12} md={12} key="text-3">
            <VertStack key="text-4">
              <TitleText
                key="text-5"
                variant="h3"
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                {displayInfo.title}
              </TitleText>
              <DescriptionText
                key="text-6"
                variant="h6"
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={subtitleVariants}
              >
                {displayInfo.text}
              </DescriptionText>
            </VertStack>
          </SubGrid>
        </SplitBoxesGrid>
      </ThemeProvider>
    </>
  );
}
