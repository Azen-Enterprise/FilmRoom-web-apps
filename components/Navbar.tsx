import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/Navbar.module.css';

import Logo from '../assets/logo.png';
import SearchIcon from '../assets/search-icon.svg';
import UserIcon from '../assets/user-icon.svg';
import { useRecoilState } from 'recoil';
import { profileModalState } from '../atoms/modalAtom';

type Props = {
    isLoggedIn: boolean;
    isSearch?: boolean;
}

const Navbar: FC<Props> = ({ isLoggedIn, isSearch = false }) => {
    const [showProfileModal, setShowProfileModal] = useRecoilState(profileModalState);

    return (
        <div className={styles.navContainer}>
            <div className={styles.rightContainer}>
                <div className={styles.logoWrapper}>
                    <Link href="/home" passHref={true}>
                        <Image src={Logo} alt="logo" height={30} width={30} className={styles.imgLogo} />
                    </Link> 
                </div>
                {isLoggedIn &&
                    <>
                        <span>All</span>
                        <a href="#shows" className="link">TV Shows</a>
                        <a href="#movies" className="link">Movies</a>
                        <a href="#newrelease" className="link">New Releases</a>
                        <a href="#purchased" className="link">Purchased</a>
                    </>
                }
            </div>
            {!isSearch && 
                <div className={styles.leftContainer}>
                    {isLoggedIn ?
                        <>
                            <Link href="/home/search" passHref={true}>
                                <Image src={SearchIcon} alt="Search icon" height={30} width={30} />
                            </Link>
                            <div className={styles.userWrapper} onClick={() => {
                                setShowProfileModal(true);
                            }}>
                                <Image src={UserIcon} alt="User icon" height={25} width={25} />
                            </div>
                        </> :
                        <div className={styles.loginBtn}>
                            <Link href={'/login'} passHref={true}>
                                <span className={styles.loginBtn}>Login</span>
                            </Link>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Navbar;
