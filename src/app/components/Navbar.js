"use client";

import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import styles from "./LinkEffect.css";

function Navbar({ section, setSection }) {
  const links = ["MUSIC", "TOUR", "SHOP", "VIDEOS"];
  const [textColor, setTextColor] = useState("white");
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    // Remove this comment
    console.log(position);
    if (position > 800) {
      setTextColor("black");
    }
    if (position < 800) {
      setTextColor("white");
    }
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <div
        style={{
          position: "-webkit-sticky",
        }}
        className={`flex flex-col sticky top-24 z-10 mr-3 text-${textColor}`}
      >
        {links.map((link, i) => {
          return (
            <a
              key={i}
              href="#"
              onClick={() => setSection(link)}
              className={
                link === section
                  ? "font-bold pb-10 link ml-auto"
                  : "link pb-10 ml-auto"
              }
              style={{
                writingMode: "vertical-lr",
              }}
            >
              {link}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
