import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {signInWithEmailAndPassword} from 'firebase/auth';

// import {authentication} from '../../firebase/firebase-config';

import styles from '../../styles/Login.module.css';
import { Button, Input, Navbar } from '../../components';
import LockIcon from '../../assets/password-icon.svg';
import Logo from '../../assets/logo.png';
import { isEmpty, validateEmail } from '../../helpers/utils';
// NEW
// import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from '../../hooks/useAuth';


type InputEvent = React.ChangeEvent<HTMLInputElement>

interface Inputs {
    email: string
    password: string
  }

const Login = () => {
    // New Code
    const [login, setLogin] = useState(false);
    const { signIn } = useAuth();
    const { user } = useAuth()
    // END NEW CODE

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
    function loginSuccess() {
        setIsLoading(false);
        clearFields();
    }
    function loginError(error: any) {
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
    }
    const onSubmitForm = () => {
        setIsLoading(true);
        setShowError(false);
        if (!isEmpty(email) || !isEmpty(password)) {
            if (validateEmail(email)) {
                let data = {email, password};
                signIn(data.email, data.password, loginError, loginSuccess)
           
              } else {
                setIsLoading(false);
                setShowError(true);
                setErrorMsg('Please enter a valid email address!');
              }
        } else {
            setShowError(true);
            setIsLoading(false);
            setErrorMsg('Please fill in all the fields!');
        }


    }

    if(user) {
        router.push('/home');
    }

    if(user) return null;

    return (
        <div className={styles.loginContainer}>
            <div className={styles.mainContainer}>
                <div className={styles.formContainer}>
                    {showError && 
                        <div className="alert alert-danger" role="alert">
                            {errorMsg}
                        </div>
                    }
                    <div className={styles.logoWrapper}>
                        <Link href="/" passHref={true}>
                            <Image src={Logo} alt="logo" height={30} width={30} className={styles.imgLogo} />
                        </Link> 
                    </div>
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
                    <br />
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
