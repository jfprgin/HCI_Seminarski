import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mobile } from '../responsive'

const Container = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 400px;
    max-width: 20vw;
    display: flex;
    flex-direction: column;
    text-align: left;
    height: 100%;

    ${mobile({ borderBottom: "1px solid #231F20", marginBottom: "20px", minWidth: "350px" })};
`

const Image = styled.img`
    width: 100%;
    height: 50vh;
    object-fit: cover;
    margin-bottom: 10px;
    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.01);
    }

    ${mobile({ height: "30vh" })};
`

const Title = styled(Link)`
    font-size: 30px;
    font-weight: 600;
    font-family: 'EB Garamond', serif;
    text-decoration: none;
    color: #231F20;
    margin-bottom: 10px;

    &:hover{
        opacity: 0.5;
    }

    ${mobile({ fontSize: "24px" })};
`

const Preview = styled.p`
    font-size: 16px;
    padding-bottom: 10px;

    ${mobile({ fontSize: "14px" })};
`

const Article = ({item}) => {
  return (
    <Container>
        <Link to={`/article/${item._id}`}>
            <Image src={item.coverImage} />
        </Link>
        <Title to={`/article/${item._id}`}>{item.title}</Title>
        <Preview>{item.preview}</Preview>
    </Container>
  )
}

export default Article