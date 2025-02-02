import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from "react-bootstrap";
import icona from '../../images/Omninext_Icon.png';
import { BsArrowRight } from "react-icons/bs";

export default function CardOmninext() {
    //Stato che controlla se siamo su desktop o mobile
    const [isMobile, setIsMobile] = useState(false);
    //Aggiorniamo lo stato quando la finestra si ridimensiona
    useEffect (() => {
        const ifIsMobile = () => setIsMobile(window.innerWidth <= 768);
        
        ifIsMobile(); //La funzione viene eseguita inizialmente una volta
        window.addEventListener('resize', ifIsMobile);
        
        return () => {
            window.removeEventListener('resize', ifIsMobile);
        }
    }, []);

    return (
        <Container className="my-5">
            {isMobile ? (
                <Card style={{width: '365px', borderRadius: '30px'}} className="ms-5 border-radius">
                <Row>
                    <Col xs={12}>
                        <Container className="text-center mb-4">
                            <img src={icona} alt="icona omninext" className="my-4"/>
                            <div className="text-start">
                            <h2 className="mb-4">Facciamo parte di un grande gruppo!</h2>
                            <a href="#"  ><BsArrowRight /> SCOPRI DI PIU'</a>
                            </div>
                        </Container>
                    </Col>
                </Row>
                </Card>
            ) : (
                <Card style={{borderRadius: '30px'}}>
                <Row>
                    <Col md={4}>
                        <img src={icona} alt="icona omninext" className="my-5 ms-5"/>
                    </Col>
                    <Col md={8}>
                        <div style={{margin: '80px'}}>
                            <h2>Facciamo parte di un grande gruppo!</h2>
                            <p>Il Gruppo Omninext è costituito da aziende altamente specializzate interconnesse tra loro, che permettono di ricoprire diversi settori industriali per necessità di Business personalizzate.</p>
                            <a href="#"><BsArrowRight /> SCOPRI DI PIU'</a>
                        </div>
                    </Col>
                </Row>
                </Card>
            )}
        </Container>
    )
}