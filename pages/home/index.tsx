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
import Profile from '../../layout/Profile';
// import Video1 from '../../assets/demo/demo.mp4';

const Home = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <div className={styles.homeContainer}>
            <Navbar isLoggedIn={true} isSearch={false} />
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
                        <div data-bs-toggle="modal" data-bs-target="#movieDetails">
                            <Poster imagePath={Poster1} />
                        </div>
                        <div data-bs-toggle="modal" data-bs-target="#movieDetails">
                            <Poster imagePath={Poster9} />
                        </div>
                        <div data-bs-toggle="modal" data-bs-target="#movieDetails">
                            <Poster imagePath={Poster2} />
                        </div>
                        <div data-bs-toggle="modal" data-bs-target="#movieDetails">
                            <Poster imagePath={Poster3} />
                        </div>
                        <div data-bs-toggle="modal" data-bs-target="#movieDetails">
                            <Poster imagePath={Poster4} />
                        </div>
                        <div data-bs-toggle="modal" data-bs-target="#movieDetails">
                            <Poster imagePath={Poster8} />
                        </div>
                        <div data-bs-toggle="modal" data-bs-target="#movieDetails">
                            <Poster imagePath={Poster7} />
                        </div>
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
                <div className="modal" id="exampleModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                               <Profile />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal" id="movieDetails">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className={styles.movie__container}>
                                    <div className={styles.banner__contents}>
                                    <div className="banner__buttons">
                                        <button className={styles.banner__button}>Play Trailer</button>
                                        <button className={styles.banner__button}>Buy Movie</button>
                                    </div>
                                    </div>
                                </div>
                                <div className={styles.movie__content}>
                                    <div className="row">
                                        <div className="col">
                                            <div className={styles.detail__header}>
                                                <span>28th March 2022.&nbsp;&nbsp;</span>
                                                <span>Romance, Thriller</span>
                                                <span className={styles.rating}>18+</span>
                                            </div>
                                            <div className={styles.movie__description}>
                                                Inspired by Nobel Peace Prize winner Malala Yousafzai, a young girl defies the expectations of her father and village to pursue an education
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div>
                                                <span className={styles.heading}>Cast: </span>
                                                <span>John Snow, Sydney Emade, Emeka Ike, Ramsey Noah</span>
                                            </div>
                                            <div>
                                                <span className={styles.heading}>Genres: </span>
                                                <span>Cameroonian, Movie, Romance, Thriller</span>
                                            </div>
                                            <div>
                                                <span className={styles.heading}>This movie is: </span>
                                                <span>Wonderful</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.sectionHeader}>
                                        <h6>More Like This</h6>
                                        <div className={styles.block} />
                                    </div>
                                    <div className={styles.videoPlayer}>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;