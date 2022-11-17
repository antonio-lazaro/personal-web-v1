import * as React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: #111111;
  font-size: 14px;
  font-weight: 550;
  color: var(--white);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 35px;
  padding-right: 35px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`

const DownloadCVButton = () => {
  return <StyledButton>Download CV</StyledButton>
}

export default DownloadCVButton
