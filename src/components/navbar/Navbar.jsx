import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import './navbar.css';
import { GrLogin } from "react-icons/gr";
import { useState, useEffect } from 'react';

const MyNavbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    /*const mobileDropdown = () => {
        setShowDropdown((preShowDropdown) => !preShowDropdown);
    }*/

    const mobileHome = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('mobile', mobileHome);

        return () => {
            window.removeEventListener('mobile', mobileHome);
        };
    }, []);

    /*const mobileDropdown = () => {
        if (isMobile) {
            setShowDropdown(preShowDropdown => !preShowDropdown);
        }
    };*/

    const mobileDropdown = (id) => {
        if (isMobile) {
            setShowDropdown(prev => (prev === id ? null : id));
        }
    };

    return (
        <Navbar expand="lg" className='navbarSize'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/' className='me-5'>
                    <img className='navbar_sizelogo' alt='logo navbar' src={logo} />
                </Navbar.Brand>
                <Button variant='link' className='mobileLoginBtn'><GrLogin/>  Accedi</Button>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <NavDropdown title="Welfare aziendale" className='me-5' /*id="collapsible-nav-dropdown"*/ id='welfareDrop'
                        show={showDropdown === 'welfareDrop'}
                        //onMouseEnter={() => setShowDropdown(true)}
                        //onMouseLeave={() => setShowDropdown(false)}
                        onMouseEnter={() => /*window.innerWidth > 768*/ !isMobile && setShowDropdown('welfareDrop')}
                            onMouseLeave={() => /*window.innerWidth > 768*/ !isMobile && setShowDropdown(null)}
                            onClick={() => mobileDropdown('welfareDrop')}
                    >
                        <NavDropdown.Item href="#action3">Cos'è il welfare</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Come posso attrarre talenti</NavDropdown.Item>
                        <NavDropdown.Item href="#action5">Storie attrattive</NavDropdown.Item>
                        <NavDropdown.Item href="#action6">Normative e vantaggi fiscali</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Chi Siamo" id="chiSiamoDrop" className='me-5'
                    show={showDropdown === 'chiSiamoDrop'}
                    //onMouseEnter={() => setShowDropdown(true)}
                    //onMouseLeave={() => setShowDropdown(false)}
                    onMouseEnter={() => /*window.innerWidth > 768*/ !isMobile && setShowDropdown('chiSiamoDrop')}
                            onMouseLeave={() => /*window.innerWidth > 768*/ !isMobile && setShowDropdown(null)}
                            onClick={() => mobileDropdown('chiSiamoDrop')}
                    >
                        <NavDropdown.Item href="#action3">Chi Siamo</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Il gruppo Omninext</NavDropdown.Item>
                        <NavDropdown.Item href="#action5">Contattaci</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="I nostri servizi" id="serviziDrop" className='me-5'
                    show={showDropdown === 'serviziDrop'}
                    //onMouseEnter={() => setShowDropdown(true)}
                    //onMouseLeave={() => setShowDropdown(false)}
                    onMouseEnter={() => /*window.innerWidth > 768*/ !isMobile && setShowDropdown('serviziDrop')}
                            onMouseLeave={() => /*window.innerWidth > 768*/ !isMobile && setShowDropdown(null)}
                            onClick={() => mobileDropdown('serviziDrop')}
                    >
                        <NavDropdown.Item href="#action3">Welfare Guru</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Gestione del piano</NavDropdown.Item>
                        <NavDropdown.Item href="#action5">Piattaforma welfare</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Soluzioni welfare" id="soluzioniDrop" className='me-5'
                    show={showDropdown === 'soluzioniDrop'}
                    //onMouseEnter={() => setShowDropdown(true)}
                    //onMouseLeave={() => setShowDropdown(false)}
                    onMouseEnter={() => /*window.innerWidth > 768*/ !isMobile && setShowDropdown('soluzioniDrop')}
                            onMouseLeave={() => /*window.innerWidth > 768*/ !isMobile && setShowDropdown(null)}
                            onClick={() => mobileDropdown('soluzioniDrop')}
                    >
                        <NavDropdown.Item href="#action3">Flexible benefit</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Premio di risultato</NavDropdown.Item>
                        <NavDropdown.Item href="#action5">Performance management</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" className='me-5'>Blog</Nav.Link>
                </Nav>
                
                <Button variant="rounded buttonClik"><GrLogin /> Accedi alla piattaforma</Button>
                <div className='borderBtn'></div>
              
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;