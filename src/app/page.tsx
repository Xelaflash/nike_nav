import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <main>
      <div
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: "2",
          justifyContent: "center",
          height: "100vh",
          border: "1px solid red",
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
        navbar
      </div>
      {/* TODO: add viedo of effect here */}
    </main>
  );
}
