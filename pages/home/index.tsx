import React from 'react';
import Image from 'next/Image';
import { Navbar } from '../../components';
import styles from '../../styles/Main.module.css';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.sectionHeader}>
                    <h6>Recently Purchased</h6>
                </div>
                <div className={styles.sectionHeader}>
                    <h6>TV Shows</h6>
                </div>
                <div className={styles.sectionHeader}>
                    <h6>Movies</h6>
                </div>
                <div className={styles.sectionHeader}>
                    <h6>New Releases</h6>
                </div>
                <div className={styles.sectionHeader}>
                    <h6>Anime</h6>
                </div>
            </div>
        </div>
    )
}

export default Home;