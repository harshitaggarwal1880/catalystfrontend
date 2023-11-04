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
import theme from "../website-constants/Theme.jsx";
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
    ${"" /* padding: 2rem; */}
    ${"" /* width: 100%; */}
  }
`;

const DescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 20px;
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

const Img = styled(Image)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 100%;
    ${"" /* padding: 1rem; */}
  }
`;

const VertStack = styled(Stack)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
  }
`;

function ImageText({ displayInfo }) {
  const titleVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Adjust the delay as needed
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } }, // Adjust the delay as needed
  };

  return (
    <>
      <ThemeProvider theme={theme} border="none" key="imgtext-tp-1">
        <SplitBoxesGrid container key="imgtext-sbg-1">
          <SubGrid item xs={12} md={4} key="imgtext-subg-1">
            <Img src={displayInfo.img} alt="" key="imgtext-text-1"></Img>
          </SubGrid>
          <SubGrid
            item
            xs={12}
            md={7}
            style={{ justifyContent: "left" }}
            key="imgtext-1"
          >
            <VertStack key="imgtext-2">
              <TitleText
                variant="h2"
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={titleVariants}
                key="imgtext-3"
              >
                {displayInfo.title}
              </TitleText>
              <DescriptionText
                variant="h6"
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={subtitleVariants}
                key="imgtext-4"
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

export default ImageText;
