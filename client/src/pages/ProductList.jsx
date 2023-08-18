import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'
import { useLocation } from 'react-router'
import { useState } from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #E8E8E1;
    min-height: 100vh;
`

const Wrapper = styled.div`
    padding: 30px;

    ${mobile({ padding: "10px" })};
`

const Title = styled.h1`
    text-align: center;
    margin: 20px;
    font-family: 'EB Garamond', serif;
    font-size: 64px;
`
const ShopContainer = styled.div`
    display: flex;
`

const ProductContainer = styled.div`
    flex: 6;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({ justifyContent: "center" })};
`

const FilterContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })};
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })};
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    border: 1px solid lightgray;
    background-color: white;
    ${mobile({ margin: "10px 0px" })};
`

const Option = styled.option``

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        });
    }

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>{cat}</Title>
            <ShopContainer>
                <FilterContainer>
                    <Filter>
                        <FilterText>Filter Products:</FilterText>
                        <Select name="color" onChange={handleFilters}>
                            <Option disabled selected>Color</Option>
                            <Option>White</Option>
                            <Option>Black</Option>
                            <Option>Red</Option>
                            <Option>Blue</Option>
                            <Option>Yellow</Option>
                            <Option>Green</Option>
                        </Select>
                        <Select name="size" onChange={handleFilters}>
                            <Option disabled selected>Size</Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Sort Products:</FilterText>
                        <Select onChange={e => setSort(e.target.value)}>
                            <Option value="newest">Newest</Option>
                            <Option value="asc">Price (asc)</Option>
                            <Option value="desc">Price (desc)</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
                <ProductContainer>
                    <Products cat={cat} filters={filters} sort={sort} />
                </ProductContainer>
            </ShopContainer>
            <Newsletter />
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default ProductList