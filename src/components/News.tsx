import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import IResponse from './types/Response'
import SingleNews from './types/SingleNews'

const News = () => {
  const [news, setNews] = useState<IResponse>()

  const NEWS_URL = 'https://api.spaceflightnewsapi.net/v4/articles'

  const getNews = async () => {
    try {
      const response = await fetch(NEWS_URL)
      if (response.ok) {
        const arrayOfNews = await response.json()
        setNews(arrayOfNews)
      } else {
        throw new Error('errore nella fetch')
      }
    } catch (error) {
      console.log(error)
    }
  }

  console.log('notizie', news)
  useEffect(() => {
    getNews()
  }, [])

  return (
    <div>
      <Container className="m-3">
        <h2 className="text-center m-4">New Articles!</h2>
        <Row className="justify-content-center g-3">
          {news &&
            news.results.map((n, i) => {
              return (
                <Col xs={12} md={6} key={i}>
                  <SingleNews article={n} />
                </Col>
              )
            })}
        </Row>
      </Container>
    </div>
  )
}

export default News
