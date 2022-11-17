import * as React from 'react'
import styled from 'styled-components'
import GitHubIcon from './icons/GitHubIcon'
import LinkedInIcon from './icons/LinkedInIcon'

const StyledHStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 19px;
`

const IconBox = styled.a`
  width: 20px;
  height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SocialLinks = () => {
  return (
    <StyledHStack>
      <IconBox
        href="https://github.com/antonio-lazaro"
        target="_blank"
        rel="noreferrer"
        className="icon"
      >
        <GitHubIcon />
      </IconBox>

      <IconBox
        href="https://www.linkedin.com/in/antonio-lazaro"
        target="_blank"
        rel="noreferrer"
        className="icon"
      >
        <LinkedInIcon />
      </IconBox>
    </StyledHStack>
  )
}

export default SocialLinks
