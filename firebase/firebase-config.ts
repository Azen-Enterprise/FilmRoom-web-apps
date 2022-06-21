import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDrTH5nyqbtVyNN7s-J87Vr2ZJ0JyC0KoY',
  authDomain: 'filmroom-fffd3.firebaseapp.com',
  databaseURL: 'https://filmroom-fffd3-default-rtdb.firebaseio.com',
  projectId: 'filmroom-fffd3',
  storageBucket: 'filmroom-fffd3.appspot.com',
  messagingSenderId: '1031326350905',
  appId: '1:1031326350905:web:adf505b76c9312a0ea17e8',
  measurementId: 'G-BCMZV0BM3H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);