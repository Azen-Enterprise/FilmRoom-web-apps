import Link from 'next/link';
import React, { FC } from 'react';
import styles from './styles/Button.module.css';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    isLogout?: Boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, isLogout }) => {
    return (
        <button className={isLogout ? styles.logout : styles.btnContainer} onClick={onClick}>
            {/* <Link passHref={true}> */}
                <span className={styles.btnText}>{children}</span>
            {/* </Link> */}
        </button>
    )
}

export default Button;
