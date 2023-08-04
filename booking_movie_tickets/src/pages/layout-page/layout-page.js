import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Loader from '../../components/loader';
import classes from './layout-page.module.css';

import { useState , useEffect} from "react";

import { createNewData, createNewDataStars, options, sortRating, urlFilms, urlStars } from '../../methods';


import { Context, visits, historyVisit } from '../../components/сontext';


export default function LayoutPage() {
    
    const [search, setSearch] = useState('');

    const [filmsData, setFilmsData] = useState(null);
    
    const [starsData, setStarsData] = useState(null);

    const [visitsInfo, setVisitsInfo] = useState(visits)
    
    const [historyVisits, setHistoryVisits] = useState(historyVisit);

    // Робимо запит на сервер.
    useEffect(() => {

        fetch(urlFilms, options)
            .then(response => response.json())
            .then(response => response.results && setFilmsData(sortRating(createNewData(response.results))))
            .catch(err => console.error(err));
            
        fetch(urlStars, options)
            .then(response => response.json())
            .then(response => response.results && setStarsData(createNewDataStars(response.results)))
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
                    <>
                      {filmsData  ? <Outlet/>: <Loader/> }
                    </>
	
                    <button onClick={clickBtnTop} className={classes.btn_top}  type='button'><span>⇧</span></button>

                    <Footer/>
                </Context.Provider>

            </div>
        </>  
    )
    
}