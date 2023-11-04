import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import theme from "./website-constants/Theme.jsx";
import NavBar from "./website-constants/NavBarLoggedIn.jsx";
import DisplayCard from "./biotechnologyComponents/biotechUnits.jsx";
import BiotechTitle from "./biotechnologyComponents/biotechTitle.jsx";
import AppliedMathHeader from "./aMathComponents/aMathTitle.jsx";

const RootContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const CenteredContainer = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 0;
    height: 100%;
    padding: 1rem;
  }
`;

const UnitMenu = styled.div`
  display: block;
  max-height: 80vh;
  overflow-y: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CenteredSidebar = styled(Grid)`
  && {
    display: flex;
    flex-direction: column;
    align-items: left;
    border-radius: 10px;
    padding: 1rem;
    max-height: 80vh;
    overflow-y: auto;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
    color: "white";
  }

  @media (min-width: 960px) {
    /* Increase padding for md screens */
    padding: 2rem;
  }

  @media (max-width: 600px) {
    /* Decrease font size for xs screens */
    font-size: 14px;
  }
`;

const UnitItem = styled(Typography)`
  cursor: pointer;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-bottom: 1px solid #a983e6;
  &:last-child {
    border-bottom: none;
  }
  ${
    "" /* &:hover {
    background-color: #a983e6;
  } */
  }
  color: white;
  text-align: center;
  font-size: 18px; /* Default font size */
  box-shadow: inset 0 0 0 0 #5383ec;
  -webkit-transition: ease-out 0.2s;
  -moz-transition: ease-out 0.2s;
  transition: ease-out 0.2s;
  &:hover {
    box-shadow: inset 600px 0 0 0 #5383ec;
  }
`;

const ContentWrapper = styled(Grid)`
  max-height: 80vh;
`;

function BiotechnologyPage() {
  const [unitsList, setUnitsList] = React.useState([]);
  const [selectedUnit, setSelectedUnit] = React.useState(null);
  const [selectedLessonId, setSelectedLessonId] = React.useState(null);
  const navigate = useNavigate();
  // const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isXs = useMediaQuery("(max-width:900px)");

  const handleUnitSelect = (unit) => {
    setSelectedUnit(unit);
    setSelectedLessonId(null); // Clear the selected lesson when a new unit is selected
  };

  const handleLessonSelect = (lessonDetails) => {
    setSelectedLessonId(lessonDetails.lesson_id);
    navigate(`/engineering/${lessonDetails.lesson_id}`);
  };

  React.useEffect(() => {
    const fetchAllUnits = async () => {
      try {
        const res = await axios.get("/api/appliedmath",
        {
          withCredentials: true,
          credentials: "include",
        });
        const units = res.data;
        setUnitsList(units);
        setSelectedUnit(units[0]); // Select the first unit by default
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUnits();
  }, []);

  return (
    <ThemeProvider
      key="apmath-1"
      theme={theme}
      sx={{
        minHeight: "100%",
        width: "100vw",
        margin: "0",
      }}
    >
      <NavBar key="apmath-2" />
      <AppliedMathHeader key="apmath-3" />
      <RootContainer key="apmath-4">
        <CenteredContainer key="apmath-5" container>
          <CenteredSidebar
            key="apmath-6"
            item
            md={4}
            xs={2}
            sx={{
              padding: "0.5rem",
              marginTop: "3rem",
              order: 1,
            }}
          >
            {unitsList.map((unit, index) => (
              <UnitItem
                key={index}
                onClick={() => handleUnitSelect(unit)}
                variant="h6"
                // color={selectedUnit === unit ? "#5383ec" : "white"}
                sx={{
                  boxShadow:
                    selectedUnit === unit
                      ? "inset 600px 0 0 0 #5383ec"
                      : "transparent",
                }}
              >
                {!isXs ? `Unit ${unit.id}: ${unit.name}` : `${unit.id}`}
              </UnitItem>
            ))}
          </CenteredSidebar>
          <ContentWrapper
            key="apmath-7"
            item
            md={7}
            xs={10}
            sx={{
              order: 2,
            }}
          >
            <DisplayCard
              key="apmath-8"
              unit={selectedUnit}
              selectedLessonId={selectedLessonId}
              handleLessonSelect={handleLessonSelect}
            />
          </ContentWrapper>
        </CenteredContainer>
      </RootContainer>
    </ThemeProvider>
  );
}

export default BiotechnologyPage;
