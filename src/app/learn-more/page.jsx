"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import LearnApp from "../pages/LearnMore/LearnApp";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const LearnMorePage = () => {

    return (
      <>
      <ReactLenis root >
        <LearnApp />
      </ReactLenis>
      </>
    )
}

export default LearnMorePage;