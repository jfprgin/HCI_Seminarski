import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import { publicRequest } from '../requestMethods'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #E8E8E1;
`
const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
  padding: 0px 10vw;

  ${mobile({ padding: "0px" })};
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #231F20;
  margin-bottom: 5vh;

  ${mobile({ flexDirection: "column", alignItems: "center" })};
`

const TitleAndDate = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5px;

  ${mobile({ marginRight: "0px", padding: "20px 5vw 0px 5vw" })};
`

const Title = styled.h1`
  font-family: 'EB Garamond', serif;
  font-size: 64px;
  color: #231F20;
  margin-bottom: 20px;

  ${mobile({ fontSize: "40px" })};
`

const Date = styled.h3`
  font-size: 16px;
  color: #231F20;
  margin-bottom: 20px;

  ${mobile({ fontSize: "12px" })};
`

const CoverImageContainer = styled.div`
  flex: 1; /* Expand to fill remaining space */
  display: flex;
  justify-content: flex-end; /* Align image to the bottom */
  margin-left: 5px;

  ${mobile({ marginLeft: "0px", justifyContent: "center", order: "-1" })};
`
const CoverImage = styled.img`
  width: 100%;
  height: auto;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 5vh 0px;

  ${mobile({ width: "90%", margin: "1vh 0px" })};
`

const Text = styled.div`
  font-size: 20px;
  color: #231F20;
  margin: 10px 0px;

  ${mobile({ fontSize: "16px", margin: "5px 0px" })};
`

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 5vh 0px;
`

const Article = () => {
  // In body of Article, use the text from body and images from bodyImages arrays from backend, map through them and display them, alternating between text and image
  const location = useLocation()
  const articleId = location.pathname.split("/")[2]
  const [article, setArticle] = useState({})

  useEffect(() => {
    const getArticle = async () => {
      try {
        const res = await publicRequest.get("/articles/find/" + articleId)
        console.log(res.data)
        setArticle(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getArticle()
  }, [articleId])

  // Create date from createdAt property of article
  const date = new window.Date(article.createdAt).toLocaleDateString()

  return (
    <Container>
      <Navbar />
      <Announcement />
      <ArticleContainer>
        <Header>
          <TitleAndDate>
            <Title>{article.title}</Title>
            <Date>{date}</Date>
          </TitleAndDate>
          <CoverImageContainer>
            <CoverImage src={article.coverImage} />
          </CoverImageContainer>
        </Header>
        <Body>
          {article.body && article.body.map((item, index) => (
            <React.Fragment key={index}>
                {index < article.bodyImages.length ?  (
                  <>
                    <Text>{item}</Text>
                    <Image src={article.bodyImages[index]} />
                  </>
                ) : (
                  <Text>{item}</Text>
                )
              }
            </React.Fragment>
          ))}
        </Body>
      </ArticleContainer>
      <Footer />
    </Container>
  )
}

export default Article