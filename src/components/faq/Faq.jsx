import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Container, Button } from "react-bootstrap";
import './faq.css';

export default function Faq() {
    //Array di oggetti con Faq
    const faqText = [
        {
            title: "Che differenza c'è tra il Piano Go e il Piano Pro?",
            text: "Il Piano Go è stato pensato per gestire il welfare aziendale derivante da CCNL o i fringe benefits. Per godere della fiscalità agevolata è necessario rispettare nell'erogazione di questi beni il limite massimo annuo di 258,23 euro previsto dal Tuir per ciascun dipendente. Restando entro questa soglia, infatti, la somma non concorre a formare reddito da lavoro dipendente. Il Piano PRO invece è non ha limiti di importo e consente di accedere a tutti i servizi welfare (flexible benefits)."
        },
        {
            title: "Che servizi comprende il Piano Go?",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim eget morbi sed amet habitant. At egestas nisl sed luctus scelerisque convallis. Tempus, ut elementum risus, tellus commodo tellus."
        },
        {
            title: "Come avviene la gestione del Piano Go?",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim eget morbi sed amet habitant. At egestas nisl sed luctus scelerisque convallis. Tempus, ut elementum risus, tellus commodo tellus."
        },
        {
            title: "Il Piano PRO comprende i servizi del Piano Go?",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim eget morbi sed amet habitant. At egestas nisl sed luctus scelerisque convallis. Tempus, ut elementum risus, tellus commodo tellus."
        },
        {
            title: "Che servizi comprende il Piano PRO?",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim eget morbi sed amet habitant. At egestas nisl sed luctus scelerisque convallis. Tempus, ut elementum risus, tellus commodo tellus."
        },
        {
            title: "E' possibile passare dal Piano Go al Piano PRO?",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim eget morbi sed amet habitant. At egestas nisl sed luctus scelerisque convallis. Tempus, ut elementum risus, tellus commodo tellus."
        }
    ];

    //Stato che controlla la visibilità di ogni FAQ
    const [visibleFaqs, setVisibleFaqs] = useState(faqText.map(() => false));

    const toggleFaq = (index) => {
        //Stato che controlla il click della domanda
        const newVisibleFaqs = [...visibleFaqs];
        newVisibleFaqs[index] = !newVisibleFaqs[index];
        setVisibleFaqs(newVisibleFaqs);
    }
    

    return(
        <Container fluid className="text-center faqSize">
            <h3 className="my-5">Domande frequenti</h3>
            {faqText.map((info, index) => (
                <div key={index} className="text-start faqSize">
                <p>{info.title} <Button variant="transparent" onClick={() => toggleFaq(index)}>{visibleFaqs[index] ? <IoIosArrowUp /> : <IoIosArrowDown />}</Button></p>
                {visibleFaqs[index] && <p>{info.text}</p>}
                </div>
            ))}
        </Container>
    )
}