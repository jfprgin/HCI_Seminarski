import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    background-color: #E8E8E1;
`
const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;
    margin-bottom: 10vh;
`

const Wrapper = styled.div`
    width: 25%;
    max-width: 500px;
    min-width: 300px;q
    padding: 20px;
    text-align: center;
    ${mobile({ width: "75%" })};
`

const Title = styled.h1`
    color: #231F20;
    font-size: 64px;
    font-weight: 300;
    text-align: center;
    padding-bottom: 10vh;
    font-family: 'EB Garamond', serif;
`

const Form = styled.form`
    color: #231F20;
    display: flex;
    flex-direction: column;
`

const FormLabel = styled.label`
    color: #231F20;
    font-size: 14px;
    font-weight: 300;
    display: flex;
    justify-content: space-between;
`


const Blog = () => {
  return (
    <Container>
        <Navbar />
        <BlogContainer>
          <Title>Blog</Title>
        </BlogContainer>
        <Footer />
    </Container>
  )
}

export default Blog