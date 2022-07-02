import { DocumentData } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Input, Button } from '../components';
import useAuth from '../hooks/useAuth';
import { userDetails } from '../typings';
import styles from './styles/Profile.module.css';
import { profileModalState } from '../atoms/modalAtom';
import { useRecoilState } from 'recoil';

type Props = {
    userDetails: userDetails | DocumentData | undefined,
    updateProfile: Function,
    userDetailsHasArrive: Function
}

const Profile = ({ userDetails, updateProfile, userDetailsHasArrive }: Props) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [displayName, setDisplayName] = useState('');
    // NEW
    const { logout, user } = useAuth();
    const [showProfileModal, setShowProfileModal] = useRecoilState(profileModalState);

    

    let userNewDetails: userDetails = {
        address: address,
        city: city,
        country: country,
        displayName: displayName,
        firstName: firstName,
        lastName: lastName,
        owner_id: user?.uid,
        phone: phone
    };

  

    useEffect(() => {
        if(!userDetails) return;
        setFirstName(userDetails.firstName);
        setLastName(userDetails.lastName);
        setCity(userDetails.city);
        setAddress(userDetails.address);
        setPhone(userDetails.phone)
        setCountry(userDetails.country);
    },[userDetails])
    
    return (
        
        <div className={`${styles.profileContainer} container`}>
            <h4 className="text-white">Your Profile</h4>
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
                value={user?.email ? user.email : ''}
                
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
            
            <Button isLogout={false} onClick={() => {
                updateProfile(userNewDetails);
            }}>
                Update Account
            </Button>
            <br />
            <Button isLogout={true} onClick={logout}>
                Logout
            </Button>
        </div> 
    )
}

export default Profile;
