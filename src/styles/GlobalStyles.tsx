import { createGlobalStyle } from "styled-components";

const CustomStyles = createGlobalStyle({
  "*": {
    fontWeight: "normal",
    scrollBehavior: "smooth",
  },
  body: {
    minHeight: "100vh",
    color: "#FFF",
  },
  li: {
    display: "list-item",
  },
  ul: {
    padding: "0",
    margin: "0",
  },
  h1: {
    fontSize: "2rem",
  },
  h2: {
    fontSize: "1.5rem",
  },
  h3: {
    fontSize: "1.7rem",
  },
  h4: {
    fontSize: "1rem",
  },
  h5: {
    fontSize: "0.83rem",
  },
  h6: {
    fontSize: "0.6rem",
  },
  img: {
    pointerEvents: "none",
  }

});

const GlobalStyles = () => (
  <>
    <CustomStyles />
  </>
);

export default GlobalStyles;
