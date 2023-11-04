import { useState } from "react";
import { Box, Grid, Button, Typography, Stack, Divider } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ScienceIcon from "@mui/icons-material/Science";
import CalculateIcon from "@mui/icons-material/Calculate";
import scienceImg from "./sample.jpeg";
import mathImg from "./sample2.jpeg";
import Image from "mui-image";

const Title = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    ${"" /* margin-bottom: 3vw; */}
    text-align: center;
    color: white;
  }
`;

const AboutTitle = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    ${"" /* margin-bottom: 3vw; */}
    text-align: center;
    color: #03add5;
    margin-bottom: 3rem;
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
    border-radius: 30px;
    ${"" /* height: 80vh; */}
    &:after {
      background: "linear-gradient(to right top, #535EAB, #8351C2)";
    }
  }
`;

const AboutUsText = [
  {
    key: "aditya",
    nameText: "Aditya Lagu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: (
      <ScienceIcon
        style={{ fontSize: "5rem" }}
        sx={{ paddingBottom: "2rem", color: "white" }}
      />
    ),
    linksite: "/biotechnology",
    image: scienceImg,
  },
  {
    key: "raman",
    nameText: "Raman Arora",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: (
      <CalculateIcon
        style={{ fontSize: "5rem" }}
        sx={{ paddingBottom: "2rem", color: "white" }}
      />
    ),
    linksite: "/appliedmath",
    image: mathImg,
  },
];

const DescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    ${"" /* margin-top: 3vw; */}
    color: white;
    transition: 0.25s all ease-in-out;
    zindex: 3;
  }
`;

export default function AboutUs() {
  return (
    <>
      <AboutTitle
        variant="h3"
        paddingTop="5rem"
        marginBotton="5rem"
        key="aboutus-1"
      >
        About Us
      </AboutTitle>
      <SplitBoxesGrid
        key="aboutus-2"
        container
        divider={<Divider key="aboutus-3" orientation="vertical" flexItem />}
        direction="row"
        component={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {AboutUsText.map((PersonCard) => (
          <SubjectDescriptionGrid
            key="aboutus-4"
            item
            xs={10}
            md={4.5}
            sx={{
              position: "relative",
              height: { xs: "80vh", md: "90vh", lg: "80vh" },
            }}
          >
            <div
              key="aboutus-5"
              style={{ position: "absolute", opacity: "0.2" }}
            >
              {/* <Image sx={{zIndex: 2, fillOpacity:0.5 }} src={PersonCard.image} /> */}
              {PersonCard.key === "aditya" ? (
                <ScienceIcon
                  key="aboutus-6"
                  style={{ fontSize: "50vw" }}
                  id={PersonCard.key}
                  sx={{
                    paddingBottom: "2rem",
                    zIndex: 2,
                    color: "white",
                    transition: "0.25s all ease-in-out",
                    opacity: 0.5,
                  }}
                />
              ) : (
                <CalculateIcon
                  key="aboutus-7"
                  style={{ fontSize: "50vw" }}
                  id={PersonCard.key}
                  sx={{
                    paddingBottom: "2rem",
                    zIndex: 2,
                    color: "white",
                    transition: "0.25s all ease-in-out",
                    opacity: 0.5,
                  }}
                />
              )}
            </div>
            <TitleStack
              sx={{ zIndex: 10, position: "absolute" }}
              key="aboutus-8"
            >
              <Title
                variant="h3"
                sx={{ marginBottom: { xs: "2rem", md: "3vw" } }}
                key="aboutus-9"
              >
                {PersonCard.nameText}
              </Title>
              <Image
                key="aboutus-10"
                sx={{ zIndex: 3, borderRadius: "20px" }}
                src={PersonCard.image}
              />
              <DescriptionText
                key="aboutus-11"
                variant="h5"
                sx={{ marginTop: { xs: "2rem", md: "3vw" } }}
              >
                {PersonCard.description}
              </DescriptionText>
            </TitleStack>
          </SubjectDescriptionGrid>
        ))}
      </SplitBoxesGrid>
    </>
  );
}
