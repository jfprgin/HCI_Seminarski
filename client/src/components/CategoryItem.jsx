import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
    flex: 1;
    margin: 10px;
    height: 60vh;
    position: relative;
    min-width: 400px;
    transition: all 0.5s ease;

    &:hover {
        opacity: 0.8;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "30vh"})}
`

const ImageMask = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(14, 12, 13, 0.4);
    position: absolute;
    top: 0;
    left: 0;
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    color: #E8E8E1;
    margin-bottom: 20px;
    font-size: 40px;
    font-family: 'EB Garamond', serif;
    font-weight: 100;
    text-align: center;
`

const Button = styled.button`
    border: none;
    padding: 10px 20px;
    background-color: #E8E8E1;
    color: #231F20;
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
    transition: all 0.5s ease;
    transition: all 0.5s ease;

    &:hover {
        background-color: #231F20;
        color: #E8E8E1;
        scale: 1.1;
    }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
            <Image src={item.img} />
            <ImageMask />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem