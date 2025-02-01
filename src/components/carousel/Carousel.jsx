import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import welfareGuru from '../../images/Guru_img 1.png';
import gestionePiano from '../../images/Pianista_Img 1.png';
import serviziOriginali from '../../images/Servizi_Img 1.png';
import piattafWeb from '../../images/Piattaforma_Img 1.png';
import { Container, Carousel, Card, Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

export default function MyCarousel() {
    return(
        <Container>
            <Carousel>
                <Carousel.Item>
                    <Card>
                        <Row>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Welfare Guru</Card.Title>
                                    <Card.Text>
                                        E' un professionista capace di affiancare le aziende in tutte le fasi propedeutiche all'attivazione di un piano welfare. Sia tu abbia già un sistema premiale basato su premi
                                        di risultato o incentivi diversia, sia che per te sia la prima esperienza il Welfare Guru saprà consigliarti la migliore soluzione in grado di ottimizzare la leva fiscale e 
                                        incentivare i dipendenti soddisfacendo i loro bisogni personali e familiari.
                                    </Card.Text>
                                    <Card.Link><BsArrowRight /> SCOPRI DI PIU'</Card.Link>
                                </Card.Body>
                            </Col>
                            <Col md={4}>
                                <Card.Img src={welfareGuru}/>
                            </Col>
                        </Row>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card>
                        <Row>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Gestione del piano</Card.Title>
                                    <Card.Text>fgdfgdfcghvjhgbjhbjhbghyjjgvjvfghfydcfmvjhgvggiuyiluhlhihklgggyfkfctgtgtgtgtgtgctfgfhfyhffyhfyyhfkjyfkjyf</Card.Text>
                                    <Card.Link><BsArrowRight /> SCOPRI DI PIU'</Card.Link>
                                </Card.Body>
                            </Col>
                            <Col md={4}>
                                <Card.Img src={gestionePiano}/>
                            </Col>
                        </Row>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}
