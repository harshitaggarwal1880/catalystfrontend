import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loading from "../pages/website-constants/loading.jsx";


const ProtectedRoutes = ({ children }) => {

  const [loggedIn, setLoggedIn] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setLoading(true);
    axios   
      .post("/api/auth/authenticate", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        console.log(res);
        const user = res.data;
        setLoggedIn(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data.status);
        navigate("/login")
        setLoggedIn(false);
      });
  }, []);

  
  return loading ? <Loading /> : children;
};

export default ProtectedRoutes;
