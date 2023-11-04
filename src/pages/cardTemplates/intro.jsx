import React, { useState, useRef, useEffect } from "react";
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
import theme from "../website-constants/Theme.jsx";
import Image from "mui-image";

const TitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
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
    ${"" /* font-weight: bold; */}
    ${"" /* font-size: 20px; */}
    padding-bottom: 1rem;
    text-align: center;
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
    justify-content: center;
    align-items: center;
  }
`;

export default function Intro({ lessonIndex, course }) {
  const [lesson, setLesson] = useState([]);

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Adjust the delay as needed
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }, // Adjust the delay as needed
  };

  useEffect(() => {
    const fetchAllLessons = async () => {
      try {
        const res = await axios.get(
          "/api/" + course + "lessons", {
            withCredentials: true,
            credentials: "include",
          }
        );
        const lessons = res.data;
        setLesson(lessons[lessonIndex - 1]);
        // setLesson(lessons[1])
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllLessons();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ThemeProvider theme={theme} border="none" key="intro-1">
        <SplitBoxesGrid container key="intro-2">
          <VertStack key="intro-3">
            <DescriptionText
              key="intro-4"
              variant="h3"
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              Unit {lesson.unit_id} Lesson {lesson.lesson_number}
            </DescriptionText>
            <TitleText
              key="intro-5"
              variant="h1"
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={subtitleVariants}
            >
              {lesson.lesson_name}
            </TitleText>
            {/* <DescriptionText variant="h3">Let's get started!</DescriptionText> */}
          </VertStack>
        </SplitBoxesGrid>
      </ThemeProvider>
    </>
  );
}
