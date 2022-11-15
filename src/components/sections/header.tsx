import * as React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledTitle = styled.h1`
  text-align: center;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>Antonio Lázaro</StyledTitle>
    </StyledHeader>
  )
}

export default Header
