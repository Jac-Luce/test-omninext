import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Toast } from "react-bootstrap";
import './header.css';
import imageToast from '../../images/toast.png';
import PianoGoCard from "../card/PianoGo.jsx";

export default function MyHeader() {

    return (
        <Container fluid className="bgHeader">
            <Container className="divHeader mx-0">
                <Container fluid className="bodyHeader">
                    <h1 style={{fontSize: '70px'}}>Il Welfare aziendale a portata di PMI</h1>
                    <p style={{fontSize: '24px'}}>MySarma nasce con l'obiettivo di supportare le aziende a rispondere concretamente ai bisogni di welfare dei propri dipendenti e collaboratori.</p>
                    <Container className="divToast">
                        <Toast className="sizeToast">
                            <Toast.Header>
                                <img src={imageToast} className="rounded me-2" alt="toastImage" />
                                <small>Da oggi puoi attivare il tuo piano welfare direttamente online ed in pochi semplici passaggi grazie al <a href="#">Piano GO!</a></small>
                            </Toast.Header>
                        </Toast>
                        {/*Visualizzazzione del paragrafo in modalità mobile */}
                        <p className="pMobile">Da oggi puoi attivare il tuo piano welfare direttamente online ed in pochi semplici passaggi grazie al <a href="#">Piano GO!</a></p>
                    </Container>
                </Container>
            </Container>

            <PianoGoCard />

        </Container>
    )
}