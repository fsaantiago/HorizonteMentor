import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import NavBar from "@/app/componentes/navbar/page";
import Footer from "../app/componentes/footer/page";
import Home from "../app/views/HomeView";
import About from "../app/views/AboutView";
import Benefits from "../app/views/BenefitsView";
import Testimony from "../app/views/TestimonyView";
import JoinUsView from "@/app/views/JoinUsView";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Horizonte Mentor",
  description: "Conectando saberes, transformando vidas",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-BR">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <NavBar  />
        <Home/>
        <About/>
        <Benefits/>
        <Testimony/>
        <JoinUsView/>
        <Footer/>
        </body>
      </html>
  );
}
