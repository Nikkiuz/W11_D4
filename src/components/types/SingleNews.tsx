import { Card } from 'react-bootstrap'
import IResults from './Results'

interface SingleNewsProps {
  article: IResults
}

const SingleNews = (props: SingleNewsProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.article.image_url} />
      <Card.Body>
        <Card.Title>{props.article.title}</Card.Title>
        <Card.Text>{props.article.published_at}</Card.Text>
        <Card.Text>{props.article.updated_at}</Card.Text>
        <Card.Text>{props.article.summary}</Card.Text>
        <Card.Text>{props.article.featured}</Card.Text>
        <Card.Text>{props.article.url}</Card.Text>
        <Card.Text>{props.article.news_site}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleNews
