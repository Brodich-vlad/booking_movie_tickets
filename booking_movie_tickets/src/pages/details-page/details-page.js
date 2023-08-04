import classes from './details-page.module.css';

import { useContext, useEffect, useState} from 'react';
import { useParams,  useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { createKey, creatNewVisit, searchObject } from '../../methods';

import star from '../../image/svg/star-filled.svg';

import { Context } from '../../components/сontext';

export default function DetailsPage(){
    // Отримуємо контекст.
    const {films, visitsInfo, callbackSetVisitsInfo} = useContext(Context);

    // Отримання id сторінки.
    const { id } = useParams();

    // Стан чи обрав користувач час.
    const [timeSession, setTimeSession] = useState(null);

    // Прокручуэмо сторінку в гору.
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    },[])


    // Навігація між сторінками.
    let navigate = useNavigate();

    const location = () => {
        callbackSetVisitsInfo(timeSession)
        navigate('tiket');
    }
 
    // Створюємо обект замовлення.
    const clicTime = (time, id, premiere, price) =>{
        const newObj = creatNewVisit(visitsInfo, time, id, premiere, price, films)
        setTimeSession(newObj);
    }

    // Виводимо інформацію на сторінку.
    const showPageFilm = (id, data) =>{
        const film = searchObject(id,data)

        const {name, info, price, image, backdrop,  rating, date, premiere } = film;


        return (
            <div className={classes.details} style={{background: `linear-gradient(180deg, rgba(0, 0, 0, 0.73) 20%, rgba(0, 0, 0, .73)), top center / cover fixed no-repeat url("${backdrop}")`}}>
                <Link className={classes.details_btn_back} to={'..'}><>&#10094;</> Go back</Link>
                <div  className={classes.details_wrapper}>
                    <div className={classes.details_img_wrapper} >
                   { image ? <img src={image} alt={name}/> : <p>Test</p>}
                    </div>
                    <div className={classes.details_info}>
                        <h1 className={classes.info_main_title}>{name}</h1>

                        {premiere && <h3 className={classes.item_info_title_second}>Premiere</h3>}

                        <div className={classes.info_rating}>
                            <img src={star} alt='star' />
                            <span>{rating}</span>
                        </div>

                       {/* Розклад */}
                        <ul  className={classes.details_schedule}>
                            <li className={classes.details_schedule_title}>
                                Schedule of sessions and ticket prices
                            </li>

                            {price.map(({time, price, premiere},i) => {
                                return (
                               <li key={createKey(i)}  className={classes.details_schedule_btn_wrapp} >
                                    <button className={classes.info_price_btn} type='button'
                                    onClick={()=>{
                                        clicTime(time, id, premiere, price)
                                    }}

                                    >{premiere 
                                        ?
                                    <><span>Time {time} : 00</span><span> Premiere</span> Price 170 ₴</>
                                        : 
                                    <> <span>Time {time} : 00</span> Price {price} ₴</>}</button>
                                </li>
                                )
                            })}
                        </ul>

                        <button disabled={timeSession ? false : true} className={classes.schedule_btn} type='button'
                            onClick={(ev) => {
                                ev.stopPropagation()
                                location()
                            }}
                            >Choose a place</button>
                    </div>     
                </div>
                <div>
                    <h2 className={classes.info_title}>Overview</h2>
                    <p className={classes.info_text}>{info}</p>
                    <p>{date}</p>
                </div>    
            </div>    
        )
    }

    return(
        <main className={classes.details_page} >
            {films && showPageFilm (id, films)}
        </main>
    )
}