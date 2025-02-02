import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import logoMySarma from '../../images/Mysarma_Logo_W.png';
import './footer.css';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaRegCopyright } from "react-icons/fa";

export default function MyFooter() {
    return(
        <Container fluid className="divFooter pt-5 px-5">
            <Row>
                <Col xs={12} md={2} className="text-center logoMobile">
                    <img src={logoMySarma} alt="logo MySarma"/>
                    <div className="bandieraLine">
                        <div className="lineGreen"></div>
                        <div className="lineWhite"></div>
                        <div className="lineRed"></div>
                    </div>
                    <p>IL welfare aziendale tutto italiano a portata di PMI.</p>
                </Col>
                <Col xs={6} md={2}>
                    <p>Chi Siamo</p>
                    <p><a href="#" className="linkColor">Vision & Mission</a></p>
                    <p><a href="#" className="linkColor">Il gruppo Omninext</a></p>
                    <p><a href="#" className="linkColor">Contattaci</a></p>
                </Col>
                <Col xs={6} md={2}>
                    <p>Soluzioni welfare</p>
                    <p><a href="#" className="linkColor">Flexible benefit</a></p>
                    <p><a href="#" className="linkColor">Premio di risultato</a></p>
                    <p><a href="#" className="linkColor">Performance Management</a></p>
                </Col>
                <Col xs={6} md={2}>
                    <p>Seguici su</p>
                    <p style={{color: '#898989'}}><TiSocialLinkedinCircular /> <a href="#" className="linkColor">LinkedIn</a></p>
                </Col>
                <Col md={1} className="d-none d-md-block">
                    <div className="verticalLine"></div>
                </Col>
                <Col xs={6} md={2}>
                    
                    <p><a href="#" style={{color: '#A9A5DF', textDecoration: 'none'}}>Piano GO!</a></p>
                    <p className="mb-5"><a href="#" style={{color: '#A9A5DF', textDecoration: 'none'}}>Piano PRO</a></p>
                    <p><a href="#" className="linkColor">Diventa Partner</a></p>                
                </Col>
            </Row>
            <Row className="mt-5">
                <Container>
                    <div className="orizontalLine"></div>
                    <div className="d-flex justify-content-between flex-column flex-md-row" style={{color: '#898989'}}>
                        <p>Copyright <FaRegCopyright /> MySarma srl - Tutti i diritti riservati</p>
                        <p>Privacy e Cookie Policy</p>
                    </div>
                </Container>
            </Row>
        </Container>
    )
}