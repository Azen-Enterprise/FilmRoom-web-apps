import React, { useState } from 'react';
import { Input, Button } from '../components';
import styles from './styles/Profile.module.css';

const Profile = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');

    return (
        <div className={`${styles.profileContainer} container`}>
            <h4 className={styles.formHeader}>Your Profile</h4>
            <div className="row">
                <div className="col">
                    <Input 
                        showIcon={true} 
                        placeholderText='First Name' 
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </div>
                <div className="col">
                    <Input 
                        showIcon={true} 
                        placeholderText='Last Name' 
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </div>
            </div>
            <Input 
                showIcon={true} 
                placeholderText='Email' 
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <Input 
                showIcon={true} 
                // icon={PhoneIcon}
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholderText='Phone Number' 
            />
            <div className="row">
                <div className="col">
                    <Input 
                        showIcon={true} 
                        // icon={PhoneIcon}
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                        placeholderText='Country' 
                    />
                </div> 
                <div className="col">
                    <Input 
                        showIcon={true} 
                        // icon={PhoneIcon}
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        placeholderText='City' 
                    />
                </div>
            </div>
            <Input 
                type='text' 
                // icon={LockIcon} 
                showIcon={true} 
                placeholderText='Address' 
                value={address}
                onChange={(event) => setAddress(event.target.value)}
            />
            <br />
            <Button>
                Update Account
            </Button>
        </div> 
    )
}

export default Profile;
