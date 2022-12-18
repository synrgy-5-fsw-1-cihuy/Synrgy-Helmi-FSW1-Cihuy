import { Container, ListGroup, Row } from "react-bootstrap";

const Offer = () => {
    return (
        <section id="service" className="py-3 my-5">
            <Container>
                <Row className="row-cols-md-2 row-cols-1 gy-4 gx-4">
                    <div className="d-flex align-self-center justify-content-center">
                        <img src="./assets/img/happygirl.png"className="w-75"alt="Service Girl"/>
                    </div>
                    <div className="align-self-center">
                        <p className="text-heading-one ">
                            Best Car Rental for any kind of trip in (Lokasimu)!
                        </p>
                        <p className="text-content px-4 px-md-3 px-lg-5">
                            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang
                            lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                            wedding, meeting, dll.
                        </p>
                        <div className="text-content px-4">
                            <ListGroup horizontal>
                                <ListGroup.Item><img src="./assets/img/Group 53.svg" alt="ceklis"/>  Sewa Mobil Dengan Supir di Bali 12 Jam</ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item><img src="./assets/img/Group 53.svg" alt="ceklis"/>  Sewa Mobil Lepas Kunci di Bali 24 Jam</ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item><img src="./assets/img/Group 53.svg" alt="ceklis"/>  Sewa Mobil Jangka Panjang Bulanan</ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item><img src="./assets/img/Group 53.svg" alt="ceklis"/>  Gratis Antar - Jemput Mobil di Bandara</ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item><img src="./assets/img/Group 53.svg" alt="ceklis"/>  Layanan Airport Transfer / Drop In Out</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
};

export default Offer;