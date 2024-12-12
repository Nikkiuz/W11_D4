import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import IResults from './types/Results'
import { Card } from 'react-bootstrap'

const ARTICLE_URL = 'https://api.spaceflightnewsapi.net/v4/articles/'

const Details = () => {
  const [details, setDetails] = useState<IResults>()

  const params = useParams()

  const getDetails = async () => {
    try {
      const response = await fetch(ARTICLE_URL + params.id)
      if (response.ok) {
        const articleDetails = await response.json()
        setDetails(articleDetails)
      } else {
        throw new Error('errore nella fetch')
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id])

  return (
    <Card className="h-100 m-5">
      <Card.Img variant="top" src={details?.image_url} />
      <Card.Body>
        <Card.Title>{details?.title}</Card.Title>
        <Card.Text>Fonte: {details?.news_site}</Card.Text>
        <Card.Text>{details?.summary}</Card.Text>
        <Card.Text>Pubblicato il: {details?.published_at}</Card.Text>
        <Card.Text>URL: {details?.url}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Details
