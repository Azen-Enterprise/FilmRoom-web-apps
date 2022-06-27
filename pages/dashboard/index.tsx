import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Dashboard.module.css';
import Footer from '../../components/Footer';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.sidenav}>
                <div className={styles.logo}>
                    <Link href="/" passHref={true}>
                        <Image src="/images/logos/footer-logo.png" alt="Film room logo" height={25} width={25} />
                    </Link> 
                </div>
                <ul className={styles.sidenav__item}>
                    <li>
                        Home
                    </li>
                    <li>
                        Movies
                    </li>
                    <li>
                        Producers
                    </li>
                    <li>
                        Upload a Movie
                    </li>
                    <li>
                        Payment Transactions
                    </li>
                    <li>
                        Users
                    </li>
                    <li>
                        Coupons
                    </li>
                    <li className={styles.signOut}>
                        Sign Out
                    </li>
                </ul>
            </div>
            <div className={styles.dashboard__content}>
                Dashboard
            </div>
        </div>
    )
}

export default Dashboard;
