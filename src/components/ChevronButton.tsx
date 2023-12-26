import { css } from "../../styled-system/css";

type ChevronButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
};

const ChevronButton: React.FC<ChevronButtonProps> = ({ direction, onClick }) => {
  return (
    <button
      className={css({
        height: "40px",
        width: "40px",
        opacity: "0.4",
        cursor: "pointer",
        _hover: {
          opacity: "1",
          transition: "all 0.25s ease-in 0s",
        },
      })}
      onClick={onClick}
      type="button"
    >
      <svg
        className={css({
          transform: direction === "right" ? "rotate(180deg)" : "",
          height: "14px",
          width: "14px",
        })}
        fill="#111"
        height="30px"
        width="30px"
        viewBox="0 0 185.4 300"
      >
        <title>Chevron</title>
        <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z" />
      </svg>
    </button>
  );
};

export default ChevronButton;
