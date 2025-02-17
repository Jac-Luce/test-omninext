import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, OverlayTrigger, Tooltip, ListGroup, Container } from "react-bootstrap";
import { CiCircleInfo } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import './pianoGo.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function PianoGoCard() {
    const [visibleList, setVisibleList] = useState(false);

    const toggleList = () => { 
        setVisibleList(!visibleList);
    };

    return (
        <Container className="promoCard">
            <Card style={{backgroundColor:'#E6ECF9', border: '0px'}}>
                <Card.Body>
                    <Card.Title className="text-center">Piano GO!</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center">a partire da</Card.Subtitle>
                    <Card.Text>
                        <p className="text-center">€12,50 + iva</p>
                        <p className="text-center">all'anno / per utente 
                            <span>
                                <OverlayTrigger overlay={<Tooltip className="tooltipInfo" id="tooltip-disabled">Prezzo calcolato per un'azienda di 150 dipendenti, 250€ buoni welfare</Tooltip>}>
                                    <span className="d-inline-block">
                                        <Button className="border-0 pb-2" variant="transparent" style={{pointerEvents: 'none', color: '#112340' }} ><CiCircleInfo /></Button>
                                    </span>
                                </OverlayTrigger>  
                            </span>
                        </p>
                        <div className="divided"></div>
                        <ListGroup className="d-none d-md-block">
                            <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> Utenti illimitati</ListGroup.Item>
                            <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> Piattaforma MySarma</ListGroup.Item>
                            <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> Gestione del contratto online</ListGroup.Item>
                            <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> MySarma Welfare Card (fino a 258€)</ListGroup.Item>
                            <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> Importi personalizzabili online</ListGroup.Item>
                            <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> Sconti e Coupon</ListGroup.Item>
                        </ListGroup>
                        <>
                            <Button className="d-block d-md-none btnMobileCard" variant="transparent" onClick={toggleList}>
                                {visibleList ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </Button>
                            {visibleList && 
                            <ListGroup>
                                <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> Utenti illimitati</ListGroup.Item>
                                <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> Piattaforma MySarma</ListGroup.Item>
                                <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> Gestione del contratto online</ListGroup.Item>
                                <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> MySarma Welfare Card (fino a 258€)</ListGroup.Item>
                                <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> Importi personalizzabili online</ListGroup.Item>
                                <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> Sconti e Coupon</ListGroup.Item>
                            </ListGroup>
                            }
                        </>
                    </Card.Text>
                    <>
                    <Button variant="rounded btnAttivaPiano px-4">Attiva Piano GO!</Button>
                    <div className="borderBtnGo"></div>
                    <Card.Text className="mt-5 pt-2 text-center">
                        <p>Vuoi maggiori informazioni sul piano?</p>
                        <Card.Link href="#">Scopri di più</Card.Link>
                    </Card.Text>
                    </>
                </Card.Body>
            </Card>
            <div className="borderCard"></div>
            <div className="text-center mt-5 pt-5 d-none d-md-block">
                <p>Cerchi un piano su misura per la tua azienda?</p>
                <a href="#">Scopri il piano PRO</a>
            </div>
        </Container>
    )
}