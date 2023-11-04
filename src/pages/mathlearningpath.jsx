import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styled, { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  Divider,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import theme from "./website-constants/Theme.jsx";
import { FormControl, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "./website-constants/NavBarLoggedIn.jsx";
import ImgText from "./cardTemplates/ImageText.jsx";
import LeftIcon from "@mui/icons-material/ChevronLeft";
import RightIcon from "@mui/icons-material/ChevronRight";
import McqCard from "./cardTemplates/mcq.jsx";
import TextImg from "./cardTemplates/TextImage.jsx";
import FillInBlank from "./cardTemplates/fillinblank.jsx";
import { useParams } from "react-router-dom";
import Intro from "./cardTemplates/intro.jsx";
import Conclusion from "./cardTemplates/conclusion.jsx";
import VideoCard from "./cardTemplates/videoCard.jsx";
import TextCard from "./cardTemplates/Text.jsx";
import ImageCard from "./cardTemplates/ImageCard.jsx";

const HolderGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;
    padding-top: 3rem;
  }
`;

const CardHolder = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    padding: 1.5vw;
    height: 90vh;
    width: 90vw;
    ${"" /* background: linear-gradient(to right top, #535EAB, #8351C2); */}
    ${"" /* background: linear-gradient(to right top, #99a4f1, #c997f4); */}
    border-radius: 2rem;
    ${"" /* border: 1px solid grey; */}
    box-shadow: 0px 0px 5rem grey;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
  }
`;

const CardWrapper = styled.div`
  /* Your other styles */
  opacity: ${(props) => (props.fadeOut ? 0 : 1)};
  transition: opacity 0.3s ease-in-out;
`;

const BigGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem 2rem 2rem;
    width: 100%;
  }
`;

const ChevronButton = styled(Button)`
  && {
    width: 1rem;
    height: 3rem;
    align-self: center;
  }
`;

function BioLearningPath() {
  const { lessonid } = useParams();
  const [cardNum, setCardNum] = useState(-1);
  const [lessonList, setLessonList] = useState([]);
  const navigate = useNavigate();
  const [trigger, setTrigger] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fetchAllLessons = async () => {
      try {
        const res = await axios.get("/api/mathcards",
        {
          withCredentials: true,
          credentials: "include",
        });
        const lessons = res.data;
        setLessonList(lessons);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllLessons();
  }, []);

  if (!lessonList || lessonList.length === 0) {
    return;
  }

  const lesson = lessonList[lessonid - 1];

  const handleNextClick = () => {
    if (cardNum < lesson.length) {
      setFadeOut(true);
      setTimeout(() => {
        setCardNum(cardNum + 1);
        setFadeOut(false); // Reset the fade-out state
      }, 300);
    } else if (lessonid < lessonList.length) {
      const newIndex = Number(lessonid) + 1;
      navigate("/engineering/" + newIndex);
      window.location.reload(false);
    }
  };
  const handleBackClick = (e) => {
    if (cardNum > -1) {
      setFadeOut(true);
      setTimeout(() => {
        setCardNum(cardNum - 1);
        setFadeOut(false); // Reset the fade-out state
      }, 300);
    } else if (lessonid > 1) {
      const newIndex = Number(lessonid) - 1;
      navigate("/engineering/" + newIndex);
      window.location.reload(false);
    }
  };

  const renderCard = () => {
    if (cardNum > -1 && cardNum < lesson.length) {
      const currentCard = lesson[cardNum];
      if (currentCard.card_type === "MCQ") {
        return <McqCard key={cardNum} question={currentCard}></McqCard>;
      } else if (currentCard.card_type === "FRQ") {
        return <FillInBlank key={cardNum} question={currentCard}></FillInBlank>;
      } else if (currentCard.card_type === "ImgText") {
        return <ImgText key={cardNum} displayInfo={currentCard}></ImgText>;
      } else if (currentCard.card_type === "TextImg") {
        return <TextImg key={cardNum} displayInfo={currentCard}></TextImg>;
      } else if (currentCard.card_type === "Video") {
        return <VideoCard key={cardNum} displayInfo={currentCard}></VideoCard>;
      } else if (currentCard.card_type === "Text") {
        return <TextCard key={cardNum} displayInfo={currentCard}></TextCard>;
      } else if (currentCard.card_type === "Image") {
        return <ImageCard key={cardNum} displayInfo={currentCard}></ImageCard>;
      }
      return "Card Rendering Error";
    } else if (cardNum === -1) {
      return <Intro lessonIndex={lessonid} course="math"></Intro>;
    } else if (cardNum === lesson.length) {
      return <Conclusion lessonIndex={lessonid} course="math"></Conclusion>;
    }
  };

  return (
    <ThemeProvider theme={theme} key="mthlearningpath-1">
      <NavBar key="mthlearningpath-2" />
      <BigGrid key="mthlearningpath-3">
        <ChevronButton
          key="mthlearningpath-4"
          onClick={handleBackClick}
          disable="true"
          sx={{ marginRight: "2rem", display: { xs: "none", md: "flex" } }}
        >
          <LeftIcon
            style={{ color: "white", fontSize: "3rem" }}
            key="mthlearningpath-5"
          />
        </ChevronButton>
        <CardHolder
          key="mthlearningpath-6"
          item
          sm={12}
          xs={12}
          sx={{
            alignItems: {
              xs:
                cardNum <= -1 || cardNum === lesson.length
                  ? "center"
                  : "flex-start",
              md: "center",
            },
          }}
        >
          <CardWrapper key="mthlearningpath-7" fadeOut={fadeOut}>
            {renderCard()}
          </CardWrapper>
        </CardHolder>
        <ChevronButton
          key="mthlearningpath-8"
          onClick={handleNextClick}
          disable="true"
          sx={{ marginLeft: "2rem", display: { xs: "none", md: "flex" } }}
        >
          <RightIcon
            key="mthlearningpath-9"
            style={{ color: "white", fontSize: "3rem" }}
          />
        </ChevronButton>
      </BigGrid>
      <Container
        key="mthlearningpath-10"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          padding: "0rem 0rem 3rem 0rem",
          visibility: { xs: "visible", md: "hidden" },
        }}
      >
        <ChevronButton
          key="mthlearningpath-11"
          onClick={handleBackClick}
          disable="true"
          sx={{ marginRight: "2rem" }}
        >
          <LeftIcon
            style={{ color: "white", fontSize: "3rem" }}
            key="mthlearningpath-12"
          />
        </ChevronButton>
        <ChevronButton
          key="mthlearningpath-13"
          onClick={handleNextClick}
          disable="true"
          sx={{ marginLeft: "2rem" }}
        >
          <RightIcon
            style={{ color: "white", fontSize: "3rem" }}
            key="mthlearningpath-14"
          />
        </ChevronButton>
      </Container>
    </ThemeProvider>
  );
}

export default BioLearningPath;
