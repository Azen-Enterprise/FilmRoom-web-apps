import MuiModal from "@mui/material/Modal"
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import ReactPlayer from 'react-player/lazy'
import { FaLock, FaPlay } from 'react-icons/fa';
import MuxPlayer from "@mux-elements/mux-player-react"; 


import {
    CheckIcon,
    PlayIcon,
    PlusIcon,
    ThumbUpIcon,
    VolumeOffIcon,
    VolumeUpIcon,
    XIcon,
  } from '@heroicons/react/outline'
  import {
    collection,
    deleteDoc,
    doc,
    DocumentData,
    getDoc,
    onSnapshot,
    setDoc,
  } from 'firebase/firestore'
import { db } from '../firebase/firebase-config'
import useAuth from '../hooks/useAuth'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect, useState } from "react";
import { Movie, PaymentDetails } from "../typings";
// import { PayUnit } from "payunitjs"
var randomstring = require("randomstring");

interface Props {
    hasPurchasedMovie?: Boolean
}



const Modal = () => {

    const [movie, setMovie] = useRecoilState(movieState)
    const [trailer, setTrailer] = useState('')
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [muted, setMuted] = useState(false)
    // const [genres, setGenres] = useState<Genre[]>([])
    const [addedToList, setAddedToList] = useState(false)
    const { user } = useAuth()
    const [movies, setMovies] = useState<DocumentData[] | Movie[]>([])
    const [ hasPurchasedMovie, setHasPurchasedMovie ] = useState(false);
    const [ hasCheckedPurchase, setHasCheckedPurchase ] = useState(false);
    const [ playBackId, setPlayBackId ] = useState('');

    const toastStyle = {
        background: 'white',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '16px',
        padding: '15px',
        borderRadius: '9999px',
        maxWidth: '1000px',
      }

      const checkHasPurchased = async() => {

        const docRef = doc(db, "users", user!.uid, 'purchased', movie!.id);

        const docSnap = await getDoc(docRef);
        // setHasCheckedPurchase(true);

        if (docSnap.exists()) {
            // alert('Has Purchased');
            setHasPurchasedMovie(true)
            setHasCheckedPurchase(true);
            // console.log("Document data:", docSnap.data());
            } else {
            // alert('Has Not Purchased')
            setHasPurchasedMovie(false)
            setHasCheckedPurchase(true);
        }
      }

      const purchaseMovie = async() => {
        buyMovie(movie);
        await setDoc(
            
            doc(db, "users", user!.uid, 'purchased', movie!.id),
                {
                    name: movie?.name
                }
            )
            setHasPurchasedMovie(true);
            toast(
                `Purchased Video Successfuly`,
                {
                duration: 8000,
                style: toastStyle,
                }
        )
      }

      const playFullVideo = () => {
        setPlayBackId(movie?.video);
      }


     function buyMovie(movie: any) {
          

      let uniqueString = randomstring.generate({
        length: 19,
        charset: 'alphabetic'
      });

      let reqData: PaymentDetails =  {
          total_amount : `${movie.price}`,
           currency : "XAF",
           transaction_id : `${uniqueString}`,
           return_url : "https://us-central1-filmroom-fffd3.cloudfunctions.net/paymentCallback",
       }
      //  .ENV DATA
         let baseUrl = 'https://app.payunit.net/api'
         let xApiKey = 'bfc5a250056dc92f53983692b2fa6f663d024006';
         let apiUserName = 'payunit_sand_2WONtYl9S';
         let apiPassword = '0e6a0def-86fa-420c-9295-ae4dc8e7e718';

           fetch(`${baseUrl}`, {
               method: 'POST', 
               headers: {
                'Authorization': `Basic ${apiUserName}:${apiPassword}`,
                 'Content-Type': 'application/json',
                 'x-api-key': `${xApiKey}`,
                 'mode': 'test',
               },
               mode: 'no-cors',

               body: JSON.stringify(reqData) 
           }
           ).then((response) => {
             // Successfull Payment
             console.log('RESPONSE FROM PAYUNIT')
             console.log(response.json());
             return response.json()
           }).catch(err => {
             console.log('There was an error');
             console.log(err);
           })
         
         }


    useEffect(() => {
        if (!movie) return
        setMovie(movie);
        setPlayBackId(movie.playback_id)
        checkHasPurchased();

  
        // PayUnit(
        //     {
        //       apiUsername: "payunit_sand_2WONtYl9S",
        //       apiPassword: "0e6a0def-86fa-420c-9295-ae4dc8e7e718",
        //       x_api_key: "bfc5a250056dc92f53983692b2fa6f663d024006",
        //       mode: "test",
        //     },
        //     {
        //       return_url: "https://us-central1-filmroom-fffd3.cloudfunctions.net/paymentCallback",
        //       notify_url: " ",
        //       description: `${movie.description}`,
        //       purchaseRef: "",
        //       total_amount: `${movie.price}`,
        //       name: `${movie.name}`,
        //       currency: "XAF",
        //     }
        //   );

        // if (!hasCheckedPurchase) return
        
        // setHasPurchasedMovie(true);
        // fetchMovie()
      }, [movie])
      
    
      const handleClose = () => {
        setShowModal(false)
        setMovie(null)
        toast.dismiss()
      }
    
 

    
    return (
        <MuiModal
        open={showModal}
        onClose={handleClose}
        className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
      >
        <>
          <Toaster position="bottom-center" />
          <button
            className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
            onClick={handleClose}
          >
            <XIcon className="h-6 w-6 text-white" />
          </button>
  
          <div className="relative pt-[56.25%]">
         
            <MuxPlayer
                    streamType="on-demand"
                    style={{ position: 'absolute', top: '0', left: '0', width: "100%", height: "100%" }}
                    playbackId={`${playBackId}`}
                    primary-color="#E1613A"
                    metadata={{
                        video_id: "video-id-54321",
                        video_title: "Test video title",
                        viewer_user_id: "user-id-007",
                    }}
                />
         
          </div>
          <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
            <div className="space-y-6 text-lg">
                
              <div className="flex items-center space-x-2 text-sm">
                <p className="font-semibold text-orange-500">
                  {/* {movie!.age_rating } + */}
                  
                  { movie?.age_rating }
                </p>
                <p className="font-light text-orange-500">
                  {/* {movie?.release_date || movie?.first_air_date} */}
                  { movie?.dateReleased }
                </p>
                <div className="flex h-4 items-center justify-center text-orange-500 rounded border orange-border px-1.5 text-xs">
                  HD
                </div>
              </div>
              <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
                <div>
                <p className="w-4/5 text-white">{ movie?.description }</p>
                {hasCheckedPurchase ? <div>
                { !hasPurchasedMovie ?
                <button onClick={purchaseMovie} className="flex items-center gap-x-2 gap-y-2 play-btn rounded bg-white my-4 px-8 py-2 text-xl font-bold text-black transition hover:bg-[#E1613A]">
                    <FaLock className="h-7 w-7 text-black play-btn" />
                    Buy
                </button>
                :
                <button onClick={playFullVideo} id ="payunit-pay" className="flex items-center gap-x-2 gap-y-2 play-btn rounded bg-white my-4 px-6 py-2 text-xl font-bold text-black transition hover:bg-[#E1613A]">
                    <PlayIcon className="h-7 w-7 text-black play-btn" />
                    Watch
                </button>
                }</div> : <div></div> }
                </div> 
                <div className="flex flex-col space-y-3 text-sm">
                  <div className="text-white">
                    <span className="text-[gray]">Name:</span>{' '}
                    {/* { ...movie?.genre.split(',') } */}
                    { movie?.name}
                  </div>

                  <div className="text-white">
                    <span className="text-[gray]">Genres:</span>{' '}
                    {/* { ...movie?.genre.split(',') } */}
                    { movie?.genre}
                  </div>
  
                  <div className="text-white">
                    <span className="text-[gray]">Original language:</span>{' '}
                    {/* {movie?.category} */}
                    { movie?.language }
                  </div>
  
                  <div className="text-white">
                    <span className="text-[gray]">Ratings:</span>{' '}
                    {/* {movie?.rate} */}
                    { movie?.rate }
                  </div>

                  <div className="text-white">
                    <span className="text-[gray]">Cast:</span>{' '}
                    {/* {movie?.rate} */}
                    { movie?.cast.map((c: string) => `${c}, `) }
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </>
      </MuiModal>
    )
}

export default Modal;

// export async function getServerSideProps() {
//     let hasPurchasedMovie: Boolean;

//     hasPurchasedMovie = true;

//     return {
//         props: {
//             hasPurchasedMovie: hasPurchasedMovie
//         }
//     }
// }

