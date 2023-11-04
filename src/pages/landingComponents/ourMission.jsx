import React from "react";
import { Box, Grid, Button, Typography, Stack, Divider } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "mui-image";
import progressImg from "./progressImg.svg";

const OurMissionGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0rem 2rem 0rem;
    gap: 4vw;
    ${"" /* height: 60vh; */}
  }
`;

const OurMissionTextGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const OurMissionImgGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const OurMissionImg = styled(Image)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }
`;

const OurMissionText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
    padding: 3rem 3rem 3rem 3rem;
    text-align: center;
    color: white;
    text-align: left;
  }
`;

const BiomathText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: center;
    font-weight: 700;
    ${"" /* margin-bottom: 1rem; */}
    text-align: center;
    color: #5383ec;
    padding: 3rem 0 0 3rem;
  }
`;

export default function OurMission() {
  return (
    <>
      <OurMissionGrid container key="ourmission-1">
        <OurMissionImgGrid
          key="ourmission-2"
          item
          xs={10}
          md={4}
          component={motion.div}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Image key="ourmission-3" src={progressImg} />
        </OurMissionImgGrid>
        <OurMissionTextGrid
          key="ourmission-4"
          Item
          xs={11}
          md={5}
          component={motion.div}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Stack key="ourmission-5">
            <BiomathText key="ourmission-6" variant="h3" paddingTop="5rem">
              Our Mission
            </BiomathText>
            <OurMissionText variant="h5" key="ourmission-7">
              Project Catalyst's mission is to inspire and motivate students across the globe to gain interest in STEM fields such as biotechnology and engineering. Our organization is determined to provide students equitable access to content and lessons so they can be exposed to these fields from an early age and be prepared for their careers.
            </OurMissionText>
          </Stack>
        </OurMissionTextGrid>
      </OurMissionGrid>
    </>
  );
}
