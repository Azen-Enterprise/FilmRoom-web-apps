import React, { useEffect, useState } from 'react';
import Image from 'next/image';


import { Navbar, Banner, Row } from '../../components';

import styles from '../../styles/Main.module.css';

// Demo

import Footer from '../../components/Footer';
import Profile from '../../layout/Profile';
import { Movie } from '../../typings';
import useAuth from '../../hooks/useAuth';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState, profileModalState } from '../../atoms/modalAtom';
import Modal from '../../components/Modal';
import ProfileModal from '../../components/ProfileModal';
import { collection, collectionGroup, doc, DocumentData, getDocs, query, QuerySnapshot, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

// import Video1 from '../../assets/demo/demo.mp4';

// const moviesPurchsedTest:Movie[] = [
//     {
//         language: 'French',
//         playback_id: "Pb102Jbjw5CuS5KxvcorcfUwNl6U34k5w7000026AEG6Uk",
//         age_rating: "10+",
//         authors: [""],
//         awards: ['Afrima 2022'],
//         cast: ['Onyama Laura','Libota McDonald','Edith Pikwa','Mat Atugon','Eyo Michael'],
//         category: "moviesPurchased",
//         cover_art: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/landing_page_previews%2Fimages%2Fposter1.jpeg?alt=media&token=c3b0d5b2-9221-468e-911a-3b08ef19f4d2",
//         description: "Inspired by Nobel Peace Prize winner Malala Yousafzai, a young girl defies the expectations of her father and village to pursue an education.",
//         genre: "Cameroonian,Movie,Romance,Thriller",
//         id: '3312',
//         isFree: false,
//         name: "The Fishemans Diary",
//         owner_id: "/collection/producers",
//         price: 100,
//         rate: 5,
//         trailer: "Pb102Jbjw5CuS5KxvcorcfUwNl6U34k5w7000026AEG6Uk",
//         video: "EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs",
//         dateReleased: '12/08/2022'
//     },
//     {
//         language: 'English',
//         dateReleased: '12/08/2022',
//         playback_id: "Pb102Jbjw5CuS5KxvcorcfUwNl6U34k5w7000026AEG6Uk",
//         age_rating: "10+",
//         authors: [""],
//         awards: ['Afrima 2022'],
//         cast: ['Onyama Laura','Libota McDonald','Edith Pikwa','Mat Atugon','Eyo Michael'],
//         category: "moviesPurchased",
//         cover_art: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/landing_page_previews%2Fimages%2Fposter1.jpeg?alt=media&token=c3b0d5b2-9221-468e-911a-3b08ef19f4d2",
//         description: "Inspired by Nobel Peace Prize winner Malala Yousafzai, a young girl defies the expectations of her father and village to pursue an education.",
//         genre: "Cameroonian,Movie,Romance,Thriller",
//         id: '1234',
//         isFree: false,
//         name: "The Fishemans Diary",
//         owner_id: "/collection/producers",
//         price: 100,
//         rate: 5,
//         trailer: "Pb102Jbjw5CuS5KxvcorcfUwNl6U34k5w7000026AEG6Uk",
//         video: "EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
//     },
//     {
//         language: 'English',
//         dateReleased: '12/08/2022',
//         playback_id: "Pb102Jbjw5CuS5KxvcorcfUwNl6U34k5w7000026AEG6Uk",
//         age_rating: "10+",
//         authors: [""],
//         awards: ['Afrima 2022'],
//         cast: ['Onyama Laura','Libota McDonald','Edith Pikwa','Mat Atugon','Eyo Michael'],
//         category: "moviesPurchased",
//         cover_art: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/landing_page_previews%2Fimages%2Fposter1.jpeg?alt=media&token=c3b0d5b2-9221-468e-911a-3b08ef19f4d2",
//         description: "Inspired by Nobel Peace Prize winner Malala Yousafzai, a young girl defies the expectations of her father and village to pursue an education.",
//         genre: "Cameroonian,Movie,Romance,Thriller",
//         id: '5432',
//         isFree: false,
//         name: "The Fishemans Diary",
//         owner_id: "/collection/producers",
//         price: 100,
//         rate: 5,
//         trailer: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/movies%2Fpreviews%2FOur%20Voices%20-%20The%20African%20challenge.mp4?alt=media&token=aa6a8bf4-b4cb-4494-a0a8-37f5f0ccd5a9",
//         video: "EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
//     },
//     {
//         language: 'English',
//         dateReleased: '12/08/2022',
//         playback_id: "Pb102Jbjw5CuS5KxvcorcfUwNl6U34k5w7000026AEG6Uk",
//         age_rating: "10+",
//         authors: [""],
//         awards: ['Afrima 2022'],
//         cast: ['Onyama Laura','Libota McDonald','Edith Pikwa','Mat Atugon','Eyo Michael'],
//         category: "moviesPurchased",
//         cover_art: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/landing_page_previews%2Fimages%2Fposter1.jpeg?alt=media&token=c3b0d5b2-9221-468e-911a-3b08ef19f4d2",
//         description: "Inspired by Nobel Peace Prize winner Malala Yousafzai, a young girl defies the expectations of her father and village to pursue an education.",
//         genre: "Cameroonian,Movie,Romance,Thriller",
//         id: '9833',
//         isFree: false,
//         name: "The Fishemans Diary",
//         owner_id: "/collection/producers",
//         price: 100,
//         rate: 5,
//         trailer: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/movies%2Fpreviews%2FOur%20Voices%20-%20The%20African%20challenge.mp4?alt=media&token=aa6a8bf4-b4cb-4494-a0a8-37f5f0ccd5a9",
//         video: "EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
//     },
  
// ];
// const moviesTvShowsTest:Movie[] = [
//     {
//         language: 'French',
//         dateReleased: '12/08/2022',
//         playback_id: "Pb102Jbjw5CuS5KxvcorcfUwNl6U34k5w7000026AEG6Uk",
//         age_rating: "10+",
//         authors: [""],
//         awards: ['Afrima 2022'],
//         cast: ['Onyama Laura','Libota McDonald','Edith Pikwa','Mat Atugon','Eyo Michael'],
//         category: "moviesTvShows",
//         cover_art: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/landing_page_previews%2Fimages%2Fposter1.jpeg?alt=media&token=c3b0d5b2-9221-468e-911a-3b08ef19f4d2",
//         description: "Inspired by Nobel Peace Prize winner Malala Yousafzai, a young girl defies the expectations of her father and village to pursue an education.",
//         genre: "Cameroonian,Movie,Romance,Thriller",
//         id: '3312',
//         isFree: false,
//         name: "The Fishemans Diary",
//         owner_id: "/collection/producers",
//         price: 100,
//         rate: 5,
//         trailer: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/movies%2Fpreviews%2FOur%20Voices%20-%20The%20African%20challenge.mp4?alt=media&token=aa6a8bf4-b4cb-4494-a0a8-37f5f0ccd5a9",
//         video: "EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
//     },
//     {
//         language: 'French',
//         dateReleased: '12/08/2022',
//         playback_id: "Pb102Jbjw5CuS5KxvcorcfUwNl6U34k5w7000026AEG6Uk",
//         age_rating: "10+",
//         authors: [""],
//         awards: ['Afrima 2022'],
//         cast: ['Onyama Laura','Libota McDonald','Edith Pikwa','Mat Atugon','Eyo Michael'],
//         category: "moviesTvShows",
//         cover_art: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/landing_page_previews%2Fimages%2Fposter1.jpeg?alt=media&token=c3b0d5b2-9221-468e-911a-3b08ef19f4d2",
//         description: "Inspired by Nobel Peace Prize winner Malala Yousafzai, a young girl defies the expectations of her father and village to pursue an education.",
//         genre: "Cameroonian,Movie,Romance,Thriller",
//         id:'4312',
//         isFree: false,
//         name: "The Fishemans Diary",
//         owner_id: "/collection/producers",
//         price: 100,
//         rate: 5,
//         trailer: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/movies%2Fpreviews%2FOur%20Voices%20-%20The%20African%20challenge.mp4?alt=media&token=aa6a8bf4-b4cb-4494-a0a8-37f5f0ccd5a9",
//         video: "EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
//     }
// ];

// const moviesTest:Movie[] = [
//     {
//         language: 'English',
//         dateReleased: '12/08/2022',
//         playback_id: "Pb102Jbjw5CuS5KxvcorcfUwNl6U34k5w7000026AEG6Uk",
//         age_rating: "10+",
//         authors: [""],
//         awards: ['Afrima 2022'],
//         cast: ['Onyama Laura','Libota McDonald','Edith Pikwa','Mat Atugon','Eyo Michael'],
//         category: "movies",
//         cover_art: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/landing_page_previews%2Fimages%2Fposter1.jpeg?alt=media&token=c3b0d5b2-9221-468e-911a-3b08ef19f4d2",
//         description: "Inspired by Nobel Peace Prize winner Malala Yousafzai, a young girl defies the expectations of her father and village to pursue an education.",
//         genre: "Cameroonian,Movie,Romance,Thriller",
//         id: '33912',
//         isFree: false,
//         name: "The Fishemans Diary",
//         owner_id: "/collection/producers",
//         price: 100,
//         rate: 5,
//         trailer: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/movies%2Fpreviews%2FOur%20Voices%20-%20The%20African%20challenge.mp4?alt=media&token=aa6a8bf4-b4cb-4494-a0a8-37f5f0ccd5a9",
//         video: "EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
//     }
// ];
// const moviesNewReleaseTest:Movie[] = [
//     {
//         language: 'English',
//         dateReleased: '12/08/2022',
//         playback_id: "Pb102Jbjw5CuS5KxvcorcfUwNl6U34k5w7000026AEG6Uk",
//         age_rating: "10+",
//         authors: [""],
//         awards: ['Afrima 2022'],
//         cast: ['Onyama Laura','Libota McDonald','Edith Pikwa','Mat Atugon','Eyo Michael'],
//         category: "moviesNewRelease",
//         cover_art: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/landing_page_previews%2Fimages%2Fposter1.jpeg?alt=media&token=c3b0d5b2-9221-468e-911a-3b08ef19f4d2",
//         description: "Inspired by Nobel Peace Prize winner Malala Yousafzai, a young girl defies the expectations of her father and village to pursue an education.",
//         genre: "Cameroonian,Movie,Romance,Thriller",
//         id: '13312',
//         isFree: false,
//         name: "The Fishemans Diary",
//         owner_id: "/collection/producers",
//         price: 100,
//         rate: 5,
//         trailer: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/movies%2Fpreviews%2FOur%20Voices%20-%20The%20African%20challenge.mp4?alt=media&token=aa6a8bf4-b4cb-4494-a0a8-37f5f0ccd5a9",
//         video: "EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs",
//     },
//     {
//         language: 'French',
//         dateReleased: '12/08/2022',
//         playback_id: "Pb102Jbjw5CuS5KxvcorcfUwNl6U34k5w7000026AEG6Uk",
//         age_rating: "10+",
//         authors: [""],
//         awards: ['Afrima 2022'],
//         cast: ['Onyama Laura','Libota McDonald','Edith Pikwa','Mat Atugon','Eyo Michael'],
//         category: "moviesNewRelease",
//         cover_art: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/landing_page_previews%2Fimages%2F1000030.jpg?alt=media&token=c3b0d5b2-9221-468e-911a-3b08ef19f4d2",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, aperiam suscipit. Dolorum explicabo voluptate itaque, qui non laudantium. Cum, autem!",
//         genre: "Cameroonian,Movie,Romance,Thriller",
//         id: '331212',
//         isFree: false,
//         name: "Demon Slayer",
//         owner_id: "/collection/producers",
//         price: 100,
//         rate: 5,
//         trailer: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/movies%2Fpreviews%2FOur%20Voices%20-%20The%20African%20challenge.mp4?alt=media&token=aa6a8bf4-b4cb-4494-a0a8-37f5f0ccd5a9",
//         video: "https://www.youtube.com/watch?v=a9tq0aS5Zu8",
//     },
//     {
//         language: 'English',
//         dateReleased: '12/08/2022',
//         playback_id: "Pb102Jbjw5CuS5KxvcorcfUwNl6U34k5w7000026AEG6Uk",
//         age_rating: "10+",
//         authors: [""],
//         awards: ['Afrima 2022'],
//         cast: ['Onyama Laura','Libota McDonald','Edith Pikwa','Mat Atugon','Eyo Michael'],
//         category: "moviesNewRelease",
//         cover_art: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/landing_page_previews%2Fimages%2F872823.png?alt=media&token=c3b0d5b2-9221-468e-911a-3b08ef19f4d2",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, aperiam suscipit. Dolorum explicabo voluptate itaque, qui non laudantium. Cum, autem!",
//         genre: "Cameroonian,Movie,Romance,Thriller",
//         id: '331312',
//         isFree: false,
//         name: "Fire Force",
//         owner_id: "/collection/producers",
//         price: 100,
//         rate: 5,
//         trailer: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/movies%2Fpreviews%2FOur%20Voices%20-%20The%20African%20challenge.mp4?alt=media&token=aa6a8bf4-b4cb-4494-a0a8-37f5f0ccd5a9",
//         video: "EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs",
//     },
//     {
//         language: 'English',
//         dateReleased: '12/08/2022',
//         playback_id: "Pb102Jbjw5CuS5KxvcorcfUwNl6U34k5w7000026AEG6Uk",
//         age_rating: "10+",
//         authors: [""],
//         awards: ['Afrima 2022'],
//         cast: ['Onyama Laura','Libota McDonald','Edith Pikwa','Mat Atugon','Eyo Michael'],
//         category: "moviesNewRelease",
//         cover_art: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/landing_page_previews%2Fimages%2F318748.jpg?alt=media&token=c3b0d5b2-9221-468e-911a-3b08ef19f4d2",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, aperiam suscipit. Dolorum explicabo voluptate itaque, qui non laudantium. Cum, autem!",
//         genre: "Cameroonian,Movie,Romance,Thriller",
//         id: '3421',
//         isFree: false,
//         name: "Soul Eater",
//         owner_id: "/collection/producers",
//         price: 100,
//         rate: 5,
//         trailer: "https://firebasestorage.googleapis.com/v0/b/filmroom-fffd3.appspot.com/o/movies%2Fpreviews%2FOur%20Voices%20-%20The%20African%20challenge.mp4?alt=media&token=aa6a8bf4-b4cb-4494-a0a8-37f5f0ccd5a9",
//         video: "EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs",
//     }
// ];

interface Props {
    // moviesPurchsed: Movie[],
    moviesTvShows: Movie[],
    movies: Movie[],
    moviesNewRelease: Movie[]
}


const Home = ({
    // moviesPurchsed,
    moviesTvShows,
    movies,
    moviesNewRelease
}: Props) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    // ROWS STATE
    let [showPurchase, setShowPurchase] = useState(false);

    const { loading, user } = useAuth();
    const showModal = useRecoilValue(modalState)
    // const showProfileModal = useRecoilValue(profileModalState);
    const [showProfileModal, setShowProfileModal] = useRecoilState(profileModalState);

    let [purchasedMovies, setPurchasedMovies] = useState([]);
    

    const checkHasPurchased = async() => {

        // const docRef = docSnap(db, "users", user!.uid, 'purchased');
        let holdPurchasedMovies:any = [];
        
        let purchasedIds:any[] = [];

        const docsSnap = await getDocs(collection(db,`users/${user!.uid}/purchased`));
                docsSnap.forEach((doc) => {
                    
                    
                    purchasedIds.push(doc.id);
                    console.log('PURCHASED MOVIES IDS');
                console.log(doc.id); // "doc1", "doc2" and "doc3"
            });

        let purchasedQuery:any = null;

        if(purchasedIds.length > 0) {
            purchasedQuery = query(collectionGroup(db, 'movies'), where('id', 'in', purchasedIds));
            let queryPurchased =  await getDocs(purchasedQuery); 
            queryPurchased.forEach((doc) => {
                console.log('users purchased movies')
                console.log(JSON.parse(JSON.stringify(doc.data())))
                holdPurchasedMovies.push(JSON.parse(JSON.stringify(doc.data())));
                // moviesPurchsed.push(newPurchsed)
            });
            setPurchasedMovies(holdPurchasedMovies);
            setShowPurchase(true);
        }
    }

    
    
    useEffect(()=> {
        if(loading) return;
        if(showProfileModal) {
            setShowProfileModal(false);
        } 
        checkHasPurchased();
    },[])

    if(!user) return null;
    return (
        <div className={styles.homeContainer}>
            <Navbar isLoggedIn={true} isSearch={false} />
            <div className={styles.body}>
                {/* BANNER COMPONENT NEW */}
                <Banner moviesNewRelease={moviesNewRelease} />

                <Row sectionId="movies" title="Movies" movies={movies}/>
                <Row  sectionId="newrelease"title="New Releases" movies={moviesNewRelease}/>
                <Row sectionId="shows" title="TV Shows" movies={moviesTvShows}/>
                 {/* create ROWS component */}
                 {showPurchase ? <Row sectionId="purchased" title="Recently Purchased" movies={purchasedMovies}/> : null}
                
            
                <Footer />
            </div>
            { showModal && <Modal />}
            { showProfileModal && <ProfileModal />}
        </div>
    )
}

