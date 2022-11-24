import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/layout'
import NavBar from '../components/nav'
import Search from '../components/search'
import Footer from '../components/footer'
import styled from 'styled-components'
import SEO from '../components/seo'

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Flex>
        <NavBar />
        <Search />
        <Footer />
      </Flex>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="Antonio Lázaro" />
