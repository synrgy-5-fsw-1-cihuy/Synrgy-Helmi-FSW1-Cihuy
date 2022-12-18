import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Form, Button, Row, Col } from "react-bootstrap";
import Hero from "./Banner";
import { FiUserCheck, FiUserX, FiCalendar } from "react-icons/fi"
import { GrGroup } from "react-icons/gr"
import { BsGear } from "react-icons/bs"

const CARS_ENDPOINT_URL = 'http://localhost:8001/api/cars';

const CarsPage = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getAllCars();
    }, []);

    const getAllCars = async () => {
        const cars = await axios.get(CARS_ENDPOINT_URL);
        console.log(cars.data.data);
        setCars(cars.data.data);
    };

    return (
        <>
            <Hero />
            <section id="cari-mobil">
                <Container className="container car-filter">
                    <Row className="row justify-content-center">
                        <Col className="col-lg px-4">
                            <Form className="row" id="form_filter_submit">
                                <Col className="col-lg">
                                <Form.Label className="form-label car-filter-label" htmlFor="Tipe Driver">Tipe Driver</Form.Label>
                                <Form.Select className="form-select" id="tipe_driver" aria-label="Default select example">
                                    <option selected>Pilih Tipe Driver</option>
                                    <option value={1}>Dengan Sopir</option>
                                    <option value={2}>Tanpa Sopir (Lepas Kunci)</option>
                                </Form.Select>
                                </Col>
                                <Col className="col-lg">
                                <Form.Label className="form-label car-filter-label" htmlFor="Tipe Driver">Tanggal</Form.Label>
                                <input className="form-control" id="tanggal_booking" type="date" placeholder="Pilih Tanggal" />
                                </Col>
                                <Col className="col-lg">
                                <Form.Label className="form-label car-filter-label" htmlFor="Tipe Driver">Waktu Jemput/Ambil</Form.Label>
                                <Form.Select className="form-select" id="waktu_booking" aria-label="Default select example">
                                    <option selected>Pilih Waktu</option>
                                    <option value="08:00:00">08.00 WIB</option>
                                    <option value="09:00:00">09.00 WIB</option>
                                    <option value="10:00:00">10.00 WIB</option>
                                    <option value="11:00:00">11.00 WIB</option>
                                    <option value="12:00:00">12.00 WIB</option>
                                </Form.Select>
                                </Col>
                                <Col className="col-lg">
                                <Form.Label className="form-label car-filter-label" htmlFor="Tipe Driver">Jumlah Penumpang (optional)</Form.Label>
                                <input className="form-control" id="total_penumpang" type="number" placeholder="Jumlah Penumpang" />
                                </Col>
                                <Col className="col-lg-2 align-self-center px-4 mt-4">
                                <Button className="btn btn-banner fw-semibold" id="btn-filter" type="submit">Cari Mobil</Button>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                    
                </Container>
                <Container className="py-4">
                    <Row>
                        { cars.map((car, index) => {
                            return <Col className="py-3">
                            <Card key={index} className="car-card shadow border-0 flex-fill">
                                <div className="image-container">
                                <Card.Img variant="top" src={car.image}/>
                                </div>
                                <Card.Body className="d-flex flex-column gy-3">
                                    <Card.Title className="px-2">{car.manufacture}/{car.model}</Card.Title>
                                    <Card.Text className="px-2">
                                        <h5 className="fw-bold">{car.rentPerDay.toLocaleString("id", {
                                            style: "currency", 
                                            currency: "IDR",
                                            })}{" "}/ hari
                                        </h5>
                                        <p>{car.description}</p>
                                        <p>{car.driverType === 1 ? (
                                            <>
                                            <FiUserCheck className="me-2" />
                                            <span>Dengan Sopir</span>
                                            </>
                                            ):(
                                            <>
                                            <FiUserX className="me-2" />
                                            <span>Tanpa Sopir (Lepas Kunci)</span>
                                            </>
                                            )}
                                        </p>
                                        <p><GrGroup className="me-2" />{car.capacity} Orang</p>
                                        <p><BsGear className="me-2" />{car.transmission}</p>
                                        <p><FiCalendar className="me-2" />{car.year}</p>
                                        <p>{new Date(car.availableAt).toLocaleString()}</p>
                                    </Card.Text>

                                    <Button className="btn btn-banner btn-block btn-car-select fw-semibold ms-2 mt-auto mb-0 ">Pilih Mobil</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        })}
                    </Row>
                </Container>

            </section>

        </>
        
    )
}

export default CarsPage;