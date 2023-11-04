import React, { useLayoutEffect } from "react";
import Nav from "./website-constants/NavBarLoggedOut";
import { ThemeProvider } from "@mui/material";
import { motion, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";
import theme from "./website-constants/Theme.jsx";
import Hero from "./landingComponents/hero.jsx";
import CourseDisplay from "./landingComponents/courseDisplays.jsx";
import OurMission from "./landingComponents/ourMission.jsx";
import JoinNow from "./landingComponents/joinNow.jsx";
import AboutUs from "./landingComponents/aboutus";
import axios from "axios";
export default function Landing() {
  const prevOver = document.body.style.overflow;
  document.body.style.overflow = prevOver;
  // document.body.style.overflow = "none";


  const navigate = useNavigate();

  useLayoutEffect(() => {
    axios   
      .post("/api/auth/authenticate", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        navigate("/courses")
      })
      .catch((err) => {
        console.log("Welcome");
      });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme} border="none" key="landing-1">
        <Nav key="landing-2" />
        <Hero key="landing-3"></Hero>
        <CourseDisplay key="landing-4"></CourseDisplay>
        <OurMission key="landing-5"></OurMission>
        <JoinNow key="landing-6"></JoinNow>
      </ThemeProvider>
    </>
  );
}
