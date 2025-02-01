import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './navbar/Navbar.jsx';
import { Container } from 'react-bootstrap';
import MyHeader from './header/Header.jsx';
import MyBody from './body/Body.jsx';
import MyCarousel from './carousel/Carousel.jsx';

export default function Homepage() {
    return (
        <Container fluid className='px-0'>
            <MyNavbar />
            <MyHeader />
            <MyBody />
            <MyCarousel />
        </Container>
    )
}