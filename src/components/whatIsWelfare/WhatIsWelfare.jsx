import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container, Button} from "react-bootstrap";
import mano from '../../images/Mano Welfare@3x 1.png';
import calamita from '../../images/Attrarre talenti@3x 1.png';
import salvadanaio from '../../images/Risparmio welfare@3x 1.png';
import manubrio from '../../images/Successo Welfare@3x 1.png';

export default function WhatIsWelfare() {
    return(
        <Container className="text-center my-5 py-5">
            <h1>Welfare aziendale?</h1>
            <p>Te lo diciamo noi se non lo sai</p>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="mt-5">
                            <img src={mano} alt="immagine welfare"/>
                            <h4>Cos'è il Welfare Aziendale?</h4>
                            <p>Tutti ne parlano ma pochi conoscono il suo potenziale</p>
                            <Button variant="outline-dark">Scopri di più</Button>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="mt-5">
                            <img src={calamita} alt="immagine attrarre talenti"/>
                            <h4>Come posso attrarre?</h4>
                            <p>Fidelizza e attrai nuovi talenti con un piano welfare mirato</p>
                            <Button variant="outline-dark">Scopri di più</Button>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="mt-5">
                            <img src={salvadanaio} alt="risparmio welfare"/>
                            <h4>Normative e vantaggi fiscali</h4>
                            <p>Risparmiare è facile grazie al tuo nuovo piano welfare</p>
                            <Button variant="outline-dark">Scopri di più</Button>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="mt-5">
                            <img src={manubrio} alt="successo welfare"/>
                            <h4>Storie attrattive</h4>
                            <p>Ascoltare le testimonianze di chi ha migliorato il proprio stile di vita</p>
                            <Button variant="outline-dark">Scopri di più</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}