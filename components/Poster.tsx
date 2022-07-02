import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './styles/Poster.module.css';
import { Movie } from '../typings';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';

type Props = {
    movie: Movie
}

const Poster: FC<Props> = (props: Props) => {

    const [showModal, setShowModal] = useRecoilState(modalState)
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
    
    return (
        <div className={styles.row} onClick={() => {
            setCurrentMovie(props.movie)
            setShowModal(true)
        }}>
            <Image
                width="100%"
                height="100%"
                layout='fill' 
                objectFit='contain' 
                src={props.movie.cover_art}
                alt={props.movie.name} 
                key={props.movie.id}
                className={styles.row__poster} 
                
            />
        </div>
    )
}

export default Poster;
