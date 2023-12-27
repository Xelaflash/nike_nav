import { css } from "../../styled-system/css";

function Header() {
  return (
    <>
      <div
        className={css({
          marginTop: "16px",
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          color: "#111",
          fontSize: "14px",
          fontWeight: "500",
        })}
      >
        {/* // breadcrumbs */}
        <a href="/">Lifestyle</a>
        <span
          className={css({
            padding: "0 6px",
          })}
        >
          /
        </span>
        <a href="/">Shoes</a>
      </div>
      {/*  title + filter/sort */}
      <header
        className={css({
          padding: "0px 48px 15px",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        })}
      >
        <h1
          className={css({
            fontSize: "24px",
            fontWeight: "bold",
            lineHeight: 1.3,
            paddingBottom: "2px",
          })}
        >
          Mens Lifestyle Shoes (441)
        </h1>
        <nav
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          })}
        >
          <button
            aria-controls="left-nav"
            aria-describedby="Mens-Lifestyle-Shoes"
            aria-expanded="false"
            aria-label="Show Filters"
            type="button"
            className={css({
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              height: "40px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "400",
              paddingRight: "25px",
            })}
          >
            <span
              className={css({
                paddingRight: "8px",
              })}
            >
              Show Filters
            </span>
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="24px" height="24px" fill="none">
              <title>Filter</title>
              <path stroke="currentColor" strokeWidth="1.5" d="M21 8.25H10m-5.25 0H3" />
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clipRule="evenodd"
              />
              <path stroke="currentColor" strokeWidth="1.5" d="M3 15.75h10.75m5 0H21" />
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            aria-controls="sort-options"
            aria-expanded="false"
            aria-label="Sort By"
            id="dropdown-btn"
            role="listbox"
            type="button"
          >
            <span
              className={css({
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                height: "40px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "400",
              })}
            >
              <span
                className={css({
                  paddingRight: "8px",
                })}
              >
                Sort By
              </span>
              <span>
                <svg fill="#000000" height="14px" width="14px" version="1.1" id="Layer_1" viewBox="0 0 407.437 407.437">
                  <title>Chevron</title>
                  <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " />
                </svg>
              </span>
            </span>
          </button>
        </nav>
      </header>
    </>
  );
}
export { Header };
