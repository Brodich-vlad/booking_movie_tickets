import classes from './home-page.module.css';
import MainSection from '../../components/main-section/main-section';
import MoviesSection from '../../components/movies-section/movies-section';


import PopularStarsSection from '../../components/popular-stars-section/popular-stars-section';
import { useEffect } from 'react';



export default function HomePage({ dataFilms, dataStars }) {
    

    // Прокручу сторінку в гору.
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    },[])


    return (
        <main  className={classes.home_page}>
            <MainSection/>
            <MoviesSection/>
            <PopularStarsSection/>
        </main>
    )
}