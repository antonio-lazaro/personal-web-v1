import React from 'react'
import theme from '../styles/theme'
import GlobalStyle from '../styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'

interface Props {
  children: Array<JSX.Element> | JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </div>
  )
}

export default Layout

export const Head = () => {
  return <title>Hello World</title>
}
