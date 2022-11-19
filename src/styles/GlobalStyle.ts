import { createGlobalStyle } from 'styled-components'
import variables from './variables'
import { lightTheme } from './theme'

const GlobalStyle = createGlobalStyle<{ theme: typeof lightTheme }>`
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
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.primaryText};
    font-family: var(--font-sans);
    transition: background 0.3s;
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
    color: ${({ theme }) => theme.colors.icon};
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

  a {
    color: ${({ theme }) => theme.colors.primaryText}
  }
`

export default GlobalStyle
