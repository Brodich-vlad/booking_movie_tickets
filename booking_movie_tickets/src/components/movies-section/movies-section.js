import classes from './MoviesSection.module.css';
import { Poster } from '../poster/poster';
import { useNavigate } from "react-router-dom";
import { useState,  useContext, useMemo } from 'react';
import { Context } from '../сontext';
import error_film from '../../image/background/error_film.png';
import { creatNewVisit } from '../../methods';

export default function MoviesSection(){
    // Отримуємо контекст.
    const {films, search, visitsInfo, callbackSetSearchInput, callbackSetVisitsInfo } = useContext(Context);

    // Знайдені фільми.
    const [filmsSearch, setFilmsSearch ] = useState(films)

    // Перехід між сторінками.
    let navigate = useNavigate();

    // Перехід на сторінку "details".
    const location = (id) => {
        navigate(`details/${id}`);
        callbackSetSearchInput('');
    }

    // Перехід на сторінку "tiket".
    const callbackTime = (id, time, premiere, price) =>{
        const newObj = creatNewVisit(visitsInfo, time, id, premiere, price, films)
        callbackSetVisitsInfo(newObj)

        navigate(`details/${id}/tiket`);
        callbackSetSearchInput('');
    }

    // Фільтр фільмів.
    useMemo(() => {
        if (search !== '') {
            const test = [...films].filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
            setFilmsSearch(test)
        }
        else { setFilmsSearch(films) }
    }, [search, films]);

    // Скидання фільтрів.
    const clickIconError = () => {
        callbackSetSearchInput('');
    }


    return(
        <section className={classes.movies_section}>
            <h2 className={classes.movies_section__title}>Movies</h2>
            {filmsSearch && filmsSearch.length !== 0 ?  <ul className={classes.movies_section__list}>
                {filmsSearch && <Poster dataArr={ filmsSearch }  callbackLocation={location}  callbackTime={callbackTime}/>}
            </ul> : <>
            <h3 className={classes.movies_section__error_text }> Movie not found. <br/> Click the icon to view all.</h3>
                <div className={classes.movies_section__error}
                onClick={() => {
                    clickIconError()
                    }}>
                    <img src={error_film} alt='error_film'/>
                </div></>} 
        </section>
    )
}