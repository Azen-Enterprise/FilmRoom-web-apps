import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../styles/Main.module.css';
import { Movie } from '../typings';
import { DocumentData } from 'firebase/firestore'
import Poster from './Poster';


interface Props {
    title: string
    movies: Movie[] | DocumentData[],
    sectionId: string
  }
  
const Row = ({ title, movies, sectionId }: Props) => {
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
 

    return (
        <>
            
            
            <div id={sectionId} className={styles.sectionHeader}>
           
                <h6>{ title }</h6>
                <div className={styles.block} />
            </div>
             <div className={styles.carouselWrapper}>
                <Carousel responsive={responsive}>
                {movies.map((movie: any) => ( <div key={Math.random + movie.id}>
                        <Poster  movie={movie} />
                    </div>))}
                </Carousel>
            </div>
        </>
    )
}


export default Row;