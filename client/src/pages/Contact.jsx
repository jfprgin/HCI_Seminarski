import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroImg from '../assets/contactBackdrop.jpg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #E8E8E1;
    min-height: 100vh;
`

const ContactContainer = styled.div`
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
    width: 60%;
    min-width: 300px;
    padding: 20px;
    text-align: center;

    ${mobile({ width: "90%", padding: "10px" })}
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

const EmailAndName = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({ flexDirection: "column" })}
`

const LableAndInput = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
`

const Message = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
`

const Input = styled.input`
    color: #231F20;
    flex: 1;
    margin: 10px 0px 20px 0px;
    padding: 10px;
`

const Text = styled.textarea`
    color: #231F20;
    flex: 1;
    margin: 10px 0px 20px 0px;
    padding: 40px;
`

const Button = styled.button`
    border: none;
    padding: 15px 20px;
    background-color: #231F20;
    color: #E8E8E1;
    font-weight: 600;
    cursor: pointer;
    margin: 0px 10px 30px 10px;

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        background-color: black;
        cursor: not-allowed;
    }
`

const Contact = () => {
  return (
    <Container>
        <Navbar />
        <Hero>
            <HeroImage src={heroImg} />
            <HeroImageMask />
            <HeroText>Contact</HeroText>
        </Hero>
        <ContactContainer>
            <Wrapper>
                <Form>
                    <EmailAndName>
                        <LableAndInput >
                            <FormLabel>Name</FormLabel>
                            <Input />
                        </LableAndInput>
                        <LableAndInput>
                            <FormLabel>Email</FormLabel>
                            <Input/>
                        </LableAndInput>
                    </EmailAndName>
                    <Message>
                        <FormLabel>Message</FormLabel>
                        <Text/>
                    </Message>
                    <Button>Send</Button>
                </Form>
            </Wrapper>
        </ContactContainer>
        <Footer />
    </Container>
  )
}

export default Contact