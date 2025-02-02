import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import bgBenessere from '../../images/Benessere_Back.png';

export default function BodyBenessere() {
    return(
        <Container fluid style={{backgroundImage: `url(${bgBenessere})`, color: '#FFFFFF', height: '455px'}} className="d-flex justify-content-center align-items-center">
            <div style={{marginLeft: '100px', marginRight: '100px'}} className="text-center">
            <p style={{fontSize: '22px'}}>Sfrutta al meglio il tuo potenziale e fai crescere</p>
            <p style={{fontSize: '38px'}}>il benessere dei tuoi collaboratori</p>
            <p style={{fontSize: '18px'}}>Attiva subito il Piano Go oppure richiedi un preventivo gratuito per attivare un Piano Pro, il nostro Welfare guru è pronto a consigliarti la migliore soluzione in base alle tue esigenze.</p>
            </div>
        </Container>
    )
}