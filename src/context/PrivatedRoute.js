import React, { useContext, useState } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import Lottie from "react-lottie";
import { Navigate, Outlet, useLocation } from "react-router";
import { AuthContext } from "./AuthContext";
import * as loadingData from "../loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export const PrivatedRoute = () => {
  const location = useLocation();
  const { user, roleUser, loading } = useContext(AuthContext);

  console.log("render", user, roleUser);
  if (loading) {
    console.log("loading");
    return <FadeIn>
      <Lottie options={defaultOptions} height={400} width={400} />
  </FadeIn>
  } else if (user && !roleUser) {
    console.log("wait for role");
    return <FadeIn>
      <Lottie options={defaultOptions} height={400} width={400} />
  </FadeIn>
  } else if (user && roleUser) {
    return <Outlet context={{ user, roleUser }} />;
  } else return <Navigate to="/login" state={{ form: location }}></Navigate>;
};
