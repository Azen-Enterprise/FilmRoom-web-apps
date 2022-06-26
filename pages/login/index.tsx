import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {signInWithEmailAndPassword} from 'firebase/auth';

import {authentication} from '../../firebase/firebase-config';

import styles from '../../styles/Login.module.css';
import { Button, Input, Navbar } from '../../components';
import LockIcon from '../../assets/password-icon.svg';
import { isEmpty, validateEmail } from '../../helpers/utils';

type InputEvent = React.ChangeEvent<HTMLInputElement>

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const clearFields = () => {
        setEmail('');
        setPassword('');
    }

    const onSubmitForm = () => {
        setIsLoading(true);
        setShowError(false);
        if (!isEmpty(email) || !isEmpty(password)) {
            if (validateEmail(email)) {
                let data = {email, password};
                signInWithEmailAndPassword(authentication, data.email, data.password)
                  .then(_ => {
                    setIsLoading(false);
                    clearFields();
                    router.push('/home');
                  })
                  .catch(error => {
                    setIsLoading(false);
                    setShowError(true);
                    if (error.code === 'auth/user-not-found') {
                        setErrorMsg(
                        'User is not found. Please create an account to login!',
                      );
                    } else if (error.code === 'auth/wrong-password') {
                        setErrorMsg(
                        'Invalid email or password. Please verify and try again',
                      );
                    } else {
                        setErrorMsg('Error logging you in. Please try again');
                    }
                  });
              } else {
                setIsLoading(false);
                setShowError(true);
                setErrorMsg('Please enter a valid email address!');
              }
            // router.push('/home');
        } else {
            setShowError(true);
            setIsLoading(false);
            setErrorMsg('Please fill in all the fields!');
        }


    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.mainContainer}>
                <div className={styles.formContainer}>
                    {showError && 
                        <div className="alert alert-danger" role="alert">
                            {errorMsg}
                        </div>
                    }
                    <h4 className={styles.formHeader}>Login to Get Started</h4>
                    <Input 
                        showIcon={true} 
                        placeholderText='Email' 
                        value={email}
                        onChange={(event: InputEvent) => setEmail(event.target.value)}
                    />
                    <Input 
                        type='password' 
                        icon={LockIcon} 
                        showIcon={true} 
                        placeholderText='Password' 
                        value={password}
                        onChange={(event: InputEvent) => setPassword(event.target.value)}
                    />
                    <Button onClick={() => onSubmitForm()}>
                        {isLoading ? 'Logging you in...' : 'Login'}
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
