import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import labuanImg from '../assets/trending/labuan bajo.jpg';
import nusapenida from '../assets/trending/nusapenida.jpg';
import komodo from '../assets/trending/komodo.jpg';
import mandalika from '../assets/trending/mandalika.jpg';
import toba from '../assets/trending/danau toba.jpg';
import ampat from '../assets/trending/raja ampat.jpg';
import './Trending.css';
function Trending() {
  return (
    <div>
      <Container>
        <br />
        <h1>Trending Destination</h1>
        <Row>
          <Col md={4} className="destinationWrapper" id="trending">
            <Card className="destinationImg">
              <Image src={labuanImg} alt="Labuan Bajo" className="images" />
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
              <Image src={nusapenida} alt="Labuan Bajo" className="images" />
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
              <Image src={komodo} alt="Labuan Bajo" className="images" />
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
              <Image src={mandalika} alt="Labuan Bajo" className="images" />
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
              <Image src={toba} alt="Labuan Bajo" className="images" />
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
              <Image src={ampat} alt="Labuan Bajo" className="images" />
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
export default Trending;
