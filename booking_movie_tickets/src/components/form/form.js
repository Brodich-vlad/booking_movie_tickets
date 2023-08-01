import classes from './form.module.css';

import { useContext } from 'react';

import { createKey } from '../../methods';

import { Context } from '../../components/сontext';

import Ticket from '../../components/ticket/ticket';
import CinemaHall from '../cinema-hall/cinema_hall';
import DropList from '../drop-list/drop_list';


export default function Form({callback}) {
    
    // Отримуємо контекст.
    const { visitsInfo } = useContext(Context);
   

    // Функція виводить інформацію про обрані місця.
    const createListSeats = (info) => {
        const  {date, time, premiere, price, film, numPlaces} = info

        const newArr = [];

        numPlaces.forEach((e,i)=>{
                newArr.push(
                    <Ticket key={createKey(i)} data={e} title={film.name} premiere={premiere} time={time} date={date}/>
                )
            // }
        })
        if(newArr.length > 0){
            return (
                <>
                    <h3 className={classes.info_card_title_list}>Your tickets:</h3>
                    <ul className={classes.info_card_list}>
                        {newArr}
                    </ul>
                    <p className={classes.info_card_price}>Total price: <span>{newArr.length * price} ₴</span></p>

                    <button onClick={() => {
                        callback(visitsInfo)
                    }} className={classes.reserve_btn}  type='button'>Reserve seats</button>
                </>
            )
        }
        else return null
    }

    // Функція виводить інформацію про фільм місця ціни.
    const showInfoForm = (info) =>{
        const { time, price, date } = info;
 
        return(
            <div className={classes.form_info}>
               
                <p className={classes.info_text}>Session date: <span>{date}</span> </p>
                
                <p className={classes.info_text}>Session time: <span>{time} : 00</span></p>

                <p className={classes.info_text}>Price: <span>{price} ₴</span></p>

                {createListSeats(info)}
  
            </div>
        )
       
    }


    return(
        <div className={classes.form_wraper}>

            <div className={classes.form}>

                <DropList/>
    
               { showInfoForm(visitsInfo)}

            </div>

            <CinemaHall/>

        </div>
    )
}