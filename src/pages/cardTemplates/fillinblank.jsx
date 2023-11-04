import React from "react";
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
  TextField,
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
    width: 100%;
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

const TextFieldStyled = styled(TextField)`
  && {
    margin: 1rem;
    width: 50vw;
    font-size: 2rem;
    color: white;
  }
`;

const DisplayText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    color: black;
    padding: 0.2rem;
    font-weight: 500;
    text-transform: none;
    color: white;
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

export default function FillInBlank({ question }) {
  const [value, setValue] = React.useState(null);
  const [helperText, setHelperText] = React.useState(null);
  const [helperColor, setHelperColor] = React.useState("default");
  const [disable, setDisable] = React.useState(false);

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Adjust the delay as needed
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } }, // Adjust the delay as needed
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.0 } }, // Adjust the delay as needed
  };

  const handleFieldChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.toLowerCase() === question.frqAnswer.toLowerCase()) {
      setHelperText("You got it!");
      setHelperColor("green");
      setDisable(true);
    } else if (
      value.toLowerCase() !== question.frqAnswer.toLowerCase() &&
      value !== null &&
      value !== ""
    ) {
      setHelperText("Sorry, wrong answer. Try again!");
      setHelperColor("darkred");
    } else if (value === null || value === "") {
      setHelperText("Please fill in an answer.");
      setHelperColor("default");
    }
  };
  return (
    <>
      <ThemeProvider theme={theme} key="fillinblank-tp-1">
        <CardGrid key="fillinblank-cg-1">
          <VertStack key="fillinblank-vs-1">
            <QuestionText
              variant="h4"
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              key="fillinblank-qt-1"
            >
              {question.frqQuestion}
            </QuestionText>
            <form onSubmit={handleSubmit} key="aiworcnoaiwnhcoiwanchfio">
              <FormControl key="fillinblank-fc-1">
                <TextFieldStyled
                  key="fillinblank-tfs-1"
                  type={
                    typeof question.frqCorrect === "number" ? "number" : "text"
                  }
                  placeholder="Type answer here"
                  variant="standard"
                  sx={{
                    input: { color: "#FFFFFF" },
                    label: { color: "#FFFFFF" },
                  }}
                  onChange={handleFieldChange}
                  disabled={disable}
                  inputProps={{ style: { fontSize: "1.5rem" } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: "1.5rem" } }} // font size of input label
                  component={motion.div}
                  initial="hidden"
                  animate="visible"
                  variants={subtitleVariants}
                />
                <FormHelperText
                  key="fillinblank-fht-1"
                  variant=""
                  sx={{ color: helperColor, fontSize: "1.5rem" }}
                >
                  {helperText}
                </FormHelperText>
                <CheckButton
                  variant="contained"
                  type="submit"
                  component={motion.div}
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants}
                  key="fillinblank-checkbutton-1"
                >
                  <DisplayText variant="h6" key="fillinblank-displtext-1">
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
