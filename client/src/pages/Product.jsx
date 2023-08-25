import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'
import { useLocation } from 'react-router'
import { publicRequest } from '../requestMethods'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'
import Products from '../components/Products'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    background-color: #E8E8E1;
`

const Wapper = styled.div`
    padding: 50px 10vw;
    display: flex;

    ${mobile({ padding: "10px", flexDirection: "column" })};
`

const ImgContainer = styled.div`
    flex: 1;
    padding: 0px 2vw;

    ${mobile({ padding: "0px" })};
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    ${mobile({ height: "40vh" })};
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 10vw 0px 2vw;

    ${mobile({ padding: "10px" })};
`

const Title = styled.h1`
    font-family: 'EB Garamond', serif;
    font-size: 64px;
    color: #231F20;
    font-weight: 600;

    ${mobile({ fontSize: "40px" })};
`

const Description = styled.p`
    margin: 20px 0px;
    font-size: 20px;

    ${mobile({ fontSize: "16px" })};
`

const Price = styled.span`
    font-size: 20px;
    color: #231F20;
`

const SizeAndQuantity = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 5vh;
    
    ${mobile({ flexDirection: "column" })};
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`

const Filter = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px 10px;
`

const FilterTitle = styled.span`
    font-size: 20px;
`

const FilterSize = styled.select`
    padding: 5px 50px;
    border: none;
    border-bottom: 2px solid #231F20;
    background-color: #E8E8E1;
    cursor: pointer;
    font-size: 20px;

    ${mobile({ padding: "5px 5px" })};
`

const FilterSizeOption = styled.option`
`



const AmountContainer = styled.div`
    padding-top: 7px;
    color: #231F20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    border-bottom: 2px solid #231F20;

    ${mobile({ padding: "0px" })};
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    width: 100%;
    padding: 15px;
    background-color: #231F20;
    cursor: pointer;
    font-weight: 500;
    color: #E8E8E1;
    transition: all 0.5s ease;
    
    &:hover {
        opacity: 0.8;
    }
`

const OtherProducts = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 5vh 0px;
    border-top: 1px solid #231F20;

    ${mobile({ flexDirection: "column" })};
`

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, color, size }));
    };

    useEffect(() => {
        if (product.size && product.size.length > 0) {
            setSize(product.size[0]);
        }
    }, [product.size]);

    useEffect(() => {
        if (product.color && product.color.length > 0) {
            setColor(product.color[0]);
        }
    }, [product.color]);

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wapper>
            <ImgContainer>
                <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Price>$ {product.price}</Price>
                <Description>{product.desc}</Description>
                <SizeAndQuantity>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e) => setSize(e.target.value || product.size[0])}>
                            {product.size?.map((s) => (
                                <FilterSizeOption key={s} value={s}>{s} g</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Quantity</FilterTitle>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                    </Filter>
                </FilterContainer>
                </SizeAndQuantity>
                <Button onClick={handleClick}>ADD TO CART</Button>
            </InfoContainer>
        </Wapper>
        <OtherProducts>
            <Title>Other Products</Title>
            <Products />
        </OtherProducts>
        <Footer />
    </Container>
  )
}

export default Product