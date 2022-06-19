import React from 'react';
import Link from 'next/link';

import styles from '../../styles/Login.module.css';
import { Button, Input } from '../../components';
import LockIcon from '../../assets/password-icon.svg';

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.mainContainer}>
                <div className={styles.formContainer}>
                    <h4 className={styles.formHeader}>Login to Get Started</h4>
                    <Input showIcon={true} placeholderText='Username/Phone Number' />
                    <Input type='password' icon={LockIcon} showIcon={true} placeholderText='Password' />
                    <Button navigateTo="/home">
                        Login
                    </Button>
                    <Link href="/signup" passHref={true}>
                        <p className={styles.linkBtn}>No account yet? <span>Sign up</span></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;
