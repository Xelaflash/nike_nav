"use client";

import { useState } from "react";
import { Header } from "./Header";
import { NavigationBar } from "./NavigationBar";
import { PromoBar } from "./PromoBar";
import { Topnav } from "./TopNav";
import React from "react";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { css } from "../../styled-system/css";

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    const previous = scrollY.getPrevious();
    if (latestScrollY > previous && latestScrollY > 34) {
      setHidden(true);
    } else if (latestScrollY < previous && latestScrollY > 34) {
      setIsFixed(true);
      setHidden(false);
    } else if (latestScrollY < previous && latestScrollY < 34) {
      setIsFixed(false);
      setHidden(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <div>
      <Topnav />
      <NavigationBar
        style={
          hidden
            ? { transform: "translateY(-96px)", transition: "transform .35s ease" }
            : isFixed
              ? { position: "fixed", top: "-60px", transform: "translateY(60px)", transition: "transform .35s ease" }
              : {}
        }
      />
      <div style={isFixed ? { display: "block", height: "60px" } : { display: "none" }} />
      <PromoBar autoPlay interval={5000} />
      <Header />
    </div>
  );
}

export { Navbar };
