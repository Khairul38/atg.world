import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import Search from '../../images/icon/search.png'
import './Header.css';
import { Modal } from 'react-bootstrap';
import CreateAccount from '../CreateAccount/CreateAccount';
import SignIn from '../SignIn/SignIn';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container py-2">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='mx-auto my-3 my-lg-0 search-field'>
                            <img src={Search} alt="" />
                            <input type="search" placeholder="Search for your favorite groups in ATG" />
                        </div>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Create account. <span style={{ color: '#4C6FF5' }} >It's free!</span>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link onClick={handleShow} className="dropdown-item" to="">Create account</Link>
                                        <Modal size="lg" show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>

                                            </Modal.Header>
                                            <Modal.Body>
                                                <CreateAccount></CreateAccount>
                                            </Modal.Body>
                                        </Modal>
                                    </li>
                                    <li>
                                        <Link onClick={handleShow}  className="dropdown-item" to="">Sign In</Link>
                                        <Modal size="lg" show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>

                                            </Modal.Header>
                                            <Modal.Body>
                                                <SignIn></SignIn>
                                            </Modal.Body>
                                        </Modal>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;