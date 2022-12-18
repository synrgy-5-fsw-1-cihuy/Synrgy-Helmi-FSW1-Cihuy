import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <section id="footer">
          <Container fluid="md">
            <Row className="justify-content-md-center pt-5 pb-3 mt-4 mb-3">
              <Col xs={12} lg={3} className="ps-5 ms-5 ps-lg-0 ms-lg-0 mb-3 mb-lg-0">
                <div className="text-content fs-6">
                  <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                  <p>binarcarrental@gmail.com</p>
                  <p>081-233-334-808</p>
                </div>
              </Col>
              <Col xs={12} lg={2} className="ps-5 ms-5 ps-lg-0 ms-lg-0 mb-4 mb-lg-0">
                <div className="text-content px-lg-3 fs-6">
                  <ul style={{listStyle: 'none'}} className="ps-0">
                    <li className="pb-3"><a href="#our-services" className="link-dark">Our services</a></li>
                    <li className="pb-3"><a href="#why-us" className="link-dark">Why Us</a></li>
                    <li className="pb-3"><a href="#testimonial" className="link-dark">Testimonial</a></li>
                    <li><a href="#faq" className="link-dark">FAQ</a></li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} lg={3} className="ps-5 ms-5 ps-lg-0 ms-lg-0 mb-4 mb-lg-0">
                <div className="kiri fs-6">
                  <p>Connect with us</p>
                </div>
                <img className="img-footer" src="./assets/img/icon_facebook.svg" alt="facebook" />&nbsp;  
                <img className="img-footer" src="./assets/img/icon_instagram.svg" alt="instagram" />&nbsp;
                <img className="img-footer" src="./assets/img/icon_twitter.svg" alt="twitter" />&nbsp;
                <img className="img-footer" src="./assets/img/icon_mail.svg" alt="mail" />&nbsp;
                <img className="img-footer" src="./assets/img/icon_twitch.svg" alt="twitch" />&nbsp;
              </Col>
              <Col xs={12} lg={3} className="ps-5 ms-5 ps-lg-0 ms-lg-0 mb-4 mb-lg-0">
              <div className="kiri fs-6">
                <p>Copyright Binar 2022</p>
              </div>
              <div className="d-flex"><img src="./assets/img/binarlogo.svg" alt="" /></div>
              </Col>
            </Row>
          </Container>
        </section>
    )
};

export default Footer;