import React from 'react';
import {Container} from "reactstrap";

const Footer = () => {
    return (
        <Container className='footer-container'>
            <div className='footer'>
                @ {new Date().getFullYear()} tipa-cosmolot.ua Все права защищены.
            </div>
        </Container>
    );
};

export default Footer;