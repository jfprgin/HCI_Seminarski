import React from 'react'
import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60vh;
    background-color: #E8E8E1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${mobile({ height: "50vh" })}
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;

    ${mobile({ fontSize: "50px" })}
`

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid #231F20;
    ${mobile({ width: "80%" })}
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #533710;
    color: #E8E8E1;

    &:hover {
        background-color: #231F20;
        cursor: pointer;
    }
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder="Your email" />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter