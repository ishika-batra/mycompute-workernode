import Card from 'react-bootstrap/Card';

const ImageCard = ({ card }) => {
  const { id, title, text, imgSrc } = card;

  return (
    <Card key={id} className="card">
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
