import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import imageApp from '../../images/App welfare MySarma.png';
import { BsArrowRight } from "react-icons/bs";

export default function MyWelfareApp() {
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

    return(
        <Container className="mt-5">
        {isMobile ? (
            <Row>
                <Col xs={12}>
                    <Container>
                        <h1 style={{color: '#1A316B'}}>App</h1>
                        <img src={imageApp} alt="immagine app"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim eget morbi sed amet habitant. At egestas nisl sed luctus scelerisque convallis. Tempus, ut elementum risus, tellus commodo tellus.</p>
                        <a href="#" style={{textDecoration: 'none'}}><BsArrowRight /> COMING SOON</a>
                    </Container>
                </Col>
            </Row>
        
        ) : (
            <Row>
                <Col md={8}>
                    <h1 style={{color: '#1A316B'}} className="mb-5">App</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim eget morbi sed amet habitant. At egestas nisl sed luctus scelerisque convallis. Tempus, ut elementum risus, tellus commodo tellus.</p>
                    <a href="#" style={{textDecoration: 'none'}}><BsArrowRight /> COMING SOON</a>
                </Col>
                <Col md={4}>
                    <img src={imageApp}/>
                </Col>
            </Row>
        )}
        </Container>
    )
}