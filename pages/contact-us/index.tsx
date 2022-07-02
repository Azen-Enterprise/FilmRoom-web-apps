import React, { useState } from 'react';

import Footer from '../../components/Footer';
import styles from '../../styles/Login.module.css';
import { Button, Input, Navbar } from '../../components';
import LockIcon from '../../assets/password-icon.svg';
import { isEmpty, validateEmail } from '../../helpers/utils';

import EmailIcon from '../../assets/email-icon.svg';
import PhoneIcon from '../../assets/phone-icon.svg';

const ContactUs = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const onSubmitForm = () => {
        setIsLoading(true);
        setShowError(false);
        if (!isEmpty(email)) {
            if (validateEmail(email)) {
                let data = {email, password};
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

    return (
        <div className="page__container">
            <div className="page__header">
                <div className="page__overlay">
                    <h3>Contact Us</h3>
                </div>
            </div>
            <div className="container ">
            <div className={styles.loginContainer}>
            <div className={styles.mainContainer}>
                <div className={styles.formContainer}>
                {showError && 
                        <div className="alert alert-danger" role="alert">
                            {errorMsg}
                        </div>
                    }
                    <h4 className={styles.formHeader}>Leave your request here for us</h4>
                    <Input 
                        showIcon={true} 
                        placeholderText='Your Name' 
                        value=""
                    />
                    <Input 
                        showIcon={true} 
                        placeholderText='Your Email' 
                        value=""
                        icon={EmailIcon}
                    />
                    <Input 
                        showIcon={true} 
                        placeholderText='Your phone number' 
                        value=""
                        icon={PhoneIcon}
                    />
                    <Input 
                        icon={LockIcon} 
                        showIcon={false} 
                        placeholderText='Your message' 
                        value=''
                    />
                    <Button onClick={() => onSubmitForm()}>
                        {isLoading ? 'Sending your message...' : 'Send'}
                    </Button>
                    <br />
                </div>
            </div>
        </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs;
