import React from 'react';

import { fireBaseMediaURL } from '../../config';

import './Footer.css';

const Footer = () => {
    return (
        <footer id='footer' className='footer'>
            <div className='footer-shop-icon'>
                <img className='icon-image'alt="Vigg Icon" src={ fireBaseMediaURL('icons%2Fvigg.png')} width="250px"/>
                <p className="icon-copyright">Copyright © 2020 VIGG Marketplace. All rights reserved.</p>
            </div>
            <ul className='footer-nav-links'>
                <li className='footer-nav-link'><a href="/">Home</a></li>
                <li className='footer-nav-link'><a href="/about-us">About Us</a></li>
                <li className='footer-nav-link'><a href="/contact-us">Contact Us</a></li>
                <li className='footer-nav-link'><a href="/register">Register</a></li>
            </ul>
            <ul className='footer-nav-links'>
                <li className='footer-nav-link'>
                    <a href='https://facebook.com'>
                        <img 
                            src={ fireBaseMediaURL('shoes-img%2Ffb-icon.png') } 
                            alt="fb-logo" 
                            width="40em" 
                            height="40em" 
                        />
                    </a>
                </li>
                <li className='footer-nav-link'>
                    <a href='https://instagram.com'>
                        <img 
                            src={ fireBaseMediaURL('shoes-img%2Finsta-icon.png') } 
                            alt="insta-logo" 
                            width="40em" 
                            height="40em" 
                        />
                    </a>
                </li>
                <li className='footer-nav-link'>
                    <a href='https://linkedin.com'>
                        <img 
                            src={ fireBaseMediaURL('shoes-img%2Flinkedin-icon.png') } 
                            alt="linkedin-logo" 
                            width="40em" 
                            height="40em" 
                        />
                    </a>
                </li>
            </ul>
            <ul className='footer-nav-links'>
                <li className='footer-info-link'>
                    <a href='https://goo.gl/maps/9xQtfmudLLADbtYBA'>
                        <svg className="icon bi bi-map" width="2em" height="2em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M15.817.613A.5.5 0 0 1 16 1v13a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 14.51l-4.902.98A.5.5 0 0 1 0 15V2a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0l4.902.98 4.902-.98a.5.5 0 0 1 .415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z"/>
                        </svg>
                    </a>
                </li>
                <li className='footer-info-link'>
                    <a href="tel:+12334567890">
                        <svg className="icon bi bi-phone" width="2em" height="2em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                            <path fillRule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                    </a>
                </li>
                <li className='footer-info-link'>
                    <a href="mailto:viecom@gmail.com">
                        <svg className="icon bi bi-envelope" width="2em" height="2em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                            <path d="M.05 3.555C.017 3.698 0 3.847 0 4v.697l5.803 3.546L0 11.801V12c0 .306.069.596.192.856l6.57-4.027L8 9.586l1.239-.757 6.57 4.027c.122-.26.191-.55.191-.856v-.2l-5.803-3.557L16 4.697V4c0-.153-.017-.302-.05-.445L8 8.414.05 3.555z"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;