import { Accordion, Col, Row } from "react-bootstrap";

const FAQ = () => {
    return (
        <section id="faq">
        <Row className="justify-content-center my-5">
            <Col xs={12} md={4} className="ms-5 ms-md-0 ps-3 ps-md-0">
                <div className="text-title fs-4">
                    <p>Frequently Asked Question</p>
                </div>
                <div className="kiri">
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>
            </Col>
            <Col xs={12} md={4} className="ps-5 ps-md-0 pe-5 pe-md-0">
                <Accordion className="accordion-custom">
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className="accordion-custom">
                    <Accordion.Item eventKey="1">
                    <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className="accordion-custom">
                    <Accordion.Item eventKey="2">
                    <Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className="accordion-custom">
                    <Accordion.Item eventKey="3">
                    <Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className="accordion-custom">
                    <Accordion.Item eventKey="0">
                    <Accordion.Header> Bagaimana jika terjadi kecelakaan?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </Row>
        </section>
    )
}

export default FAQ;