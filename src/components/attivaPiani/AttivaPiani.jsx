import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from "react-bootstrap";
import CardGo from "./CardGo.jsx";
import CardPro from "./CardPro.jsx";

export default function AttivaPiani() {
    return(
        <Container className="my-5 py-5">
            <div className="mb-5 text-center ">
                <h1 style={{color: '#112340'}}>Attivo il tuo piano Go oppure Pro</h1>
                <p style={{color: '#7D8797'}} className="mt-3">Scegli se attivare subito il Piano Go oppure richiedere un preventivo per il Piano Pro al nostro consulente</p>
            </div>
            <Container>
                <Row>
                    <Col md={6}>
                        <CardGo />
                    </Col>
                    <Col md={6}>
                        <CardPro />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}