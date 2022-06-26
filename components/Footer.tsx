import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.branding}>
                <div className={styles.logo}>
                    <Link href="/" passHref={true}>
                        <Image src="/images/logos/footer-logo.png" alt="Film room logo" height={25} width={25} />
                    </Link> 
                </div>
                <span>FilmRoom &copy; Copyright 2022</span>
            </div>
            <div className={styles.footer__content}>
                <Link href="/privacy-policy" passHref={true}>
                    <span>Privacy Policy</span>
                </Link>
                <Link href="/terms-of-service" passHref={true}>
                    <span>Terms of Service</span>
                </Link>
                <Link href="about-us" passHref={true}>
                    <span>About Us</span>
                </Link>
                <Link href="contact-us" passHref={true}>
                    <span>Contact Us</span>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;
