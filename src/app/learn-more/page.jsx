"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import LearnApp from "../pages/LearnMore/LearnApp";
import Learnmorepage from "../pages/LearnMore/Learnmorepage";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const LearnPage = () => {

    return (
      <>
      <ReactLenis root >
        <Learnmorepage />
      </ReactLenis>
      </>
    )
}

export default LearnPage;