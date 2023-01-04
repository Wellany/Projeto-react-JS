import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardProd = ({image,title,Subtitle,text,total})=> {
  return (
    <Card >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{Subtitle}</Card.Subtitle>

        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Comprar<Badge>{total}</Badge></Button>
        
      </Card.Body>
    </Card>
  );
}

export default CardProd;