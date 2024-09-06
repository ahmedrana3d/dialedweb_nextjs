"use client";
import React, { useEffect } from "react";
import "./App.css";
import Learn from "./Learn";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const LearnApp = () => {

  return (
    <div className="learn-more-overflow overflow-x-hidden">
      <Learn />
    </div>
  );
};

export default LearnApp;