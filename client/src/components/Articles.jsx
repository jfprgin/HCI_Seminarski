import React from 'react'
import styled from 'styled-components'
import Article from './Article'
import { mobile } from '../responsive'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Container = styled.div`
    background-color: #E8E8E1;
`

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${mobile({ flexDirection: "column"})};
`;

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/api/articles`
                );
                setArticles(res.data);
            } catch (err) {}
        };
        getArticles();
    }, []);

    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    const chunkedArticles = chunkArray(articles, 3);

    return (
        <Container>
            {chunkedArticles.map((row, index) => (
                <Row key={index}>
                    {row.map((item) => (
                        <Article item={item} key={item._id} />
                    ))}
                </Row>
            ))}
        </Container>
    );
}

export default Articles