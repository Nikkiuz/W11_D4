import { Card } from 'react-bootstrap'
import IResults from './Results'

interface SingleNewsProps {
  article: IResults
}

const SingleNews = (props: SingleNewsProps) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={props.article.image_url} />
      <Card.Body>
        <Card.Title>{props.article.title}</Card.Title>
        <Card.Text>{props.article.summary}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleNews
