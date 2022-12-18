import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Jumbotron = () => {
    return (
        <Container className="py-5 px-4">
            <div className="cta-banner-box text-center text-white">
                <Row>
                    <div className="align-self-center py-5">
                    <h1 className="fs-2 fw-bold pb-4 px-2">Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <p className="text-binar fs-6 px-2 px-lg-5 mx-2 mx-lg-5 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime in esse omnis cupiditate harum ex ipsam at voluptates, adipisci, reiciendis dolorum neque architecto. Quod quas aspernatur dicta molestias ut quis.</p>
                    <Link to="/cars" className="btn btn-banner fw-semibold">Mulai Sewa Mobil</Link>
                    </div>
                </Row>
            </div>
        </Container>
    )
}

export default Jumbotron;