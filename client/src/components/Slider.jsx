import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

//When screen size is to narrow, the info container will be under the image container

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;                 // This is for the arrows to be positioned absolutely
    overflow: hidden;

    ${mobile({ height: "40vh" })};
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    position: relative;
    display: flex;
    position: relative;
    height: 90vh;
    width: 100vw;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    background-color: #E8E8E1;

    ${mobile({ height: "40vh" })};
`

const ImgContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    height: 100%;

    ${mobile({ height: "40vh" })};
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;

    ${mobile({ height: "40vh" })};
`

const ImageMask = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(14, 12, 13, 0.4);
    position: absolute;
    top: 0;
    left: 0;

    ${mobile({ height: "40vh" })};
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;

    ${mobile({ textAlign: "center", alignItems: "center" })};
`

const Title = styled.h1`
    font-family: 'EB Garamond', serif;
    font-size: 64px;
    color: #E8E8E1;
    font-weight: 600;
    text-align: center;
    padding-top: 10vh;

    ${mobile({ fontSize: "40px", paddingTop: "0vh" })};
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    color: #E8E8E1;

    ${mobile({ fontSize: "16px" })};
`

const Button = styled.button`
    font-family: 'EB Garamond', serif;
    font-size: 40px;
    color: #E8E8E1;
    text-align: center;
    padding: 10px 30px;
    border: 1px solid #E8E8E1;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        background-color: #E8E8E1;
        color: #231F20;
        opacity: 0.7;
        scale: 1.1;
    }

    &:focus {
        outline: none;
    }
`

const ButtonLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-family: 'EB Garamond', serif;
    font-size: 40px;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    // Slide slider to the left every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }, 10000)
        return () => clearInterval(interval)
    }, [slideIndex])

  return (
    <Container>  
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item => (
                <Slide key={item.id}>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <ImageMask />
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>
                            <ButtonLink to="/products/Any" >SHOP NOW</ButtonLink>
                        </Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
    </Container>
  )
}

export default Slider