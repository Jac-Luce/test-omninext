import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import bgBenessere from '../../images/Benessere_Back.png';

export default function BodyBenessere() {
    return(
        <Container fluid style={{backgroundImage: `url(${bgBenessere})`, color: '#FFFFFF', height: '455px',}}>
            <p>Sfrutta al meglio il tuo potenziale e fai crescere</p>
            <p>il benessere dei tuoi collaboratori</p>
            <p>Attiva subito il Piano Go oppure richiedi un preventivo gratuito per attivare un Piano Pro, il nostro Welfare guru è pronto a consigliarti la migliore soluzione in base alle tue esigenze.</p>
        </Container>
    )
}