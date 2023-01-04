import * as React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  border-radius: 4px;
  background: #4694ff;
  padding: 4px 8px;

  @media (${({ theme }) => theme.bp.tabletS}) {
    padding: 2px 7px;
  }
`

const StyledText = styled.p`
  font-size: 12.5px;
  font-weight: 700;
  color: white;

  @media (${({ theme }) => theme.bp.tabletS}) {
    font-size: 11px;
  }
`

const InDevTag = () => {
  return (
    <StyledContainer>
      <StyledText>IN DEV</StyledText>
    </StyledContainer>
  )
}

export default InDevTag
