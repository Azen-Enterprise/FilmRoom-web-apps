
import MuiModal from "@mui/material/Modal"
import { useRecoilState, useRecoilValue } from "recoil";
import { profileModalState } from "../atoms/modalAtom";
import Profile from '../layout/Profile';


import {
    CheckIcon,
    PlusIcon,
    ThumbUpIcon,
    VolumeOffIcon,
    VolumeUpIcon,
    XIcon,
  } from '@heroicons/react/outline'
  import { collection,QueryDocumentSnapshot,DocumentData,query,where,limit,getDocs, setDoc, doc, onSnapshot, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase-config'

import useAuth from '../hooks/useAuth'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect, useState } from "react";
import { Movie, userDetails } from "../typings";



const Modal = () => {
    const [showProfileModal, setShowProfileModal] = useRecoilState(profileModalState);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [profile, setProfile] = useState<DocumentData | userDetails>()
    let [userDetailsArive, setUserDetailsArive] = useState(false);

    const { user } = useAuth()
    
    const toastStyle = {
        background: 'white',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '16px',
        padding: '15px',
        borderRadius: '9999px',
        maxWidth: '1000px',
      }
  
  
      const handleClose = () => {
        setShowProfileModal(false)
        toast.dismiss()
      }

  
    
    const updateProfile = async (userDetails: userDetails) => {
        
        await setDoc(
            
            doc(db, 'users', user!.uid, 'account', 'details'),
                {
                ...userDetails,
                }
            )
            
            toast(
                `Profile Updated Successfuly`,
                {
                duration: 8000,
                style: toastStyle,
                }
        )
    }

    const getUserProfileDetails = async() => {
        if (user) {
            const docRef = doc(db, "users", user.uid, 'account', 'details');
            const docSnap = await getDoc(docRef);
            
        if (docSnap.exists()) {
           
            setProfile(docSnap.data());
            // console.log("Document data:", docSnap.data());
            } else {
            // doc.data() will be undefined in this case
            let noData = {
                address: '',
                city: '',
                country: '',
                displayName: '',
                firstName: '',
                lastName: '',
                owner_id: '',
                phone: ''
            }

          setProfile(noData);
        }
          }
    }

    const userDetailsHasArrive = () => {
        setUserDetailsArive(true);
    }

    const userTest = {
        address: '123 ok street',
        city: 'Douala',
        country: 'Cameroon',
        displayName: 'Odin',
        firstName: 'John',
        lastName: 'Doe',
        owner_id: user?.uid,
        phone: '67847843'
    }
    
    useEffect( () => {
        getUserProfileDetails();
        // updateProfile(userTest);
    },[]);
    

    return (
        <MuiModal
        open={showProfileModal}
        onClose={handleClose}
        className="fixed !top-7 left-0 right-0 z-50 mx-auto modal-content max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
      >
        <>
          <Toaster position="bottom-center" />
          <button
            className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
            onClick={handleClose}
          >
            <XIcon className="h-6 w-6 text-white" />
          </button>
          <div className="relative pt-[2.25%]">
                <Profile updateProfile={updateProfile} userDetailsHasArrive={userDetailsHasArrive} userDetails={profile}/> 
          </div>
        </>
      </MuiModal>
    )
}

export default Modal;
