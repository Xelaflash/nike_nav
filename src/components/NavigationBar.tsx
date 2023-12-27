import { css } from "../../styled-system/css";

const linkStyles = css({
  height: "100%",
  display: "flex",
  alignItems: "center",
  borderBottom: "2px solid transparent",
  _hover: {
    borderBottom: "2px solid black",
  },
});

const svgStyles = css({
  padding: "8px",
  cursor: "pointer",
  borderRadius: "100px",
  _hover: {
    background: "#e5e5e5",
  },
});

function NavigationBar() {
  return (
    <div
      className={css({
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 38px 0 36px",
        height: "60px",
      })}
    >
      <svg
        focusable="false"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        fill="none"
        className={css({
          display: "block",
          fill: "currentColor",
          height: "60px",
          width: "60px",
          transform: "scale(1.33)",
        })}
      >
        <title>Nike Logo</title>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
          clipRule="evenodd"
        />
      </svg>
      <ul
        className={css({
          fontWeight: "500",
          display: "flex",
          alignItems: "center",
          height: "100%",
          gap: "20px",
          cursor: "pointer",
        })}
      >
        <li className={linkStyles}>New & Featured</li>
        <li className={linkStyles}>Men</li>
        <li className={linkStyles}>Women</li>
        <li className={linkStyles}>Kids</li>
        <li className={linkStyles}>Accessories</li>
        <li className={linkStyles}>Sale</li>
      </ul>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "24px",
        })}
      >
        <div
          className={css({
            position: "relative",
            height: "45px",
          })}
        >
          <div
            className={css({
              position: "absolute",
              right: "0",
              background: "#f5f5f5",
              borderRadius: "100px",
              height: "45px",
              width: "180px",
            })}
          >
            <button
              type="button"
              className={css({
                zIndex: "1",
                position: "absolute",
                top: "1px",
                left: "0",
                padding: "10px",
                borderRadius: "100px",
                _hover: {
                  background: "#e5e5e5",
                },
              })}
            >
              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="24px" height="24px" fill="none">
                <title>Search</title>
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
                />
              </svg>
            </button>
            <input
              type="text"
              className={css({
                position: "absolute",
                bottom: "0",
                left: "0",
                background: "#f5f5f5",
                width: "100%",
                height: "100%",
                padding: "8px 45px",
                fontSize: "14px",
                cursor: "text",
                borderRadius: "100px",
                _hover: {
                  background: "#e5e5e5",
                },
              })}
              placeholder="Search"
            />
          </div>
        </div>
        {/* right part */}
        <div
          className={css({
            display: "flex",
            gap: "16px",
          })}
        >
          <div className={svgStyles}>
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="24px" height="24px" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
              />
            </svg>
          </div>
          <div className={svgStyles}>
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="24px" height="24px" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export { NavigationBar };
