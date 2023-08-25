import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #E8E8E1;
    min-height: 100vh;
`

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5vh 0px;
`
// set min width to 500px
const Wrapper = styled.div`
    width: 25%;
    max-width: 500px;
    min-width: 300px;
    padding: 20px;
    text-align: center;

    ${mobile({ width: "75%" })};
`

const Title = styled.h1`
    color: #231F20;
    font-size: 64px;
    font-weight: 300;
    text-align: center;
    padding-bottom: 5vh;
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

const Input = styled.input`
    color: #231F20;
    flex: 1;
    min-width: 40%;
    margin: 10px 0px 20px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;    
    width: 100%;
`

const Button = styled.button`
    border: none;
    padding: 15px 20px;
    background-color: #231F20;
    color: #E8E8E1;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 30px;
    transition: all 0.5s ease;

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        background-color: black;
        cursor: not-allowed;
`

const Register = () => {
  return (
    <Container>
        <Navbar />
        <RegisterContainer>
            <Wrapper>
                <Title>Register</Title>
                <Form>
                    <FormLabel>First Name</FormLabel>
                    <Input />
                    <FormLabel>Last Name</FormLabel>
                    <Input />
                    <FormLabel>Email</FormLabel>
                    <Input/>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" />
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type="password" />
                    <Button>Create</Button>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                </Form>
            </Wrapper>
        </RegisterContainer>
        <Footer />
    </Container>
  )
}

export default Register