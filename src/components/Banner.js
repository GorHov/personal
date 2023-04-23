import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';


export const Banner = () => {
console.log('works2')

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>Hi! I'm Gor Web Developer</h1>
                  <p>This is my personal web site where you can get information from my professional background.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )  
}
