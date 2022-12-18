import { Card, Col, Container, Row } from "react-bootstrap";

const WhyUs = () => {
    return (
        <section id="why-us">
            <Container>
                <Row className="mt-5 mb-2 pt-5 py-2">
                    <Col md={4} className="ms-4 ms-md-5 ps-5">
                        <p class="text-title fs-4">Why Us?</p>
                        <p class="kiri">Mengapa harus pilih Binar Car Rental?</p>
                    </Col>
                </Row>
                <Row className="mx-5 mt-2 mb-5 px-3 gy-3">
                    <Col md={3}>
                        <Card className="h-100">
                            <Card.Body>
                                <img src="./assets/img/icon_complete.svg" alt="complete" class="mt-2 ms-2"/>
                                <h5 class="text-subtitle my-3 ms-2 fw-bold">Mobil Lengkap</h5>
                                <p class="kiri ms-2 me-3">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="h-100">
                            <Card.Body>
                                <img src="./assets/img/icon_price.svg" alt="complete" class="mt-2 ms-2"/>
                                <h5 class="text-subtitle my-3 ms-2 fw-bold">Harga Murah</h5>
                                <p class="kiri ms-2 me-3">Harga murah dan bersaing, bisa bandingkan harga kami dengan
                                rental mobil lain</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="h-100">
                            <Card.Body>
                                <img src="./assets/img/icon_24hrs.svg" alt="complete" class="mt-2 ms-2"/>
                                <h5 class="text-subtitle my-3 ms-2 fw-bold">Layanan 24 Jam</h5>
                                <p class="kiri ms-2 me-3">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                                tersedia di akhir minggu</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="h-100">
                            <Card.Body>
                                <img src="./assets/img/icon_professional.svg" alt="complete" class="mt-2 ms-2"/>
                                <h5 class="text-subtitle my-3 ms-2 fw-bold">Sopir Profesional</h5>
                                <p class="kiri ms-2 me-3">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                                tepat waktu</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default WhyUs;