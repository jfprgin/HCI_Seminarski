import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroImg from '../assets/blogBackdrop.png'
import Articles from '../components/Articles'
import Announcement from '../components/Announcement'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #E8E8E1;
    min-height: 100vh;
`
const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5vh 0px;

    ${mobile({ margin: "2vh 0px" })}
`

const Hero = styled.div`
    width: 100%;
    height: 45vh;
    position: relative;
    align-items: center;
    justify-content: center;
    text-align: center;

    ${mobile({ height: "20vh" })}
`

const HeroImage = styled.img`
    width: 100%;
    height: 45vh;
    object-fit: cover;

    ${mobile({ height: "20vh" })}
`

const HeroImageMask = styled.div`
    width: 100%;
    height: 45vh;
    background-color: rgba(14, 12, 13, 0.4);
    position: absolute;
    top: 0;
    left: 0;

    ${mobile({ height: "20vh" })}
`

const HeroText = styled.div`
    color: #E8E8E1;
    font-size: 96px;
    font-weight: 300;
    font-family: 'EB Garamond', serif;
    position: absolute;
    top: 50%; /* Move the text 50% down from the top of the container */
    left: 50%; /* Move the text 50% from the left of the container */
    transform: translate(-50%, -50%); /* Center the text both horizontally and vertically */

    ${mobile({ fontSize: "64px" })}
`

const Wrapper = styled.div`
    min-width: 300px;
    padding: 20px;
    text-align: center;

    ${mobile({ padding: "10px" })}
`

// In the BlogContainer, there are 3 articles per row, make up data for the articles. Title, image and preview text.
const Blog = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Hero>
            <HeroImage src={heroImg} />
            <HeroImageMask />
            <HeroText>Blog</HeroText>
        </Hero>
        <BlogContainer>
            <Wrapper>
                <Articles />
            </Wrapper>
        </BlogContainer>
        <Footer />
    </Container>
  )
}

export default Blog