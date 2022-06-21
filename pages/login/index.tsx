import React, { useState } from 'react';
import Link from 'next/link';
import {signInWithEmailAndPassword} from 'firebase/auth';

import {authentication} from '../../firebase/firebase-config';

import styles from '../../styles/Login.module.css';
import { Button, Input } from '../../components';
import LockIcon from '../../assets/password-icon.svg';

type InputEvent = React.ChangeEvent<HTMLInputElement>

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles.loginContainer}>
            <div className={styles.mainContainer}>
                <div className={styles.formContainer}>
                    <h4 className={styles.formHeader}>Login to Get Started</h4>
                    <Input 
                        showIcon={true} 
                        placeholderText='Username/Phone Number' 
                        value={username}
                        onChange={(event: InputEvent) => setUsername(event.target.value)}
                    />
                    <Input 
                        type='password' 
                        icon={LockIcon} 
                        showIcon={true} 
                        placeholderText='Password' 
                        value={password}
                        onChange={(event: InputEvent) => setPassword(event.target.value)}
                    />
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
