import { Card } from 'react-bootstrap';
import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Adresse from './Components/Profile/Adresse';

function App() {
  return (
    <div className="App">

      <Card style={{ width: '25rem' }}>
        <ProfilePhoto />
        <Card.Body>
          <Card.Title><FullName /></Card.Title>
          <Card.Text>
            <Adresse />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
