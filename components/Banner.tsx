import styles from '../styles/Main.module.css';
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { Movie } from '../typings';
import { useEffect, useState } from 'react';


interface Props {
    moviesNewRelease: Movie[]
  }

const Banner = ({ moviesNewRelease } : Props) => {

    const [movie, setMovie] = useState<Movie | null>(null)
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

    useEffect(() => {
        setMovie(
          moviesNewRelease[Math.floor(Math.random() * moviesNewRelease.length)]
        )
      }, [moviesNewRelease])
    
    return (
     <header className={styles.banner} style={{backgroundImage: `url(${movie?.cover_art})`, backgroundPosition: 'center center', backgroundSize: 'cover', height: '448px', objectFit: 'contain'}}>
        <div className={styles.banner__contents}>
            <h1 className={styles.banner__title}>{ movie?.name }</h1>
            <div className="banner__buttons">
                <button className={styles.banner__button} 
                    onClick={() => {
                        setCurrentMovie(movie)
                        setShowModal(true)
                      }}
                >Play Trailer</button>
                <button className={styles.banner__button}>My Movies</button>
            </div>
            <div className="max-w-xs text-sm text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2lg">
                { movie?.description }
            </div>
        </div>

        <div className={styles.banner__fadeBottom} />
    </header>
    )
}

export default Banner;