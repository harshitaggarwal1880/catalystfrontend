import { React, useEffect } from "react";
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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { motion } from "framer-motion";
import theme from "../website-constants/Theme";

const TitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    margin-bottom: 2rem;
    text-align: left;
    color: white;
  }
`;

const CardHolder = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: #d99565;
  }
`;

const DescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    padding-bottom: 1rem;
    text-align: left;
    color: white;
  }
`;

const VertStack = styled(Stack)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    padding: 4vw;
    border-radius: 2rem;
    border: 1px solid grey;
    ${"" /* background: linear-gradient(to right top, #535eab, #8351c2); */}
    ${"" /* background-color: #2b5bc4; */}
    disable-align: false;
  }
`;

const ListButtons = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem 1rem 1rem 1rem;
    color: white;
    box-shadow: inset 0 0 0 0 #5383ec;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.2s;
    width: 90%;
    &:hover {
      box-shadow: inset 60vw 0vh 0vh 0vh #5383ec;
      color: black;
    }
  }
`;

const ButtonHolderGroup = styled(ButtonGroup)`
  && {
    border-color: #008e9b;
    orientation: vertical;
    align-items: center;
  }
`;

const HolderGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem 3rem 3vw;
  }
`;

function DisplayInfo({ unit, handleLessonSelect }) {
  if (!unit) {
    return null;
  }
  return (
    <>
      <ThemeProvider
        theme={theme}
        border="none"
        key="biotechUnits-themeprovider-1"
      >
        <HolderGrid container key="biotechUnits-holdergrid-1">
          <VertStack
            item
            key="biotechUnits-vstack-1"
            component={motion.div}
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            whileHover={{
              scale: 1.05,
              // background: "linear-gradient(to right top, #354083, #6533A4)",
              backgroundColor: "#1747b0",
            }}
          >
            <TitleText
              sx={{ fontSize: { xs: "6vw", md: "4vw" } }}
              key="biotechUnits-titletext-1"
            >
              {unit.id}. {unit.name}
            </TitleText>
            <DescriptionText
              item
              sx={{ fontSize: { xs: "2.5vw", md: "1.5vw" } }}
              key="biotechUnits-desctext-1"
            >
              {unit.description}
            </DescriptionText>
            <ButtonHolderGroup
              item
              variant="text"
              orientation="vertical"
              color="secondary"
              sx={{ color: "white" }}
              key="biotechUnits-buttonholdergroup-1"
            >
              {unit.lessons.map((lesson) => (
                <ListButtons
                  item
                  key={lesson.lesson_id}
                  onClick={() => handleLessonSelect(lesson)}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "3vw", md: "1.5vw" },
                      fontWeight: "600",
                    }}
                    key="biotechUnits-typo-2"
                  >
                    {lesson.lesson_name}
                  </Typography>
                </ListButtons>
              ))}
            </ButtonHolderGroup>
          </VertStack>
        </HolderGrid>
      </ThemeProvider>
    </>
  );
}

export default DisplayInfo;
