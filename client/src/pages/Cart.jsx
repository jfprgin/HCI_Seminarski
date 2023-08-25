import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'
import { useSelector, useDispatch } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@material-ui/core'
import { removeProduct, addProductInCart, subtractProductInCart } from '../redux/cartRedux'

const KEY = process.env.REACT_APP_STRIPE

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #E8E8E1;
    min-height: 100vh;
`

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${mobile({ padding: "10px" })};
`

const Title = styled.h1`
    color: #231F20;
    font-size: 64px;
    font-weight: 300;
    text-align: center;
    padding-top: 10vh;
    font-family: 'EB Garamond', serif;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px 40px 0px;
`

const TopText = styled(Link)`
    text-decoration: underline;
    color: #231F20;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`

const Table = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #231F20;

    ${mobile({ display: "none" })};
`

const InfoName = styled.div`
    flex: 5;
    min-width: 200px;
    padding: 10px;
    margin-left: 10px;
`

const InfoPrice = styled.div`
    flex: 1;
    padding: 10px;
`

const InfoQuantity = styled.div`
    flex: 1;
    padding: 10px;
`

const InfoTotal = styled.div`
    flex: 1;
    padding: 10px;
`

const InfoRemove = styled.div`
    flex: 1;
    padding: 10px;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #231F20;

    ${mobile({ flexDirection: "column", justifyContent: "center", alignItems: "center" })};
`

const ProductDetail = styled.div`
    flex: 5;
    display: flex;
    padding: 10px;
    margin-left: 10px;
    
    @media (max-width: 1000px) {
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin: 0px 10px;
    }

    ${mobile({ flexDirection: "column", justifyContent: "center", alignItems: "center" })};
`

const NameAndSize = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${mobile({ flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "10px" })};
`

const Image = styled.img`
    width: 15vw;
    min-width: 200px;
    max-width: 300px;
    height: 100%;
    object-fit: cover;
    margin: 10px 0px;

    ${mobile({ width: "100%", height: "40vh" })};
`

const ProductName = styled.span`
    font-size: 24px;
    font-family: 'EB Garamond', serif;
    
    ${mobile({ textAlign: "center" })};
`

const ProductSize = styled.span`
    font-size: 14px;
`

const ProductAmountContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px;
`

const ProductAmount = styled.div`
    font-size: 18px;
    margin: 5px;
    padding: 10px;

    ${mobile({ margin: "0px", padding: "5px", fontSize: "14px" })};
`

const ProductPrice = styled.div`
    flex: 1;
    font-size: 18px;
    font-weight: 500;
    padding: 10px;
    display: flex;
    align-items: center;

    ${mobile({ fontSize: "14px" })};
`

const RemoveContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

const RemoveButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 18px;
    color: #231F20;

    &:hover {
        opacity: 0.5;
    }

    ${mobile({ padding: "10px 20px", border: "2px solid #231F20" })};
`

const Summary = styled.div`
    display: flex;
    padding: 20px;
`

const SummaryLeft = styled.div`
    flex: 7;

    ${mobile({ display: "none" })};
`

const SummaryRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    font-size: 20px;
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span`
    font-weight: 600;
`

const SummaryButton = styled.button`
    width: 100%;
    padding: 20px;
    background-color: #231F20;
    border: none;
    color: white;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const dispatch = useDispatch();

    const handleRemove = (id, price, quantity) => {
        dispatch(removeProduct({  ...cart, id, price, quantity }));
    };

    const handleAdd = (id, price, quantity) => {
        dispatch(addProductInCart({  ...cart.product, id, price, quantity }));
    };

    const handleSubtract = (id, price, quantity) => {
        dispatch(subtractProductInCart({  ...cart.product, id, price, quantity }));
    };

    const onToken = (token) => {
        setStripeToken(token);
    };

    const isMobile = useMediaQuery('(max-width: 600px)');


  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Shopping Cart</Title>
            <Top>
                <TopText to="/products/Any">Continue Shopping</TopText>
            </Top>
            <Bottom>
                <Table>
                    <Info>
                        <InfoName>Item</InfoName>
                        <InfoPrice>Price</InfoPrice>
                        <InfoQuantity>Quantity</InfoQuantity>
                        <InfoTotal>Total</InfoTotal>
                        <InfoRemove></InfoRemove>
                    </Info>
                    {cart.products.map(product => (
                     <Product>
                        <ProductDetail>
                            <Image src={product.img} />
                            <NameAndSize>
                                <ProductName>{product.title}</ProductName>
                                <ProductSize>{product.size} g</ProductSize>
                            </NameAndSize>
                        </ProductDetail>
                        {isMobile ? (
                                <span>Price: </span>
                            ) : (
                                <span></span>
                            )}
                        <ProductPrice>${product.price}</ProductPrice>
                        {isMobile ? (
                                <span>Quantity: </span>
                            ) : (
                                <span></span>
                            )}
                        <ProductAmountContainer>
                            <Add onClick={() => handleAdd(product._id, product.price, product.quantity)} />
                            <ProductAmount>{product.quantity}</ProductAmount>
                            <Remove onClick={() => handleSubtract(product._id, product.price, product.quantity)} />
                        </ProductAmountContainer>
                        {isMobile ? (
                                <span>Total: </span>
                            ) : (
                                <span></span>
                            )}
                        <ProductPrice>${product.price * product.quantity}</ProductPrice>
                        <RemoveContainer>
                            <RemoveButton onClick={() => handleRemove(product._id, product.price, product.quantity)}>Remove</RemoveButton>
                        </RemoveContainer>
                    </Product>
                    ))}
                </Table>
                <Summary>
                    <SummaryLeft />
                    <SummaryRight>
                    <SummaryItem>
                        <SummaryItemText>SUBTOTAL: </SummaryItemText>
                        <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                        name="React Ecommerce"
                        image="https://avatars.githubusercontent.com/u/1486366?v=4"
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.total}`}
                        amount={cart.total * 100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <SummaryButton>Checkout</SummaryButton>
                    </StripeCheckout>
                    </SummaryRight>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart