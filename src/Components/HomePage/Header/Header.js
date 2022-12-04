import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../../src/img/header/e86a207b40753163e9886926ff9d5048.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handelSignOut =()=>{
        signOut(auth)
    }


    return (
        <Navbar sticky='top' className='navbar' style={{ 'padding': '0px' }} collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><img className='rounded' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='navber-items' style={{ 'color': 'lightcyan' }} as={Link} to="home#products">Product</Nav.Link>
                        <Nav.Link className='navber-items' style={{ 'color': 'lightcyan' }} as={Link} to="home#reviews">Review</Nav.Link>
                        <Nav.Link className='navber-items' style={{ 'color': 'lightcyan' }} as={Link} to="home#about">About</Nav.Link>

                    </Nav>
                    <Nav>

                    {
                        user && <>
                         <Nav.Link className='navber-items' style={{ 'color': 'lightcyan' }} as={Link} to="addItem">AddProduct</Nav.Link>

                         <Nav.Link className='navber-items' style={{ 'color': 'lightcyan' }} as={Link} to="allProducts">CutProduct</Nav.Link>
                        
                        </>
                    }



                        { user ? <Nav.Link onClick={handelSignOut}>SignOut</Nav.Link>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;