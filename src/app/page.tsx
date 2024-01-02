import { ProductGrid } from "@/components/ProductGrid";
import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <main
      className={css({
        maxWidth: "1920px",
        padding: "0 48px",
      })}
    >
      <ProductGrid />
      <div
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: "2",
          justifyContent: "center",
          margin: "128px 0",
          background: "#F6F6F6",
          padding: "32px",
        })}
      >
        Mini App to reproduce{" "}
        <a
          href="https://nike.com"
          target="_blank"
          rel="noopener noreferrer"
          className={css({
            textDecoration: "underline",
            _hover: {
              textDecoration: "none",
            },
          })}
        >
          {" "}
          nike.com
        </a>{" "}
        navbar animations (not made responsive)
      </div>
    </main>
  );
}
