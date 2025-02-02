import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import welfareGuru from '../../images/Guru_img 1.png';
import gestionePiano from '../../images/Pianista_Img 1.png';
import serviziOriginali from '../../images/Servizi_Img 1.png';
import piattafWeb from '../../images/Piattaforma_Img 1.png';
import { Container, Carousel, Card, Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import './carousel.css';

export default function MyCarousel() {
    //Stato che controlla se siamo in modalità desktop o mobile
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
    //Array di oggetti per contenuto card
    const cards = [
        {
            title: "Welfare Guru",
            text: "E' un professionista capace di affiancare le aziende in tutte le fasi propedeutiche all'attivazione di un piano welfare. Sia tu abbia già un sistema premiale basato su premi di risultato o incentivi diversia, sia che per te sia la prima esperienza il Welfare Guru saprà consigliarti la migliore soluzione in grado di ottimizzare la leva fiscale e incentivare i dipendenti soddisfacendo i loro bisogni personali e familiari.",
            link: "SCOPRI DI PIU'",
            imgSrc: welfareGuru,
            bgColor: "#283b6c"
        },
        {
            title: "Gestione del piano",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim eget morbi sed amet habitant. At egestas nisl sed luctus scelerisque convallis. Tempus, ut elementum risus, tellus commodo tellus.",
            link: "SCOPRI DI PIU'",
            imgSrc: gestionePiano,
            bgColor: "#716aca"
        },
        {
            title: "Servizi originali ed esclusivi",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim eget morbi sed amet habitant. At egestas nisl sed luctus scelerisque convallis. Tempus, ut elementum risus, tellus commodo tellus.",
            link: "SCOPRI DI PIU'",
            imgSrc: serviziOriginali,
            bgColor: "#426bd1"
        },
        {
            title: "Piattaforma web dedicata",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim eget morbi sed amet habitant. At egestas nisl sed luctus scelerisque convallis. Tempus, ut elementum risus, tellus commodo tellus.",
            link: "SCOPRI DI PIU'",
            imgSrc: piattafWeb,
            bgColor: "#299882"
        }
    ];

    return(
        <Container>
            {isMobile ? (
                //Modalità mobile per visualizzare le card una sotto l'altra
                <Container>
                {cards.map((allCard, index) => (
                    <Card key={index} style={{backgroundColor: allCard.bgColor}} className="mb-5">
                        <Row>
                            <Col xs={12}>
                                
                                <Card.Body>
                                    <Card.Title style={{color: '#FFFFFF'}}><h1>{allCard.title}</h1></Card.Title>
                                    <Card.Img src={allCard.imgSrc} />
                                    <Card.Link className="linkMobile"><BsArrowRight /> {allCard.link}</Card.Link>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                ))}
                </Container>
                ) : (
                //Modalità desktop per visualizzare il carosello di card    
                <Carousel>
                    {cards.map((card, index) => (
                        <Carousel.Item key={index}>
                            <Card style={{backgroundColor: card.bgColor}}>
                                <Row>
                                    <Col md={8}>
                                        <Card.Body style={{color: '#FFFFFF'}} className="ms-4">
                                            <Card.Title><h1 className="mb-5">{card.title}</h1></Card.Title>
                                            <Card.Text className="mb-5">{card.text}</Card.Text>
                                            <Card.Link className="mt-5 linkDesktop"><BsArrowRight /> {card.link}</Card.Link>
                                        </Card.Body>
                                    </Col>
                                    <Col md={4}>
                                        <Card.Img src={card.imgSrc} />
                                    </Col>
                                </Row>
                            </Card>
                        </Carousel.Item>
                    ))}
                </Carousel>
                )
            }
        </Container>
    )
}
