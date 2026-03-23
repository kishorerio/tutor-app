import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy-Regular';
    src: url('/fonts/Gilroy-Regular.ttf') format('opentype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Gilroy-Light';
    src: url('/fonts/Gilroy-Light.ttf') format('opentype');
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Gilroy-SemiBold';
    src: url('/fonts/Gilroy-SemiBold.ttf') format('opentype');
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Gilroy-ExtraBold';
    src: url('/fonts/Gilroy-ExtraBold.ttf') format('opentype');
    font-style: normal;
    font-weight: 800;
  }

  @font-face {
    font-family: 'Gilroy-Black';
    src: url('/fonts/Gilroy-Black.ttf') format('opentype');
    font-style: italic;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Gilroy-Bold';
    src: url('/fonts/Gilroy-Bold.ttf') format('opentype');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Gilroy-BoldItalic';
    src: url('/fonts/Gilroy-BoldItalic.ttf') format('opentype');
    font-style: italic;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Gilroy-Medium';
    src: url('/fonts/Gilroy-Medium.ttf') format('opentype');
    font-style: normal;
    font-weight: 500;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Gilroy-Regular', sans-serif;
  }
`;

export default GlobalStyles;
