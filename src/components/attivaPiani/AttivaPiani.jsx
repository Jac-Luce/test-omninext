import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from "react-bootstrap";
import CardGo from "./CardGo.jsx";
import CardPro from "./CardPro.jsx";

export default function AttivaPiani() {
    return(
        <Container className="text-center my-5 py-5">
            <h1>Attivo il tuo piano Go oppure Pro</h1>
            <p>Scegli se attivare subito il Piano Go oppure richiedere un preventivo per il Piano Pro al nostro consulente</p>
            <Container></Container>
        </Container>
    )
}