import * as React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding-top: 39px;
  padding-bottom: 39px;
`

const StyledText = styled.p`
  font-size: 17px;
  font-weight: 400;
  font-family: Avenir;
  color: ${({ theme }) => theme.colors.footerText};

  a {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.footerHighlightedText};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) =>
        `rgba(${theme.colors.footerHighlightedText}, 0.7)`};
    }
  }

  @media (${({ theme }) => theme.bp.desktopS}) and (orientation: landscape) {
    font-size: 14px;
  }

  @media (${({ theme }) => theme.bp.tabletS}) {
    font-size: 14px;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>
        Explore it on{' '}
        <a href="https://github.com/antonio-lazaro/personal-web-v1">GitHub</a>
      </StyledText>
    </StyledFooter>
  )
}

export default Footer
