import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./pages/website-constants/Theme.jsx";
import Courses from "./pages/Courses.jsx";
import axios from "axios";
import Loading from "./pages/website-constants/loading.jsx";
import NotFound from "./pages/website-constants/notfoundpage.jsx";
import ProtectedRoutes from "./pages/ProtectedRoutes.jsx";
const MathLearningPath = lazy(() => import("./pages/mathlearningpath.jsx"));
const BioLearningPath = lazy(() => import("./pages/biolearningpath.jsx"));
const Landing = lazy(() => import("./pages/Landing"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const BiotechnologyPage = lazy(() => import("./pages/biotechnology"));
const AppliedMathPage = lazy(() => import("./pages/appliedmath"));

function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
    // document.body.style.overflow = "hidden";
  //   const fetchLoginStatus = async () => {
  //     try {
  //       const res = await axios.post("/api/auth/authenticate", {
  //         withCredentials: true,
  //         credentials: "include",
  //       });

  //       console.log(res);
  //       const user = res.data;
  //       setLoggedIn(true);
  //     } catch (err) {
  //       console.log(err.response.data.status);
  //       setLoggedIn(false);
  //     }
  //   };
  //   fetchLoginStatus();
  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>; // Show loading indicator
  // }

  return (
    <ThemeProvider theme={theme} key="app-1">
      <div className="App" key="app-2">
        <BrowserRouter key="app-3">
          <Suspense fallback={<Loading key="app-4" />} key="app-5">
            <Routes key="app-6">
              <Route
                key="app-7"
                path="/login"
                element={
                    <Login key="app-9" />
                }
              />
              <Route
                key="app-11"
                path="/biotechnology/:lessonid"
                element={
                  <ProtectedRoutes>
                    <BioLearningPath />
                  </ProtectedRoutes>
                }
              />
              <Route
                key="app-15"
                path="/courses"
                element={
                  <ProtectedRoutes>
                    {" "}
                    <Courses />{" "}
                  </ProtectedRoutes>
                }
              />
              <Route
                key="app-19"
                path="/engineering/:lessonid"
                element={
                  <ProtectedRoutes>
                    <MathLearningPath key="app-20" />
                  </ProtectedRoutes>
                }
              />
              <Route
                ey="app-23"
                path="/"
                element={
                    <Landing key="app-24" />
                }
              />
              <Route
                key="app-21"
                path="/signup"
                element={
                    <Signup key="app-22" />
                }
              />
              <Route
                key="app-25"
                path="/biotechnology"
                element={
                  <ProtectedRoutes>
                    {" "}
                    <BiotechnologyPage key="app-26" />{" "}
                  </ProtectedRoutes>
                }
              />
              <Route
                key="app-29"
                path="/engineering"
                element={
                  <ProtectedRoutes>
                    <AppliedMathPage key="app-30" />
                  </ProtectedRoutes>
                }
              />
              <Route key="app-33" path="*" element={<NotFound></NotFound>} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
