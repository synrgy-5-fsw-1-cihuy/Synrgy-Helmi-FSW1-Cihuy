import axios from "axios";
import Hero from "./Banner";
import { useEffect, useRef, useState } from "react";
import { Card, Container, Form, Button, Row, Col } from "react-bootstrap";
import { GrGroup } from "react-icons/gr"
import { BsGear } from "react-icons/bs"
import { FiUserCheck, FiUserX, FiCalendar } from "react-icons/fi"

const CARS_ENDPOINT_URL = 'http://localhost:8001/api/cars';

const CarsPage = () => {
    const driverTypeRef = useRef();
    const dateRef = useRef();
    const timeRef = useRef();
    const capacityRef = useRef();
    const [filteredCars, setFilteredCars] = useState([]);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        if (cars.length < 1) {
            getAllCars().then((res) => {
              setCars(res.data);
              setFilteredCars(res.data);
            });
        }
        console.log(cars)
        console.log(filteredCars)
    }, [cars, filteredCars]);

    const handleFilter = (e) => {
        e.preventDefault();
        const driverType = Number(driverTypeRef.current.value);
        const date = dateRef.current.value;
        const time = timeRef.current.value;
        const capacity = capacityRef.current.value;
        filterCar({ driverType, date, time, capacity }, cars).then((cars) => {
            setFilteredCars(cars);
        });
    };

    const handleReset = () => {
        setFilteredCars(cars);
        driverTypeRef.current.value = "";
        dateRef.current.value = "";
        timeRef.current.value = "";
        capacityRef.current.value = "";
    };

    const getAllCars = async () => {
        const cars = await axios.get(CARS_ENDPOINT_URL);
        return cars.data;
    };

    const filterCar = ({ driverType, date, time, capacity = 1 }, cars) => {
        const dateTime = (date + 'T' + time + '.000Z')
        return new Promise(function (resolve, reject) {
          const result = cars.filter(
            (car) =>
                (!driverType || car.driverType === driverType) &&
                (!dateTime || car.availableAt > dateTime) &&
                (!capacity || car.capacity >= parseInt(capacity))
          );
      
          resolve(result);
        });
    };

    return (
        <>
            <Hero />
            <section id="cari-mobil">
                <Container className="container car-filter">
                    <Row className="row justify-content-center">
                        <Col className="col-lg px-4">
                            <Form className="row" id="form_filter_submit" onSubmit={(event) => handleFilter(event)}>
                                <Col className="col-lg">
                                <Form.Label className="car-filter-label" htmlFor="Tipe Driver">Tipe Driver</Form.Label>
                                <Form.Select 
                                    id="tipe_driver" 
                                    ref={driverTypeRef}
                                    defaultValue="">
                                    <option key={""} value="" disabled>Pilih Tipe Driver</option>
                                    <option key={1} value={1}>Dengan Sopir</option>
                                    <option key={2} value={2}>Tanpa Sopir (Lepas Kunci)</option>
                                </Form.Select>
                                </Col>
                                <Col className="col-lg">
                                <Form.Label className="car-filter-label" htmlFor="Tanggal">Tanggal</Form.Label>
                                <input 
                                className="form-control" 
                                id="tanggal_booking" 
                                type="date" 
                                ref={dateRef}
                                placeholder="Pilih Tanggal" />
                                </Col>
                                <Col className="col-lg">
                                <Form.Label className="car-filter-label" htmlFor="Waktu">Waktu Jemput/Ambil</Form.Label>
                                <Form.Select 
                                id="waktu_booking" 
                                ref={timeRef}
                                defaultValue="" >
                                    <option key={""} value="" disabled>Pilih Waktu</option>
                                    <option key={8} value="08:00:00">08.00 WIB</option>
                                    <option key={9} value="09:00:00">09.00 WIB</option>
                                    <option key={10} value="10:00:00">10.00 WIB</option>
                                    <option key={11} value="11:00:00">11.00 WIB</option>
                                    <option key={12} value="12:00:00">12.00 WIB</option>
                                </Form.Select>
                                </Col>
                                <Col lg>
                                <Form.Label className="car-filter-label" htmlFor="Penumpang">Jumlah Penumpang (optional)</Form.Label>
                                <input 
                                className="form-control" 
                                id="total_penumpang" 
                                type="number" 
                                ref={capacityRef}
                                placeholder="Jumlah Penumpang" />
                                </Col>
                                <Col className="d-flex flex-row justify-content-around py-3 mt-3">
                                <Button className="btn-danger btn-reset fw-semibold text-white" onClick={() => handleReset()}>Reset</Button>
                                <Button className="btn-banner fw-semibold" id="btn-filter" type="submit">Cari Mobil</Button>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                    
                </Container>
                <Container className="py-4">
                    <Row>
                        { filteredCars.map((car, index) => {
                            return <Col className="gy-3">
                            <Card key={index} className="car-card shadow border-0 flex-fill">
                                <div className="image-container">
                                <Card.Img variant="top" src={car.image}/>
                                </div>
                                <Card.Body className="d-flex flex-column gy-3">
                                    <Card.Title className="px-2">{car.manufacture}/{car.model}</Card.Title>
                                    <Card.Text className="px-2">
                                        <p className="fw-bold h5">{car.rentPerDay.toLocaleString("id", {
                                            style: "currency", 
                                            currency: "IDR",
                                            })}{" "}/ hari
                                        </p>
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
