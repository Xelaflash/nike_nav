import { css } from "../../styled-system/css";

export default function Spacer() {
  return (
    <div
      className={css({
        height: "60px",
        width: "100%",
        // border: "1px solid red",
      })}
    />
  );
}

export { Spacer };
