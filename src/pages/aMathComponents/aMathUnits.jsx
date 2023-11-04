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
    padding: 3rem;
    border-radius: 2rem;
    border: 1px solid grey;
    background: linear-gradient(to right top, #535eab, #8351c2);
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
    box-shadow: inset 0 0 0 0 #03add5;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.2s;
    width: 90%;
    &:hover {
      box-shadow: inset 60vw 0vh 0vh 0vh #03add5;
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
    padding: 3rem 3rem 3rem 3rem;
  }
`;

function DisplayInfo({ unit, handleLessonSelect }) {
  if (!unit) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme} border="none">
        <HolderGrid container>
          <VertStack
            item
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
              background: "linear-gradient(to right top, #354083, #6533A4)",
            }}
            key="aMathUnits-VStack"
          >
            <TitleText sx={{ fontSize: { xs: "6vw", md: "4vw" } }}>
              {unit.id}. {unit.name}
              key="aMathUnits-titletext-1"
            </TitleText>
            <DescriptionText
              item
              sx={{ fontSize: { xs: "2.5vw", md: "1.5vw" } }}
              key="aMathUnits-descriptiontext-1"
            >
              {unit.description}
            </DescriptionText>
            <ButtonHolderGroup
              item
              variant="text"
              orientation="vertical"
              color="secondary"
              sx={{ color: "white" }}
              key="aMathUnits-buttonholder-1"
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
                    key="aMathUnits-typo-1"
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
