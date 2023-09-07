import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { aboutUs } from '../data'
import { Link } from 'react-router-dom'

// Center the content of the page
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #E8E8E1;
  border-bottom: 1px solid #231F20;

  ${mobile({ border: "none" })};
`

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 5vw;
  margin-bottom: 5vh;
  ${mobile({ padding: "10px", marginBottom: "0vh" })};
`

const Title = styled.h1`
  font-family: 'EB Garamond', serif;
  font-size: 40px;
  color: #231F20;
  font-weight: 100;
  text-align: center;
  padding-top: 10vh;

  ${mobile({ fontSize: "40px", paddingTop: "0vh" })};
`

const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: #231F20;
  text-align: center;
  padding: 10px 20px;
  border: 1px solid #231F20;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s ease;
  margin: 20px auto;

  &:hover {
      background-color: #231F20;
      color: #E8E8E1;
  }

  &:focus {
      outline: none;
  }
`

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh 10vw;
  border-bottom: 1px solid #231F20;
  
  ${mobile({ padding: "5vh 5vw"})};
`

const AboutUsText = styled.div`
  font-family: 'EB Garamond', serif;
  text-align: center;
  font-size: 20px;
  letter-spacing: 3px;
  color: #231F20;
  padding: 5vh 0;

  ${mobile({ fontSize: "16px", padding: "2vh 0" })};
`

const Paragraph = styled.p`
  font-family: 'EB Garamond', serif;
  text-align: center;
  font-size: 20px;
  letter-spacing: 3px;
  color: #231F20;
  padding: 10px 0;

  ${mobile({ fontSize: "18px", padding: "2vh 0" })};
`

const Home = () => {
  return (
    <div style={{backgroundColor: "#E8E8E1"}}>
        <Navbar />
        <Announcement />
        <Slider />
        <Container>
          <Wapper>
          <Categories />
          <Title>New Arrivals</Title>
          <Button>
            <Link to="/products/Any" style={{textDecoration: "none", color: "inherit"}}>SHOP NOW</Link>
          </Button>
          <Products />
          </Wapper>
        </Container>
        <AboutUs>
          <Title>About Us</Title>
          <AboutUsText>
            {aboutUs.map((item) => (
              <Paragraph>{item}</Paragraph>
            ))}
          </AboutUsText>
        </AboutUs>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home
