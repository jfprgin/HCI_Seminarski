import React from 'react'
import styled from 'styled-components'
import { Facebook, Instagram, Twitter, Pinterest } from '@material-ui/icons'
import { mobile } from '../responsive'
import logo from '../assets/logoInverted.svg'
import { Link } from 'react-router-dom'

// Footer always at bottom of page
const Container = styled.div`
    display: flex;
    background-color: #231F20;
    color: #E8E8E1;
    align-items: center;
    flex-direction: column;
`

const Bottom = styled.div`
    width: 70%;
    display: flex;
    color: #E8E8E1;
    justify-content: space-between;
    align-items: center;

    ${mobile({ width: "90%", flexDirection: "column" })};
`

const CopyRight = styled.span`
    font-size: 14px;
    color: inherit;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    border-bottom: 1px solid #E8E8E1;

    ${mobile({ width: "90%", flexDirection: "column" })};
`

const Left = styled.div`
    flex: 1;
    display: flex;
    text-align: left;
    align-items: center;
    padding: 20px;

    ${mobile({ padding: "0px" })};
`

const Logo = styled.img`
    height: 80%;

    ${mobile({ display: "none" })};
`

const Center = styled.div`
    flex: 2;

    ${mobile({ display: "none" })};
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`

const Title = styled.h3`
    font-size: 48px;
    margin-bottom: 30px;
    font-family: 'EB Garamond', serif;
    font-weight: 600;

    ${mobile({ fontSize: "32px" })};
`

const List = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const ListItem = styled.li`
    font-size: 24px;
    margin-bottom: 10px;
    cursor: pointer;
    font-family: 'EB Garamond', serif;

    ${mobile({ fontSize: "18px", marginBottom: "5px" })};
`

const ListLine = styled.div`
    border-bottom: 1px solid #E8E8E1;
    width: 100%;
    margin-bottom: 20px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-family: 'EB Garamond', serif;
`

const Footer = () => {
  return (
    <Container>
        <Top>
        <Left>
            <Logo src={logo}/>
        </Left>
        <Center></Center>
        <Right>
            <Title>Menu</Title>
            <List>
                <ListItem>
                    <StyledLink to="/" >
                        Home
                    </StyledLink>
                </ListItem>
                <ListLine />
                <ListItem>
                    <StyledLink to="/products/All" >
                        Shop
                    </StyledLink>
                </ListItem>
                <ListLine />
                <ListItem>
                    <StyledLink to="/blog" >
                        Blog
                    </StyledLink>
                </ListItem>
                <ListLine />
                <ListItem>
                    <StyledLink to="/contact" >
                        Contact
                    </StyledLink>
                </ListItem>
            </List>
        </Right>
        </Top>
        <Bottom>
            <SocialContainer>
                <SocialIcon >
                    <Facebook />
                </SocialIcon>
                <SocialIcon >
                    <Instagram />
                </SocialIcon>
                <SocialIcon >
                    <Twitter />
                </SocialIcon>
                <SocialIcon >
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
            <CopyRight>© 2023 by Ana Palac and Jakov Filip Prgin</CopyRight>
        </Bottom>
    </Container>
  )
}

export default Footer