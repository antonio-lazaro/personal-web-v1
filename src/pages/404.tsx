import * as React from 'react'
import { Link, HeadFC, PageProps } from 'gatsby'
import styled from 'styled-components'
import Footer from '../components/footer'
import NavBar from '../components/nav'

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  a {
    text-decoration: none;
  }
`

const Content = styled.div`
  flex: 1;
  padding: 0 20px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 816px) {
    margin: 0 auto;
    width: 816px;
  }
`

const BigNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 101px;
    font-weight: 700;
  }

  h3 {
    margin-top: 5px;
    font-size: 20px;
    font-weight: 700;
  }

  @media (max-width: 620px) {
    h1 {
      font-size: 101px;
    }

    h3 {
      font-size: 20px;
    }
  }
`

const HomeLink = styled.div`
  margin-top: 44px;
  padding: 9px 21px;
  border-radius: 30px;
  background-color: #4694ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.46px;
`

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <Flex>
        <NavBar />
        <Content>
          <BigNotFound>
            <h1>404</h1>
            <h3>NOT FOUND</h3>
          </BigNotFound>

          <Link to="/">
            <HomeLink>GO HOME</HomeLink>
          </Link>
        </Content>
        <Footer />
      </Flex>
    </>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
