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
    ${"" /* font-size: 20px; */}
    padding-bottom: 1rem;
    text-align: left;
    line-height: 175%;
    color: white;
    text-align: center;
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

export default function Conclusion({ lessonIndex, course }) {
  const [lesson, setLesson] = useState([]);
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

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Adjust the delay as needed
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }, // Adjust the delay as needed
  };

  return (
    <>
      <ThemeProvider
        theme={theme}
        border="none"
        key="conclusion-themeprovider-1"
      >
        <SplitBoxesGrid container key="conclusion-splitboxesgrid-1">
          <VertStack key="conclusion-vstack-1">
            <DescriptionText
              variant="h3"
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              key="conclusion-dtext-1"
            >
              Congratulations on completing
            </DescriptionText>
            <TitleText
              variant="h1"
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={subtitleVariants}
              key="conclusion-titletext-1"
            >
              Unit {lesson.unit_id} Lesson {lesson.lesson_number}!
            </TitleText>
          </VertStack>
        </SplitBoxesGrid>
      </ThemeProvider>
    </>
  );
}
