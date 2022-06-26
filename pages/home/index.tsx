import React from 'react';
import Image from 'next/image';
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
import Poster from '../../components/Poster';
import Footer from '../../components/Footer';
// import Video1 from '../../assets/demo/demo.mp4';

const Home = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
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
                <header className={styles.banner}>
                    <div className={styles.banner__contents}>
                        <h1 className={styles.banner__title}>The Fishermans Diary</h1>
                        <div className="banner__buttons">
                            <button className={styles.banner__button}>Play Trailer</button>
                            <button className={styles.banner__button}>My Movies</button>
                        </div>
                        <div className={styles.banner__description}>
                            Inspired by Nobel Peace Prize winner Malala Yousafzai, a young girl defies the expectations of her father and village to pursue an education
                        </div>
                    </div>

                    <div className={styles.banner__fadeBottom} />
                </header>
                <div className={styles.sectionHeader}>
                    <h6>Recently Purchased</h6>
                    <div className={styles.block} />
                </div>
                <div className={styles.carouselWrapper}>
                    <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
                        <Poster imagePath={Poster1} />
                        <Poster imagePath={Poster9} />
                        <Poster imagePath={Poster2} />
                        <Poster imagePath={Poster3} />
                        <Poster imagePath={Poster4} />
                        <Poster imagePath={Poster8} />
                        <Poster imagePath={Poster7} />
                    </Carousel>
                </div>
                <div className={styles.sectionHeader}>
                    <h6>TV Shows</h6>
                    <div className={styles.block} />
                </div>
                <div className={styles.carouselWrapper}>
                    <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
                        <Poster imagePath={Poster7} />
                        <Poster imagePath={Poster8} />
                        <Poster imagePath={Poster1} />
                        <Poster imagePath={Poster2} />
                        <Poster imagePath={Poster3} />
                        <Poster imagePath={Poster9} />
                    </Carousel>
                </div>
                <div className={styles.sectionHeader}>
                    <h6>Movies</h6>
                    <div className={styles.block} />
                </div>
                <div className={styles.carouselWrapper}>
                    <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
                        <Poster imagePath={Poster9} />
                        <Poster imagePath={Poster1} />
                        <Poster imagePath={Poster2} />
                        <Poster imagePath={Poster3} />
                        <Poster imagePath={Poster4} />
                        <Poster imagePath={Poster8} />
                    </Carousel>
                </div>
                <div className={styles.sectionHeader}>
                    <h6>New Releases</h6>
                    <div className={styles.block} />
                </div>
                <div className={styles.carouselWrapper}>
                    <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
                        <Poster imagePath={Poster7} />
                        <Poster imagePath={Poster8} />
                        <Poster imagePath={Poster1} />
                        <Poster imagePath={Poster2} />
                        <Poster imagePath={Poster3} />
                        <Poster imagePath={Poster9} />
                    </Carousel>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;