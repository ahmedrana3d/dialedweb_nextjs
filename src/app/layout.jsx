import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Navigation } from "./Navigation";
import { Cookies } from "./Cookies";
import Loading from "./Loading";
import { Suspense } from "react";

export const metadata = {
  title: "Dialedweb | Cutting-Edge Website Design & Custom Digital Solutions",
  description: "Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {/* <Cookies /> */}
        <Suspense fallback={<Loading />} >
          {children}
        </Suspense>
      </body>
    </html>
  );
}
