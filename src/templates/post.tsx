import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/layout'
import styled from 'styled-components'
import NavBar from '../components/nav'
import Footer from '../components/footer'

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`

const Content = styled.div`
  flex: 1;
  padding: 0 20px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 40px;

  @media (min-width: 816px) {
    margin: 0 auto;
    width: 816px;
  }
`

const Title = styled.h1`
  font-size: 40px;
  position: relative;
  display: inline-block;
  width: 100%;
  padding-bottom: 0.3em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Paragraph = styled.p`
  font-family: var(--font-serif);
  margin-top: 40px;
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.postParagraph};
  width: 100%;
`

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  children?: Array<JSX.Element> | JSX.Element
}

const PostTemplate = ({ data, children }: Props) => {
  return (
    <Layout>
      <Flex>
        <NavBar />
        <Content>
          <Title>{data.mdx.frontmatter.title}</Title>
          <MDXProvider
            components={{
              p: Paragraph,
            }}
          >
            {children}
          </MDXProvider>
        </Content>
        <Footer />
      </Flex>
    </Layout>
  )
}

export default PostTemplate

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
