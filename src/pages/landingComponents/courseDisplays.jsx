import { useState } from "react";
import { Box, Grid, Button, Typography, Stack, Divider } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ScienceIcon from "@mui/icons-material/Science";
import CalculateIcon from "@mui/icons-material/Calculate";
import scienceImg from "./scientist.svg";
import mathImg from "./mathematician.svg";
import Image from "mui-image";

const Title = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    margin-bottom: 2vw;
    text-align: center;
  }
`;

const TitleStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7rem 5rem 7rem 5rem;
    background-color: transparent;
  }
`;

const SplitBoxesGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    gap: 6vw;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

const SubjectDescriptionGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    border: 1px solid grey;
  }
`;

const CourseDescriptionText = [
  {
    key: "bio",
    courseName: "Biotechnology",
    description:
      "Delve into the intricate workings of biological systems and the incredible technologies used to modify organisms from the molecular level. This course covers an array of topics, ranging from the structure of a living cell to the cutting-edge advancements in gene editing and CRISPR technology.",
    icon: (
      <ScienceIcon
        style={{ fontSize: "5rem" }}
        sx={{ paddingBottom: "2rem", color: "white" }}
      />
    ),
    // color: "#C5DFF8",
    // color2: "#7895CB",
    linksite: "/biotechnology",
    backgroundImage: scienceImg,
  },
  {
    key: "math",
    courseName: "Engineering",
    description:
      "Discover the transformative role math and the physical sciences play to shape the world around us from the construction of enormous bridges to the fabrication of massive machines. This course surfaces a variety of engineering disciplines such as mechanical, structural, chemical, etc. and even explores the field of data science.",
    icon: (
      <CalculateIcon
        style={{ fontSize: "5rem" }}
        sx={{ paddingBottom: "2rem", color: "white" }}
      />
    ),
    // color: "#C5DFF8",
    // color2: "#7895CB",
    linksite: "/engineering",
    backgroundImage: mathImg,
  },
];

const DescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    ${"" /* padding-bottom: 2rem; */}
    color: white;
    transition: 0.25s all ease-in-out;
    zindex: 3;
  }
`;

export default function CourseDisplay() {
  const navigate = useNavigate();

  const hoverOn = (event) => {
    const key = event.currentTarget.role;
    const collection = document.querySelectorAll("#" + key);
    collection.forEach((item) => {
      item.style.opacity = "1";
    });
  };

  const hoverOff = (event) => {
    const key = event.currentTarget.role;
    const collection = document.querySelectorAll("#" + key);
    collection.forEach((item) => {
      item.style.opacity = "0";
    });
  };

  return (
    <>
      <Title
        key="coursedisplays-1"
        variant="h3"
        paddingTop="10rem"
        marginBotton="0rem"
        sx={{ color: "#5383ec" }}
      >
        Our Courses
      </Title>
      <SplitBoxesGrid
        key="coursedisplays-2"
        container
        divider={
          <Divider key="coursedisplays-3" orientation="vertical" flexItem />
        }
        direction="row"
      >
        {CourseDescriptionText.map((CourseCard) => (
          <SubjectDescriptionGrid
            key="coursedisplays-4"
            item
            xs={10}
            md={4.5}
            role={CourseCard.key}
            sx={{
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              height: { xs: "80vh", md: "90vh", lg: "80vh" },
            }}
            component={motion.div}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              // backgroundImage:
              //   "linear-gradient(to right top, #272727, #313131, #3b3b3b, #464646, #515151)",
            }}
            transition={{
              duration: 0.8,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            whileHover={{
              scale: 1.1,
              // backgroundImage:
              //   "linear-gradient(to left top, #16283b, #2c3c4c, #213f62, #174177, #1c418a)",
              // backgroundColor: "#03339c"
              backgroundColor: "#003c88",
            }}
            onClick={() => {
              // navigate(CourseCard.linksite);
              navigate("/login");
            }}
            onMouseOver={hoverOn}
            onMouseOut={hoverOff}
          >
            <div
              key="coursedisplays-5"
              style={{ position: "absolute", opacity: "0.2" }}
            >
              <Image
                sx={{ zIndex: 2, fillOpacity: 0.5 }}
                src={CourseCard.backgroundImage}
              />
            </div>
            <TitleStack
              key="coursedisplays-6"
              sx={{ zIndex: 10, position: "absolute" }}
            >
              {CourseCard.key === "bio" ? (
                <ScienceIcon
                  key="coursedisplays-7"
                  style={{ fontSize: "5rem" }}
                  id={CourseCard.key}
                  sx={{
                    paddingBottom: "2rem",
                    zIndex: 3,
                    color: "white",
                    transition: "0.25s all ease-in-out",
                    opacity: 0,
                  }}
                />
              ) : (
                <CalculateIcon
                  key="coursedisplays-70"
                  style={{ fontSize: "5rem" }}
                  id={CourseCard.key}
                  sx={{
                    paddingBottom: "2rem",
                    zIndex: 3,
                    color: "white",
                    transition: "0.25s all ease-in-out",
                    opacity: 0,
                  }}
                />
              )}
              <Title
                variant="h3"
                sx={{ color: "white" }}
                key="coursedisplays-8"
              >
                {CourseCard.courseName}
              </Title>
              <DescriptionText
                key="coursedisplays-9"
                id={CourseCard.key}
                variant="h5"
                sx={{ opacity: 0 }}
              >
                {CourseCard.description}
              </DescriptionText>
            </TitleStack>
          </SubjectDescriptionGrid>
        ))}
      </SplitBoxesGrid>
    </>
  );
}
