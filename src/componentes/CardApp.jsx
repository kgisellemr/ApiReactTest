import Card from 'react-bootstrap/Card';

const CardApp = (props) => {
  return (
    <>
      <Card style={{ width: '15rem' }} className="card-app-item">
        <Card.Header>{props.type}</Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Cuando: {props.date}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <p>{props.extra}</p>
        </Card.Footer>
      </Card>

    </>
  )
}

export default CardApp;