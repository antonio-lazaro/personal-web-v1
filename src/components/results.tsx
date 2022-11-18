import * as React from 'react'
import styled from 'styled-components'

const StyledResults = styled.div`
  width: 100%;
  margin-top: 46px;
  padding-bottom: 30px;

  @media (${({ theme }) => theme.bp.tabletS}) {
    margin-top: 36px;
  }
`

const Answer = styled.p`
  width: 100%;
  font-size: 22px;
  line-height: 33px;

  @media (${({ theme }) => theme.bp.desktopS}) {
    font-size: 18px;
  }

  @media (${({ theme }) => theme.bp.tabletS}) {
    font-size: 18px;
    line-height: 33px;
  }
`

const Results = () => {
  return (
    <StyledResults>
      <Answer>
        I studied Telecommunications Engineering in Madrid, Spain.
      </Answer>
    </StyledResults>
  )
}

export default Results
