import React from 'react';
import Image from 'next/image';
import styles from './styles/Navbar.module.css';

import Logo from '../assets/logo.png';
import SearchIcon from '../assets/search-icon.svg';
import UserIcon from '../assets/user-icon.svg';

const Navbar = () => {
    return (
        <div className={styles.navContainer}>
            <div className={styles.rightContainer}>
                <div className={styles.logoWrapper}>
                    <Image src={Logo} alt="logo" height={30} width={30} className={styles.imgLogo} />
                </div>
                <span>All</span>
                <span>TV Shows</span>
                <span>Movies</span>
                <span>New Releases</span>
                <span>Purchased</span>
            </div>
            <div className={styles.leftContainer}>
                <Image src={SearchIcon} alt="Search icon" height={30} width={30} />
                <div className={styles.userWrapper}>
                    <Image src={UserIcon} alt="User icon" height={25} width={25} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
