import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mobile } from '../responsive'

const Container = styled.div`
    margin: 20px;
    width: 20vw;
    min-width: 300px;
    height: 50vh;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 20px;
    transition: all 0.5s ease;

    &:hover img {
        transform: scale(1.1);
    }

    ${mobile({ width: "80vw"})};
`

const ImageContainer = styled.div`
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
`

const Info = styled.div`
    font-family: 'EB Garamond', serif;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:hover {
        opacity: 0.8;
    }

    ${mobile({ borderBottom: "1px solid #231F20" })};
`

const Title = styled.div`
    color: #231F20;
    font-size: 32px;
    font-family: inherit;
`

const Size = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    font-family: inherit;
`

const Price = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    font-family: inherit;
    font-weight: 600;
`


const Product = ({item}) => {
  return (
    <Link to={`/product/${item._id}`} style={{textDecoration: "none", color: "inherit"}}>
        <Container>
            <ImageContainer>
                <Image src={item.img} />
            </ImageContainer>
            <Info>
                <Title>{item.title}</Title>
                <Size>{Array.isArray(item.size) ? item.size.join(' g, ') : `${item.size}`} g</Size>
                <Price>${item.price}</Price>
            </Info>
        </Container>
    </Link>
  )
}

export default Product