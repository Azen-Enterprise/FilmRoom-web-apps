import React from 'react';
import Link from 'next/link';

import styles from '../../styles/Signup.module.css';
import { Button, Input } from '../../components';
import LockIcon from '../../assets/password-icon.svg';
import EmailIcon from '../../assets/email-icon.svg';
import PhoneIcon from '../../assets/phone-icon.svg';

const Signup = () => {
    return (
        <div className={styles.signupContainer}>
            <div className={styles.mainContainer}>
                <div className={styles.formContainer}>
                    <h4 className={styles.formHeader}>Create Your Account to Get Started</h4>
                    <Input type="email" icon={EmailIcon} showIcon={true} placeholderText='Email' />
                    <Input showIcon={true} icon={PhoneIcon} placeholderText='Phone Number' />
                    <Input type='password' icon={LockIcon} showIcon={true} placeholderText='Password' />
                    <Input type='password' icon={LockIcon} showIcon={true} placeholderText='Confirm Password' />
                    <Button navigateTo='/home'>Create Account</Button>
                    <Link href="/login" passHref={true}>
                        <p className={styles.linkBtn}>Already have an account? <span>Login</span></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Signup;
