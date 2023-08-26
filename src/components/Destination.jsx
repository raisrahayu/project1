import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import bromo from '../assets/destination/bromo.jpg';
import bunaken from '../assets/destination/bunaken.jpg';
import tanatoraja from '../assets/destination/tanatoraja.jpg';
import ubud from '../assets/destination/ubud.jpg';
import wakatobi from '../assets/destination/wakatobi.jpg';
import waykambas from '../assets/destination/waykambas.jpg';
import './Trending.css';
function Destination() {
  return (
    <div>
      <Container>
        <br />
        <h1>Destination</h1>
        <Row>
          <Col md={4} className="destinationWrapper" id="destination">
            <Card className="destinationImg">
              <Image src={bromo} alt="Labuan Bajo" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="destinationWrapper">
            <Card className="destinationImg">
              <Image src={bunaken} alt="Labuan Bajo" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="destinationWrapper">
            <Card className="destinationImg">
              <Image src={tanatoraja} alt="Labuan Bajo" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="destinationWrapper">
            <Card className="destinationImg">
              <Image src={ubud} alt="Labuan Bajo" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="destinationWrapper">
            <Card className="destinationImg">
              <Image src={wakatobi} alt="Labuan Bajo" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="destinationWrapper">
            <Card className="destinationImg">
              <Image src={waykambas} alt="Labuan Bajo" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Destination;
