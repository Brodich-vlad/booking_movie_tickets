import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Loader from '../../components/loader';
import Error from '../../components/error/error';

import classes from './layout-page.module.css';

import { useState , useEffect} from "react";

import { createNewData, createNewDataStars, options, sortRating, urlFilms, urlStars } from '../../methods';


import { Context, visits, historyVisit } from '../../components/сontext';

export default function LayoutPage() {
    // Стан пошукової строки.
    const [search, setSearch] = useState('');
    // Стан масиву фільмів.
    const [filmsData, setFilmsData] = useState(null);
    // Стан масиву зірок.
    const [starsData, setStarsData] = useState(null);
    // Стан замовлення.
    const [visitsInfo, setVisitsInfo] = useState(visits)
    // Стан історії замовлень.
    const [historyVisits, setHistoryVisits] = useState(historyVisit);

    // Стан помилок.
    const [error, setError] = useState(null);
    // Стан лоудера.
    const [loader, setLoader] = useState(false);

    // Функція слідкує за помилками.
    const filtrError = (res, flag) =>{
        if(flag === 'films'){
            if(res.results){
                setFilmsData(sortRating(createNewData(res.results)))
            }
            else {
                setError(res)
                console.log(res)
            }
        }
        if(flag === 'stars'){
            if(res.results){
                setStarsData(createNewDataStars(res.results))
            }
            else setError(res)
        }
        setLoader(false)
    }
 
    // Робимо запит на сервер.
    useEffect(() => {
        setLoader(true)

        fetch(urlFilms, options)
            .then(response => response.json())
            .then(response => filtrError(response, 'films'))
            .catch(err => console.error(err));
            
        fetch(urlStars, options)
            .then(response => response.json())
            .then(response => filtrError(response, 'stars'))
            .catch(err => console.error(err));
    }, [])


    // Функція зміни стану пошуку.
    const callbackSetSearchInput = (str) => {
        setSearch(str)
    }

    // Функція зміни стану замовлень.
    const callbackSetVisitsInfo = (newVisit) =>{
        setVisitsInfo({...visitsInfo, ...newVisit})
    }

    // Функція зміни стану замовлень.
    const callbackSetHistoryVisits = (newVisit) =>{
        setHistoryVisits([newVisit, ...historyVisits])
        setVisitsInfo(visits)
    }
    // Прокручуэмо сторінку в гору.
    const clickBtnTop = () =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return(
        <>
            <div className={classes.layout_page}>

                <Context.Provider value={{ films:filmsData, stars:starsData,search:search, visitsInfo:visitsInfo,historyVisits:historyVisits, callbackSetSearchInput, callbackSetVisitsInfo, callbackSetHistoryVisits }}>
                    <Header/>
                    <div className={classes.wrapper}>
                      {error  
                        ? 
                      <Error text={error.status_message}/>
                        :
                        filmsData 
                        && 
                        starsData 
                        && 
                        <Outlet/>
                        }
                    </div>

                    {loader && <Loader/>}

                    <button onClick={clickBtnTop} className={classes.btn_top}  type='button'><span>⇧</span></button>

                    <Footer/>
                </Context.Provider>

            </div>
        </>  
    )
    
}