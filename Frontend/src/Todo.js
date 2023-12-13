import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Todo({Title, Description}) {
    return (
        <Card style={{ 
            margin: '10px', 
            backgroundColor: '#34495e',
            color: 'white',
            }}>
        <Card.Body >
          <Card.Title>{Title}</Card.Title>
          <Card.Text>
            {Description}
          </Card.Text>
          <Button variant="primary">Completed</Button>
        </Card.Body>
      </Card>
    );
  }
export default Todo;