import React, { useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'
import { useLocation } from 'react-router'
import { useState } from 'react'
import { ExpandMore, ExpandLess } from '@material-ui/icons'
import { useMediaQuery } from '@material-ui/core'

const Container = styled.div`
    color: #231F20;
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
    color: #231F20;

    ${mobile({ fontSize: "40px" })};
`
const ShopContainer = styled.div`
    display: flex;
    width: 100%;

    ${mobile({ flexDirection: "column" })};
`

const ProductContainer = styled.div`
    flex: 6;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const FilterContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    ${mobile({ flexDirection: "row", justifyContent: "space-between", border: "0.5px solid #231F20" })};
`

const Filter = styled.div`
    margin: 20px;

    ${mobile({ width: "100%" })};
`

const FilterTitle = styled.div`
    color: #231F20;
    font-size: 36px;
    margin: 10px;
    font-family: 'EB Garamond', serif;
    text-align: center;

    ${mobile({ fontSize: "24px" })};
`

const FilterHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const CheckboxTitle = styled.div`
    margin: 10px 0px;
    font-size: 30px;
    font-family: 'EB Garamond', serif;

    ${mobile({ fontSize: "20px", margin: "5px 0px" })};
`

const CheckboxLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
`

const CheckboxText = styled.span`
    font-size: 16px;
    font-family: 'EB Garamond', serif;

    ${mobile({ fontSize: "14px" })};
`
// change checkbox color
const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
    margin-right: 10px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1.5px solid #231F20;
    outline: none;
    transition-duration: 0.2s;
    background-color: ${(props) => (props.checked ? "#231F20" : "transparent")};
    &:checked {
        background-color: #231F20;
    }
    &:hover {
        background-color: #231F20;
    }

    ${mobile({ width: "30px", height: "30px" })};
`

const RadioLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
`

const RadioText = styled.span`
    font-size: 16px;
    font-family: 'EB Garamond', serif;

    ${mobile({ fontSize: "14px" })};
`

const RadioInput = styled.input.attrs({ type: "radio" })`
    margin-right: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1.5px solid #231F20;
    border-radius: 50%;
    outline: none;
    transition-duration: 0.2s;
    background-color: ${(props) => (props.checked ? "#231F20" : "transparent")};
    &:checked {
        background-color: #231F20;
    }
    &:hover {
        background-color: #231F20;
    }

    ${mobile({ width: "30px", height: "30px" })};
`

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    
    const handleFilters = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const isChecked = e.target.checked;
      
        setFilters((prevFilters) => {
          const updatedFilters = { ...prevFilters };
      
          if (isChecked) {
            updatedFilters[name] = value;
          } else {
            delete updatedFilters[name];
          }
          console.log(updatedFilters);
          return updatedFilters;
        });
      };
    
    // If the screen is less than 600px wide, set open to false
    const isMobile = useMediaQuery('(max-width: 600px)');
    useEffect(() => {
        if (isMobile) {
            setFilterSection((prevSections) =>
                prevSections.map((section) => ({
                    ...section,
                    open: false
                }))
            );
        }
    }, [isMobile]);

    const [ filterSection, setFilterSection ] = useState([
        { title: 'Size', name: 'size', open: true },
        { title: 'Roast Level', name: 'roast', open: true },
        { title: 'Grind Type', name: 'grind', open: true },
        { title: 'Origin', name: 'origin', open: true }
    ])

    const toggleFilterSection = (index) => {
        setFilterSection((prevSections) =>
          prevSections.map((section, i) => ({
            ...section,
            open: i === index ? !section.open : section.open
          }))
        );
      };

    const filterValues = {
        size: ['250', '500', '1000'],
        roast: ['Light', 'Medium', 'Dark'],
        grind: ['Whole Bean', 'Ground', 'Espresso', 'Cold Brew'],
        origin: ['Africa', 'Asia', 'Central America', 'South America', 'Blend']
      };

    // sort by newest, price (asc), price (desc)
    const sortValues = {
        title: ['Newest', 'Price (asc)', 'Price (desc)'],
        value: ['newest', 'asc', 'desc']
    }

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            {cat === 'Any' ? <Title>Shop All</Title> : cat === 'singleOrigin' ? <Title>Single Origin</Title> : <Title>{cat}</Title>}          
            <ShopContainer>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Filter</FilterTitle>
                        {filterSection.map((section, i) => (
                            <div key={i}>
                                <FilterHeader>
                                    <CheckboxTitle>{section.title}</CheckboxTitle>
                                    {filterSection[i].open ? <ExpandLess onClick={() => toggleFilterSection(i)} /> : <ExpandMore onClick={() => toggleFilterSection(i)} />}
                                </FilterHeader>
                                {filterSection[i].open && (
                                    <div>
                                        {filterValues[section.name].map((item, j) => (
                                            <CheckboxLabel key={j}>
                                            <CheckboxInput
                                                name={section.name}
                                                value={item}
                                                onChange={handleFilters}
                                                checked={filters[section.name]?.includes(item)}
                                            />
                                            <CheckboxText>
                                                {item} {section.name === 'size' && 'g'}
                                            </CheckboxText>
                                            </CheckboxLabel>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Sort</FilterTitle>
                        <div>
                            {sortValues.title.map((item, i) => (
                                <RadioLabel key={i}>
                                    <RadioInput
                                        name="sort"
                                        value={sortValues.value[i]}
                                        onChange={(e) => setSort(e.target.value)}
                                        checked={sort === sortValues.value[i]}
                                    />
                                    <RadioText>
                                        {item}
                                    </RadioText>
                                </RadioLabel>
                            ))}
                        </div>
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