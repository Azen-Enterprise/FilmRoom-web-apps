import React from 'react';
import Image from 'next/Image';
import styles from './styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.branding}>
                <div className={styles.logo}>
                    <Image src="/images/logos/footer-logo.png" alt="Film room logo" height={25} width={25} />
                </div>
                <span>FilmRoom &copy; Copyright 2022</span>
            </div>
            <div className={styles.footer__content}>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>About Us</span>
                <span>Contact Us</span>
            </div>
        </footer>
    )
}

export default Footer;
