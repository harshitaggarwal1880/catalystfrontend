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
    ${"" /* width: 100%; */}
    ${"" /* height: 50vh; */}
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
    ${"" /* padding: 1rem; */}
    ${"" /* max-width: 100%; */}
    max-height: 60%;
    max-width: 60%;
    ${"" /* width: auto; */}
    object-fit: contain
  }
`;

const VertStack = styled(Stack)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
  }
`;

export default function ImageCard({ displayInfo }) {
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
      <ThemeProvider theme={theme} border="none" key="imagecard-tp-1">
        <SplitBoxesGrid container key="imagecard-sbg-1">
          <VertStack key="imagecard-vst-1">
            {displayInfo.text ? (
              <DescriptionText
                variant="h3"
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={titleVariants}
                key="imagecard-desctxt-1"
              >
                {displayInfo.text}
              </DescriptionText>
            ) : (
              ""
            )}
            <Img src={displayInfo.img} alt="" key="imagecard-image-1"></Img>
          </VertStack>
        </SplitBoxesGrid>
      </ThemeProvider>
    </>
  );
}
