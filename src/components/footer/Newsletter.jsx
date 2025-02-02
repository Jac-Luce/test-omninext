import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import newsletter from '../../images/Newsletter_Back.png';
import './news.css';

export default function NewsLetter() {
    return(
        <Container fluid className='mt-5 d-flex justify-content-center align-items-center' style={{backgroundImage: `url(${newsletter})`, color: '#FFFFFF', height: '455px'}}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h4>Resta aggiornato</h4>
                        <p>Iscriviti alla newsletter per ricevere aggiornamenti sulle nuove offerte e partner MySarma</p>
                    </Col>
                    <Col md={6}>
                        <p>Il tuo indirizzo mail</p>
                        <InputGroup hasValidation className="divBtnInvia">
                            <Form.Control placeholder="@" aria-label="Indirizzo email"/>
                            <Button className="btnInvia ms-5">Invia</Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}