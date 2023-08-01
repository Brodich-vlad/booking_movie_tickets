import classes from './tiket-page.module.css';

import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';



import star from '../../image/svg/star-filled.svg';

import { createKey } from '../../methods';

import { Context } from '../../components/сontext';
import Ticket from '../../components/ticket/ticket';
import ModalFinish from '../../components/modal-finish/modal-finish';
import Form from '../../components/form/form';
import { Link } from 'react-router-dom';



export default function TiketPage() {
   // Отримуємо контекст.
    const { visitsInfo, historyVisits, callbackSetHistoryVisits, } = useContext(Context);

    // Відправляє на головну сторінку.
    let navigate = useNavigate();

    useEffect(() => {
        if (!visitsInfo.filmId && !openModal) {
            navigate(-1)    
        }
    })


    // Прокручуэмо сторінку в гору.
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    },[])


     // Стан модалки.
    const [openModal, setOpenModal] = useState(false);

    // Функція клік бронювати місце.
    const clickReserve = (arr) => {
        callbackSetHistoryVisits(arr)
        setOpenModal(true)
        setTimeout(() => {
            setOpenModal(false) 
            navigate('/')
        }, 3000)
    }

    // Функція виводить інформацію про історію замовлень.
    const showHistoryVisits = (data) =>{
        const newArr = data.map(({film, numPlaces, premiere, date, time},i)=>{

            return(
                <li key={createKey(i)} className={classes.info_story_list_item}>
                    <h3  className={classes.info_story_title}>{film.name}</h3>
                    {premiere && <h4 className={classes.info_story_title_second}>Premiere</h4>}
                    <p className={classes.info_story_text}>Date: <span>{date}</span> </p>
                    <h4>My tickets:</h4>
                    <ul className={classes.item_tickets_list}>
                        {numPlaces.map((el,i)=>{
                            
                            return <Ticket key={createKey(i)} data={el} title={film.name} premiere={premiere} date={date} time={time}/>
                        })}
                        
                    </ul>

                </li>
            )
        })



      return newArr

    }

    return (
        <main className={classes.tiket_page} style={visitsInfo.film && {background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.1)), top center / cover no-repeat fixed url("${visitsInfo.film.backdrop}")`}}>
            
        <Link className={classes.details_btn_back} to={'..'}><>&#10094;</> Go back</Link>
            
            <div className={classes.tiket_page_wrapper}>

                <div className={classes.tiket_page_title_wrapper}>
                    <h2 className={classes.tiket_page_title}>{visitsInfo.film.name}</h2>
                    {visitsInfo.premiere && <h3 className={classes.tiket_page_title_second}>Premiere</h3>}
                    <div className={classes.tiket_page_title_rating}>
                        <img className={classes.title_rating_img} src={star} alt='star' />
                        <span>{visitsInfo.film.rating}</span>
                    </div>
                </div>
                <Form callback={clickReserve}/>
                
                {historyVisits.length > 0 &&  <div className={classes.tiket_page_info_story}>
                    <h3 className={classes.info_story_title}>Booking history</h3>
                 
                    <ul className={classes.info_story_list}>
                        {showHistoryVisits(historyVisits)}
                    </ul>
                </div>}
            </div>

            {openModal && <ModalFinish/>}
        </main>
    )
}