export default Home;


export async function getServerSideProps() {
    // const moviesPurchsed:Movie[] = moviesPurchsedTest;
    // const moviesTvShows:Movie[] = moviesTvShowsTest;
    // const movies:Movie[] = moviesTest;
    // const moviesNewRelease:Movie[] = moviesNewReleaseTest;
    // WHEN MAKING REAL REQ
    // Fetch data Firebase
    // await Promise.all([
        
    // ])

    const moviesNewReleaseQuery = query(collectionGroup(db, 'movies'), where('category', '==', 'moviesNewRelease'));
    const moviesQuery = query(collectionGroup(db, 'movies'), where('category', '==', 'movies'));
    const moviesTvShowsQuery = query(collectionGroup(db, 'movies'), where('category', '==', 'moviesTvShows'));
    // const moviesPurchsedQuery = query(collectionGroup(db, 'movies'), where('category', '==', 'moviesPurchased'));

    

    
    let moviesNewRelease: Movie[];
    let movies: Movie[];
    let moviesTvShows: Movie[];
    // let moviesPurchsed: Movie[];

    let newMovieRelease: Movie;
    let newMovie: Movie;
    let newTvShows: Movie;
    // let newPurchsed: Movie;
    

    moviesNewRelease = [];
    movies = []
    moviesTvShows = [];
    // moviesPurchsed = [];

    let querySnapshotNewRelease: QuerySnapshot;
    let querySnapshotmovies: QuerySnapshot;
    let querySnapshotTvShows: QuerySnapshot;
    // let querySnapshotPurchsed: QuerySnapshot;

     await Promise.all([
        querySnapshotNewRelease = await getDocs(moviesNewReleaseQuery),

        querySnapshotmovies = await getDocs(moviesQuery),

        querySnapshotTvShows = await getDocs(moviesTvShowsQuery),

        // querySnapshotPurchsed = await getDocs(moviesPurchsedQuery)
    ])

    querySnapshotNewRelease.forEach((doc) => {
        newMovieRelease = JSON.parse(JSON.stringify(doc.data()));
        moviesNewRelease.push(newMovieRelease)
        // console.log(newMovieRelease);
    });

    querySnapshotmovies.forEach((doc) => {
        newMovie = JSON.parse(JSON.stringify(doc.data()));
        movies.push(newMovie)
    });

    querySnapshotTvShows.forEach((doc) => {
        newTvShows = JSON.parse(JSON.stringify(doc.data()));
        moviesTvShows.push(newTvShows)
    });

    // querySnapshotPurchsed.forEach((doc) => {
    //     newPurchsed = JSON.parse(JSON.stringify(doc.data()));
    //     moviesPurchsed.push(newPurchsed)
    // });

    return {
      props: {
        // moviesPurchsed: moviesPurchsed,
        moviesTvShows: moviesTvShows,
        movies: movies,
        moviesNewRelease: moviesNewRelease
      }
    }
  }


