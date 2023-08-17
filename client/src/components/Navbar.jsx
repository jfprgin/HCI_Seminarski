import React from 'react'
import styled from 'styled-components'
import { PersonOutlineOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

// styled.div`` is a tagged template literal, which is a special type of function call that parses the template literal into an argument for the styled.div function call.
const Container = styled.div`
    height: 100px;
    padding: 5px 20px;                 // top/bottom left/right
    border-bottom: 0.5px solid #231F20;

    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;                      // display: flex; is a CSS property that enables a flex context for all its direct children.
    justify-content: space-between;     // justify-content: space-between; is a CSS property that aligns items to the left and right sides of the container, with empty space in between.
    align-items: center;

    $mobile({ padding: "10px 0px" });
`

const Left = styled.div`
    flex: 2;                            // flex: 1; is a CSS property that tells a flex item to fill the remaining space in a flex container.
    display: flex;
    justify-content: center;

    ${mobile({ flex: 1 })}
`

// Logo changes size dinamicly depending on screen size, its always 100% of the height of the Navbar, Navbar has padding of 10px on top and bottom
const Logo = styled.img`
    cursor: pointer;
    height: 100px;
    ${mobile({ height: "50px" })}
`


const Center = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: space-between;

    ${mobile({ flex: 2 })}
`

const MenuItem = styled.div`
    font-weight: 500;
    color: #231F20;
    font-size: 20px;
    margin-left: 25px;
    
    ${mobile({ fontSize: "14px", marginLeft: "10px" })}
`

const Right = styled.div`

    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    ${mobile({ flex: 1 })}
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)

  return (
    <Container>
        <Wrapper>
            <Left>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Logo src={logo} />
                </Link>
            </Left>
            <Center>
                <MenuItem>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Home
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/products/All" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Shop
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Blog
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Contact
                    </Link>
                </MenuItem>
            </Center>
            <Right>
                <MenuItem>
                    <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </Link>
                </MenuItem>
                <MenuItem> 
                    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                        <PersonOutlineOutlined />
                    </Link>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar