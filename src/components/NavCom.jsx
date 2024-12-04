import { useEffect, useState } from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import logoImg from '../assets/logo.png';

const NavCom = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Navbar
            expand="lg"
            className={`sticky-top ${isScrolled ? 'shadow-sm bg-white' : ''}`}
        >
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logoImg} alt="logo-img" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-uppercase">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#explore">Explore Foods</Nav.Link>
                        <Nav.Link href="#reviews">Reviews</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="#faq" className="number">
                            1800 798 123
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavCom;
