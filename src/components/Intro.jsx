import { Col, Container, Row } from 'react-bootstrap';
import './Intro.css';
function Intro() {
  return (
    <div className="intro">
      <Container className="text-white d-flex text-center justify-content-center align-item-center">
        <Row>
          <Col>
            <div className="title">TRAVEL TO</div>
            <div className="title">WONDERFUL INDONESIA</div>
            <div className="introButton mt-4 text-center">
              <button href="#trending">See All Destination</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Intro;
