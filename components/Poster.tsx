import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './styles/Poster.module.css';

type Props = {
    imagePath: string | StaticImageData;
    alt?: string;
}

const Poster: FC<Props> = ({ imagePath, alt }: Props) => {
    return (
        <div className={styles.row}>
            <Image
                width="100%"
                height="100%"
                layout='fill' 
                objectFit='contain' 
                src={imagePath} 
                alt={alt} 
                className={styles.row__poster} 
            />
        </div>
    )
}

export default Poster;
