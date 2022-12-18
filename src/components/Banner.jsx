import { Row } from "react-bootstrap"
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section id="banner">
            <Row className="row-cols-1 row-cols-md-2 pt-3 pt-sm-4 gy-4" style={{backgroundColor: '#F1F3FF'}}>
                <div className="align-self-center">
                    <p className="banner-text-title mx-3 mx-sm-4 ms-lg-5 px-2 px-sm-4 ps-lg-5 fs-2">
                    Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)
                    </p>
                    <p className="text-content mx-3 mx-sm-4 ms-lg-5 px-2 px-sm-4 ps-lg-5">
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                    terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                    <div className="mx-3 mx-sm-4 ms-lg-5 px-2 px-sm-4 ps-lg-5 pb-md-3">
                    <Link to="/cars" className="btn btn-banner fw-semibold">Mulai Sewa Mobil</Link>
                    </div>
                </div>
                <div className="align-self-center">
                    <img src="./assets/img/car_with_bg.png" alt="car" className="img-fluid w-100" />
                </div>
            </Row>
        </section>
    )
};

export default Banner;