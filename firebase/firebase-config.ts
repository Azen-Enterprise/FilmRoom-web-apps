// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDrTH5nyqbtVyNN7s-J87Vr2ZJ0JyC0KoY',
  authDomain: 'filmroom-fffd3.firebaseapp.com',
  databaseURL: 'https://filmroom-fffd3-default-rtdb.firebaseio.com',
  projectId: 'filmroom-fffd3',
  storageBucket: 'filmroom-fffd3.appspot.com',
  messagingSenderId: '1031326350905',
  appId: '1:1031326350905:web:adf505b76c9312a0ea17e8',
  measurementId: 'G-BCMZV0BM3H',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }


// import {initializeApp} from 'firebase/app';
// import {getAuth} from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDrTH5nyqbtVyNN7s-J87Vr2ZJ0JyC0KoY',
//   authDomain: 'filmroom-fffd3.firebaseapp.com',
//   databaseURL: 'https://filmroom-fffd3-default-rtdb.firebaseio.com',
//   projectId: 'filmroom-fffd3',
//   storageBucket: 'filmroom-fffd3.appspot.com',
//   messagingSenderId: '1031326350905',
//   appId: '1:1031326350905:web:adf505b76c9312a0ea17e8',
//   measurementId: 'G-BCMZV0BM3H',
// };
