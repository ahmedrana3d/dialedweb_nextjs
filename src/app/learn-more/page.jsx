"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import LearnApp from "../pages/LearnMore/LearnApp";
import Learnmorepage from "../pages/LearnMore/Learnmorepage";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { SectionFooter } from "../pages/Main/SectionFooter";

const LearnPage = () => {

    return (
      <>
      <ReactLenis root >
        <Learnmorepage />
        <SectionFooter />
      </ReactLenis>
      </>
    )
}

export default LearnPage;