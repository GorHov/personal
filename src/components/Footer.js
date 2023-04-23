import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
console.log('works5')

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <Link to="#"><img src={navIcon1} alt="Icon" /></Link>
              <Link to="#"><img src={navIcon2} alt="Icon" /></Link>
              <Link to="#"><img src={navIcon3} alt="Icon" /></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
