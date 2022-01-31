import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
};


body {
    font-family: 'IBM Plex Sans', sans-serif;
    background-color: #fff;
}`;

export default GlobalStyles;
