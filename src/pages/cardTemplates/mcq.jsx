import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  Divider,
  Grid,
  FormHelperText,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import theme from "../website-constants/Theme.jsx";
import { useRadioGroup } from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CardGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    gap: 2rem;
  }
`;

const VertStack = styled(Stack)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    padding: 2rem;
    height: 80%;
    width: 100%;
  }
`;
const SubtopicText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: left;
    color: white;
  }
`;

const QuestionText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    padding-bottom: 2rem;
    text-align: left;
    color: white;
  }
`;

const CustomRadio = motion(styled(FormControlLabel)``);

const CheckmarkIcon = styled(CheckCircleIcon)`
  color: green;
`;

const formControlLabelStyle = {
  "& .MuiFormControlLabel-label": {
    fontSize: "1.4rem",
    color: "white",
  },
};

const DisplayText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    color: white;
    padding: 0.2rem;
    font-weight: 500;
    text-transform: none;
  }
`;

const CheckButton = styled(Button)`
  && {
    background-color: transparent;
    border: 2px solid white;
    width: 5rem;
    margin-top: 1rem;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #5383ec;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
    &:hover {
      box-shadow: inset 400px 0 0 0 #5383ec;
    }
  }
`;

export default function McqCard({ question }) {
  const [value, setValue] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(null);
  const [radioColor, setRadioColor] = React.useState("default");
  const [disable, setDisable] = React.useState(false);
  const [radioButtonColor, setColor] = React.useState("white");

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Adjust the delay as needed
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.0 } }, // Adjust the delay as needed
  };

  const answerChoices = [
    question.mcqChoice1,
    question.mcqChoice2,
    question.mcqChoice3,
    question.mcqChoice4,
  ];

  React.useEffect(() => {
    setValue(null);
    setError(false);
    setHelperText(null);
    setRadioColor("default");
    setDisable(false);
  }, [question]);
  
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === answerChoices[question.mcqCorrect - 1]) {
      setHelperText("You got it!");
      setError(false);
      setRadioColor("success");
      setDisable(true);
      document.getElementById(value).style.color = "green";
      setColor("black");
      // document.getElementById("radiobuttoon").style.color = "black";
    } else if (
      value !== answerChoices[question.mcqCorrect - 1] &&
      value != null
    ) {
      document.getElementById(value).style.color = "darkred";
      setHelperText("Sorry, wrong answer. Try again!");
      setRadioColor("danger");
      setError(true);
    } else if (value == null) {
      setHelperText("Please select an option.");
      setRadioColor("danger");
      setError(true);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme} key="mcq-1">
        <CardGrid key="mcq-2">
          <VertStack key="mcq-3">
            <QuestionText
              key="mcq-4"
              variant="h4"
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              {question.mcqQuestion}
            </QuestionText>
            <form key="mcq-5" onSubmit={handleSubmit}>
              <FormControl key="mcq-6">
                <RadioGroup
                  key="mcq-7"
                  aria-labelledby="mcq-question"
                  name="mcq-question-radio-group"
                  onChange={handleRadioChange}
                >
                  {answerChoices &&
                    answerChoices.map((answerChoice) => (
                      <>
                        <CustomRadio
                          key="mcq-8"
                          value={answerChoice}
                          component={motion.div}
                          initial="hidden"
                          animate="visible"
                          variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: {
                                duration: 1,
                                delay:
                                  0.5 + answerChoices.indexOf(answerChoice) / 4,
                              },
                            },
                          }}
                          control={
                            <Radio
                              key="mcq-9"
                              style={{
                                color:
                                  answerChoice ===
                                  answerChoices[question.mcqCorrect - 1]
                                    ? "white"
                                    : radioButtonColor,
                              }}
                              color="default"
                              disabled={
                                answerChoice !==
                                answerChoices[question.mcqCorrect - 1]
                                  ? disable
                                  : false
                              }
                            />
                          }
                          label={answerChoice}
                          id={answerChoice}
                          sx={{ ...formControlLabelStyle }}
                        />
                      </>
                    ))}
                </RadioGroup>
                <FormHelperText
                  key="mcq-10"
                  variant=""
                  sx={{
                    color:
                      radioColor === "success"
                        ? "green"
                        : radioColor === "danger"
                        ? "darkred"
                        : "default",
                    fontSize: "1.5rem",
                  }}
                >
                  {helperText}
                </FormHelperText>
                <CheckButton
                  key="mcq-11"
                  variant="contained"
                  type="submit"
                  component={motion.div}
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants}
                >
                  <DisplayText key="mcq-12" variant="h6">
                    Check
                  </DisplayText>
                </CheckButton>
              </FormControl>
            </form>
          </VertStack>
        </CardGrid>
      </ThemeProvider>
    </>
  );
}
