import Link from 'next/link';
import React, { FC } from 'react';
import styles from './styles/Button.module.css';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button className={styles.btnContainer} onClick={onClick}>
            {/* <Link passHref={true}> */}
                <span className={styles.btnText}>{children}</span>
            {/* </Link> */}
        </button>
    )
}

export default Button;
