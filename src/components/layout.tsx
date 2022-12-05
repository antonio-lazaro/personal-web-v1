import React from 'react'
import { lightTheme, darkTheme } from '../styles/theme'
import GlobalStyle from '../styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import usePrefersColorScheme from '../hooks/usePrefersColorScheme'

interface Props {
  children: Array<JSX.Element> | JSX.Element
}

const Layout = ({ children }: Props) => {
  const theme = usePrefersColorScheme()
  const isDarkTheme = theme === 'dark'

  return (
    <div id="root">
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </div>
  )
}

export default Layout
