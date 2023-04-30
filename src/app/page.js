"use client";

import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Hero from "./components/Main";
import "tailwindcss/tailwind.css";
import "./styles/global.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [section, setSection] = useState("home");
  return (
    <main>
      <Navbar section={section} setSection={setSection} />
      <Hero />
    </main>
  );
}
