import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Header from '../components/sections/header'
import Layout from '../components/layout'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
