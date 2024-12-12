import { Card } from 'react-bootstrap'
import IResults from './Results'
import { Link } from 'react-router-dom'

interface SingleNewsProps {
  article: IResults
}

const SingleNews = (props: SingleNewsProps) => {
  return (
    <Link to={'/details/' + props.article.id} className="nav-link">
      <Card className="h-100">
        <Card.Img variant="top" src={props.article.image_url} />
        <Card.Body>
          <Card.Title>{props.article.title}</Card.Title>
          <Card.Text>Pubblicato il: {props.article.published_at}</Card.Text>
          <Card.Text>Fonte: {props.article.news_site}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default SingleNews
