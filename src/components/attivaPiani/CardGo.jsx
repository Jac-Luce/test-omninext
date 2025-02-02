import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, OverlayTrigger, Tooltip, ListGroup, Container } from "react-bootstrap";
import { CiCircleInfo } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import './cardGo.css';

export default function CardGo() {
    return(
        <Container className="promoCardGo mt-5">
            <Card style={{backgroundColor:'#E6ECF9', border: '0px'}}>
                <Card.Body>
                    <Card.Title className="text-center">Piano GO!</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center">a partire da</Card.Subtitle>
                    <Card.Text>
                        <p className="text-center">€12,50 + iva</p>
                        <p className="text-center">all'anno / per utente 
                            <span>
                                <OverlayTrigger overlay={<Tooltip className="infoTooltip" id="tooltip-disabled">Prezzo calcolato per un'azienda di 150 dipendenti, 250€ buoni welfare</Tooltip>}>
                                    <span className="d-inline-block">
                                        <Button className="border-0 pb-2" variant="transparent" style={{pointerEvents: 'none', color: '#112340' }} ><CiCircleInfo /></Button>
                                    </span>
                                </OverlayTrigger>  
                            </span>
                        </p>
                        <div className="divided"></div>
                        <ListGroup>
                            <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> Utenti illimitati</ListGroup.Item>
                            <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> Piattaforma MySarma</ListGroup.Item>
                            <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> Gestione del contratto online</ListGroup.Item>
                            <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> MySarma Welfare Card (fino a 258€)</ListGroup.Item>
                            <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> Importi personalizzabili online</ListGroup.Item>
                            <ListGroup.Item className="border-0" style={{backgroundColor:'#E6ECF9'}}><FaCheckCircle /> Sconti e Coupon</ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                    <>
                        <Button variant="rounded btnGo px-4">Attiva Piano GO!</Button>
                        <div className="btnGoBorder"></div>
                        <Card.Text className="mt-5 pt-2 text-center">
                            <p>Vuoi maggiori informazioni sul piano?</p>
                            <Card.Link href="#">Scopri di più</Card.Link>
                        </Card.Text>
                    </>
                </Card.Body>
            </Card>
            <div className="borderCardGo"></div>
        </Container>
    )
}