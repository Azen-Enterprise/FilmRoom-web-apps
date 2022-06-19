import React from 'react';
import Image from 'next/Image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Navbar } from '../../components';
import styles from '../../styles/Main.module.css';

// Demo
import Poster0 from '../../assets/demo/poster0.jpeg';
import Poster1 from '../../assets/demo/poster1.jpeg';
import Poster2 from '../../assets/demo/poster2.jpeg';
import Poster3 from '../../assets/demo/poster3.jpeg';
import Poster4 from '../../assets/demo/poster4.jpeg';
import Poster5 from '../../assets/demo/poster5.jpeg';
import Poster6 from '../../assets/demo/poster6.jpeg';
import Poster7 from '../../assets/demo/poster7.jpeg';
import Poster8 from '../../assets/demo/poster8.jpeg';
import Poster9 from '../../assets/demo/poster9.jpeg';
import Poster10 from '../../assets/demo/poster10.jpeg';

const Home = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <div className={styles.homeContainer}>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.sectionHeader}>
                    <h6>Recently Purchased</h6>
                    <div className={styles.block} />
                </div>
                <div className={styles.carouselWrapper}>
                    <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster9} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster10} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster2} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster3} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster8} alt="image cover art" className={styles.coverArt} />
                        </div>
                    </Carousel>
                </div>
                <div className={styles.sectionHeader}>
                    <h6>TV Shows</h6>
                    <div className={styles.block} />
                </div>
                <div className={styles.carouselWrapper}>
                    <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster8} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster2} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster1} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster3} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster4} alt="image cover art" className={styles.coverArt} />
                        </div>
                    </Carousel>
                </div>
                <div className={styles.sectionHeader}>
                    <h6>Movies</h6>
                    <div className={styles.block} />
                </div>
                <div className={styles.carouselWrapper}>
                    <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster4} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster1} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster2} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster3} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster8} alt="image cover art" className={styles.coverArt} />
                        </div>
                    </Carousel>
                </div>
                <div className={styles.sectionHeader}>
                    <h6>New Releases</h6>
                    <div className={styles.block} />
                </div>
                <div className={styles.carouselWrapper}>
                    <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster4} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster1} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster2} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster3} alt="image cover art" className={styles.coverArt} />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src={Poster8} alt="image cover art" className={styles.coverArt} />
                        </div>
                    </Carousel>
                </div>
                <footer className={styles.footer}>
                <div className={styles.branding}>
                    <span className={styles.logo}>
                        <Image src="/images/logos/footer-logo.png" alt="Film room logo" height={25} width={25} />
                    </span>
                    <span>FilmRoom &copy; Copyright 2022</span>
                </div>
                <div className={styles.footerContent}>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>About Us</span>
                    <span>Contact Us</span>
                </div>
            </footer>
            </div>
        </div>
    )
}

export default Home;