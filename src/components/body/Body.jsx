import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Card, Container} from "react-bootstrap";
import Guru from '../../images/Guru_Male 1@3x 1.png';
import Piano from '../../images/Piano_Fem@3x 1.png';
import Servizi from '../../images/Servizi@3x 1.png';
import PiatWelf from '../../images/Piattaforma_Male 1 1.png';
import './body.css';

export default function MyBody() {
    return (
        <Container className="text-center mt-5 pt-5 marginMobile">
            <h2>Offriamo alle PMI supporto nei seguenti ambiti</h2>
            <Container fluid className="d-none d-md-block mt-5 pt-5">
                <Row>
                    <Col md={3} className="p-0">
                        <Card className="border-0 cardSize">
                            <Card.Img src={Guru} className="guruImage ms-4"/>
                            <Card.Body className="text-center">
                                <Card.Title>Welfare Guru</Card.Title>
                                <Card.Text>per un piano di welfare aziendale personalizzato</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="border-0 cardSize">
                            <Card.Img src={Piano} className="pianoImage mt-4"/>
                            <Card.Body className="text-center">
                                <Card.Title>Gestione del piano</Card.Title>
                                <Card.Text>welfare e dei fornitori di servizi a livello locale</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="border-0 cardSize">
                            <Card.Img src={Servizi} className="serviziImage mt-4"/>
                            <Card.Body className="text-center">
                                <Card.Title>Servizi welfare</Card.Title>
                                <Card.Text>in ambito flexible benefit & employee caring</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="border-0 cardSize ms-5">
                            <Card.Img src={PiatWelf} className="piattafImage mt-3 ms-2"/>
                            <Card.Body className="text-center">
                                <Card.Title>Piattaforma Welfare</Card.Title>
                                <Card.Text>accessibile da qualunque tipo di dispositivo</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )

}