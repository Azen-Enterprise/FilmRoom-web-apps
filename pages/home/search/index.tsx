import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Input, Navbar } from '../../../components';
import SearchIcon from '../../../assets/search-icon.svg';
import styles from '../../../styles/Search.module.css';
import Poster from '../../../components/Poster';
import Poster1 from '../../../assets/demo/poster2.jpeg';

type Movie = {
    id: number;
    title: string;
    imagePath: string | StaticImageData;
}

const Search = () => {
    const [data, setData] = useState<Movie[]>([
        {
            id: 1,
            title: 'Kiss of Death',
            imagePath: '../../../assets/demo/poster1.jpeg'
        },
        {
            id: 2,
            title: 'A good time to divorce',
            imagePath: '../../../assets/demo/poster2.jpeg'
        },
        {
            id: 3,
            title: 'Jason',
            imagePath: '../../../assets/demo/poster3.jpeg'
        },
        {
            id: 4,
            title: 'Ijang',
            imagePath: '../../../assets/demo/poster4.jpeg'
        },
        {
            id: 5,
            title: 'Insecure',
            imagePath: '../../../assets/demo/poster5.jpeg'
        },
        {
            id: 6,
            title: 'Broken',
            imagePath: '../../../assets/demo/poster6.jpeg'
        },
        {
            id: 7,
            title: 'Game of Thrones',
            imagePath: '../../../assets/demo/poster7.jpeg'
        },
        {
            id: 8,
            title: 'Silicon Valley',
            imagePath: '../../../assets/demo/poster8.jpeg'
        },
        {
            id: 9,
            title: 'Hackers',
            imagePath: '../../../assets/demo/poster9.jpeg'
        },
        {
            id: 10,
            title: 'Cybertron',
            imagePath: '../../../assets/demo/poster10.jpeg'
        }
    ]);
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        const filteredData = data.filter((movie) => {
            if (query !== '') {
                return movie.title.toLowerCase().includes(query);
            }
        });
        console.log(filteredData);
        setFilteredMovies(filteredData);
    }

    return (
        <div className={styles.searchContainer}>
            <Navbar isLoggedIn={true} isSearch={true} />
            <div className={styles.searchBody}>
                <div className={styles.searchInput}>
                    <Input 
                        showIcon={true}
                        icon={SearchIcon}
                        placeholderText='Search movies...' 
                        value={query}
                        onChange={(event) => {
                            setQuery(event.target.value.toLowerCase())
                            handleSearch();
                        }}
                    />
                </div>
                <div className={styles.results}>
                    <p>No search yet...</p>
                    {
                        filteredMovies.map((movie) => {
                            return (
                                <li key={movie.id}>
                                    <div className={styles.imageWrapper}>
                                        <Image 
                                            src={Poster1} 
                                            alt="image cover art"
                                            objectFit='contain'
                                            className={styles.coverArt} 
                                        />
                                    </div>
                                </li>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;
