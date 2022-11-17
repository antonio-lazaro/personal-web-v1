import { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--white);
    color: var(--dark-grey);
    font-family: var(--font-sans);
  }

  #root {
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  .icon {
    color: #C2C2C2;
    width: 20px;
    aspect-ratio: 1;

    &:hover {
      color: #A6A6A6;
    }
  }

  blockquote {
    margin: 0;
    font-family: var(--font-serif);
  }
`

export default GlobalStyle
