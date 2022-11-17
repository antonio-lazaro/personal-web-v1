import * as React from 'react'
import styled from 'styled-components'

const StyledResults = styled.div`
  margin-top: 46px;
`

const Answer = styled.p`
  font-size: 22px;
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
