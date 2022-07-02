import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {createUserWithEmailAndPassword} from 'firebase/auth';

// import {authentication} from '../../firebase/firebase-config';
import { isEmpty, validateEmail, validatePassword, comparePassword } from '../../helpers/utils';

import styles from '../../styles/Signup.module.css';
import { Button, Input } from '../../components';
import LockIcon from '../../assets/password-icon.svg';
import EmailIcon from '../../assets/email-icon.svg';
import PhoneIcon from '../../assets/phone-icon.svg';
import Logo from '../../assets/logo.png';
import useAuth from '../../hooks/useAuth';
import { newAccountDetails } from '../../typings';
import { doc, setDoc } from '@firebase/firestore';
import { db } from '../../firebase/firebase-config';

const Signup = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // NEW
    const { signUp, user } = useAuth();

    const clearFields = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }
    // const updateProfile = async () => {
        
        
            
          
    // }
    
   async function signUpSuccess(userId: any) {
        setIsLoading(false);
        // UPDATE FIREBASE WITH NEW ACCOUNT
        let newUserDetails: newAccountDetails;
        newUserDetails = {
          email: email,
          owner_id: userId,
          phone: phone
        }
        await setDoc(
            
          doc(db, 'users', userId, 'account', 'details'),
              {
              ...newUserDetails,
              }
          )
        clearFields();
        setSuccessMsg('Account successfully created. Login to get started');
        setShowSuccess(true);
        setTimeout(() => {
          router.push('/home');
        }, 3000);
    }

    function signUpError(error: any) {
          setIsLoading(false);
          setShowError(true);
          if (error.code === 'auth/email-already-in-use') {
              setErrorMsg('Email already exists. Login instead');
          } else {
              setErrorMsg('Error creating an account. Please try again!');
          }
    }
    
    const signUpUser = () => {
        setIsLoading(true);
        setShowError(false);

        if (
          !isEmpty(email) ||
          !isEmpty(password) ||
          !isEmpty(confirmPassword)
        ) {
          if (
            validateEmail(email) &&
            validatePassword(password) &&
            comparePassword(confirmPassword, password)
          ) {
            let data = {
              email,
              password,
            };
            signUp(
              data.email,
              data.password,
              signUpSuccess,
              signUpError
            )
      
          } else {
            setIsLoading(false);
            setShowError(true);
            setErrorMsg(
              'Please ensure the following:\n - A valid email address\n - Password has a length of at least 5 characters\n - Password matches the confirmed password',
            );
          }
        } else {
          setIsLoading(false);
          setShowError(true);
          setErrorMsg('Please fill in all fields');
        }
      };
    
    if(user) {
        router.push('/home');
    }

    if(user) return null;

    return (
        <div className={styles.signupContainer}>
            <div className={styles.mainContainer}>
                <div className={styles.formContainer}>
                    {showSuccess && 
                        <div className="alert alert-success" role="alert">
                            {successMsg}
                        </div>
                    }
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
                    <h4 className={styles.formHeader}>Create Your Account to Get Started</h4>
                    <Input 
                        showIcon={true} 
                        placeholderText='Email' 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                     <Input 
                        showIcon={true} 
                        placeholderText='Phone' 
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
    
                    <Input 
                        type='password' 
                        icon={LockIcon} 
                        showIcon={true} 
                        placeholderText='Password' 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Input 
                        type='password' 
                        icon={LockIcon} 
                        showIcon={true} 
                        placeholderText='Password' 
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                    <br />
                    <Button onClick={() => signUpUser()}>
                        {isLoading ? 'Creating your account...' : 'Create your account'}
                    </Button>
                    <Link href="/login" passHref={true}>
                        <p className={styles.linkBtn}>Already have an account? <span>Login</span></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Signup;








