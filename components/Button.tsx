import Link from 'next/link';
import React, { FC } from 'react';
import styles from './styles/Button.module.css';

type ButtonProps = {
    children: React.ReactNode;
    navigateTo: string;
}

const Button: FC<ButtonProps> = ({ children, navigateTo }) => {
    return (
        <button className={styles.btnContainer}>
            <Link href={navigateTo} passHref={true}>
                <span className={styles.btnText}>{children}</span>
            </Link>
        </button>
    )
}

export default Button;
