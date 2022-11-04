import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Link className='text-white fs-3 me-5 text-decoration-none text-uppercase fw-bold' to='/'>Hotel Management</Link>
                    <Nav className="ms-auto">
                        <Link className='text-white fs-5 ms-5 text-decoration-none' to='/'>Home</Link>
                        <Link className='text-white fs-5 ms-5 text-decoration-none' to='/about'>About</Link>
                        <Link className='text-white fs-5 ms-5 text-decoration-none' to='/single-room'>Single Room</Link>
                        <Link className='text-white fs-5 ms-5 text-decoration-none' to='/double-room'>Double Room</Link>
                        <Link className='text-white fs-5 ms-5 text-decoration-none' to='/login'>Login</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;