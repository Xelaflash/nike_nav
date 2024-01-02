"use client";
import { useEffect, useState } from "react";
import ChevronButton from "./ChevronButton";
import { css } from "../../styled-system/css";
import { motion, AnimatePresence, wrap } from "framer-motion";

type PromoBarProps = {
  autoPlay: boolean;
  interval: number;
};

const offers = [
  { text: "GIVE THE GIFT THAT ALWAYS FITS", link: "Shop now" },
  { text: "GIVE WINTER SALE: UP TO 50% OFF ❄️	", link: "No code needed. Shop now." },
  { text: "Bla Bla bla Bla", link: "Click or die" },
  { text: "SPEND your money please", link: "Buy Here" },
];

// !!⚠️ Code is produced by ChatGpt, for the fun of it. I may or may not have written this myself. Actually I did refactor to animate it with framer motion and to use pandaCSS.

const PromoBar: React.FC<PromoBarProps> = ({ autoPlay = true, interval = 5000 }) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const offerIndex = wrap(0, offers.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!autoPlay) {
      return;
    }
    const timer = setInterval(() => paginate(1), interval);
    return () => clearInterval(timer);
  }, [autoPlay, paginate, interval]);

  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "rgb(247, 247, 247)",
        height: "60px",
        width: "100vw",
        boxShadow: "rgb(229, 229, 229) 0px -1px 0px 0px inset",
      })}
    >
      <div
        className={css({
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // border: "1px solid red",
          width: "768px",
          padding: "0 38px 0 36px",
        })}
      >
        <ChevronButton direction="left" onClick={() => paginate(-1)} />
        <AnimatePresence initial={false}>
          <motion.div
            key={page}
            className={css({
              position: "absolute",
              left: "10%",
              transform: "translateX(-10%)",
              textAlign: "center",
              margin: "0 auto",
              width: "650px",
              // border: "1px solid green",
            })}
            initial={{ x: 600, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -600, opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <p
              className={css({
                fontSize: "16px",
                fontWeight: "500",
                margin: "0 8px",
              })}
            >
              {offers[offerIndex].text}
              <a
                href="/"
                className={css({
                  marginLeft: "16px",
                  textDecoration: "underline",
                  color: "#111",
                  fontWeight: "bold",
                  fontSize: "12px",
                })}
              >
                {offers[offerIndex].link}
              </a>
            </p>
          </motion.div>
        </AnimatePresence>
        <ChevronButton direction="right" onClick={() => paginate(1)} />
      </div>
    </div>
  );
};

export { PromoBar };
