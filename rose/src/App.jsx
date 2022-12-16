import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeFront } from "./pages/HomeFront";
import { LandingPage } from "./pages/LandingPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeFront />} />
      <Route path="/rose" element={<LandingPage />} />
    </Routes>
  );
};
