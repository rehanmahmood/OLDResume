import React from 'react'
import './Contact.css'
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-email">
                <p className="email-heading">
                    Contact my E-mail below!
                </p>
                <div className="email-icon">
                    <a href="mailto:rehanmahmood38@gmail.com">
                        <EmailIcon fontSize="large"/>
                    </a>
                </div>
            </div>
            <div className="authorship">
                <h1 className="name">
                    Rehan Mahmood © 2021
                </h1>
            </div>
            
        </div>
    )
}

export default Contact
