import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useState } from 'react'
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    background-color: #E8E8E1;
`
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;
    margin-bottom: 10vh;
`

const Wrapper = styled.div`
    width: 25%;
    max-width: 500px;
    min-width: 300px;
    padding: 20px;
    text-align: center;
    ${mobile({ width: "75%" })};
`

//Use EB Garamond font for title
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

const Password = styled.span`
    color: #231F20;
    font-size: 14px;
    font-weight: 300;
`

const Input = styled.input`
    color: #231F20;
    flex: 1;
    min-width: 40%;
    margin: 10px 0px 20px 0px;
    padding: 10px;
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

const Link = styled.a`
    color: #231F20;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`

const Error = styled.span`
    color: red;
`

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const {isFetching, error} = useSelector(state => state.user)

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
    }

  return (
    <Container>
        <Navbar />
        <LoginContainer>
            <Wrapper>
                <Title>Login</Title>
                <Form>
                    <FormLabel>Username</FormLabel>
                    <Input onChange={e => setUsername(e.target.value)} />
                    <FormLabel>
                        <Password>Password</Password>
                        <Link>Forgot Password?</Link>
                    </FormLabel>
                    <Input type="password" onChange={e => setPassword(e.target.value)} />
                    <Button onClick={handleClick} disabled={isFetching}>Sign In</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Link href="/register" >
                        Create a New Account
                    </Link>
                </Form>
            </Wrapper>
        </LoginContainer>
        <Footer />
    </Container>
  )
}

export default Login