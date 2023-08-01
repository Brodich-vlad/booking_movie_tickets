import classes from './cinema_hall.module.css';

import { useContext, useEffect, useState } from 'react';

import screen from '../../image/svg/ticket-swg/line.svg'
import seat_white from '../../image/svg/ticket-swg/seat.svg';
import seat_red from '../../image/svg/ticket-swg/seat-red.svg';
import seat_green from '../../image/svg/ticket-swg/seat-green.svg';

import { createKey, createObjSeats } from '../../methods';

import { Context } from '../../components/сontext'; 

export default function CinemaHall(){
    // Отримуємо контекст.
    const { visitsInfo, callbackSetVisitsInfo } = useContext(Context);

    // Стан вільних місць.
    const [seats, setSeats] = useState(createObjSeats());
    // Очищення стану місць.
    useEffect(()=>{
        if(visitsInfo.numPlaces.length === 0){
            setSeats(createObjSeats())
        }

    },[visitsInfo.numPlaces])

    // Клік обрати місце.
    const clickSeat = (id) =>{
        const arr = []
        const newArr = seats.map((e)=>{
            if(e.id === id){
                return{
                    ...e,
                    selected: e.selected ? false: true,
                }
            }
            else {return {...e}}
        })
        
        newArr.forEach((e)=>{
            if(e.selected){arr.push(e)}
        })
        callbackSetVisitsInfo({...visitsInfo, numPlaces: arr})
        setSeats(newArr)
    }

    // Функція створює масив рядків.
    const creatRows = () =>{
        const newArr = [];
        for (let i = 0; i < 10; i++) {
            newArr.push([])
        }
        return newArr
    }

    // Функція виводить глядацьку залу з місцями.
    const createCinemaHall = (data) =>{
        const newArr = creatRows();

        data.forEach((el,i) => {
            newArr[el.y].push(
                <li  className={el.id === 4 
                    ? 
                [classes.seat, classes.seat_centr_1].join(' ')
                    :
                el.id === 13
                    ? 
                [classes.seat, classes.seat_centr_2 ].join(' ')
                    :
                classes.seat} key={createKey(i)}
                 onClick={()=>{
                    el.fre && clickSeat(el.id)
                 }}
                 >
                    <img className={classes.seat_img} src={el.fre && !el.selected ? seat_white: el.selected ? seat_green : seat_red} alt='icon seat'/>
                </li>
            )
        });
        const arr = newArr.map((e,i)=>{
            return (
                <li key={createKey(i)} className={classes.hall_line_wrapper}>
                    <ul  className={classes.hall_line_seats}>
                        {e}
                    </ul>
                </li>
            )
        })
        return arr
    }


    return (
        <div className={classes.cinema_hall}>

            <h2 className={classes.cinema_hall_title}>Choose a place</h2>

            <img  className={classes.cinema_hall_screen} src={screen} alt='screen'/>

            <ol type = "1"  className={classes.cinema_hall_lines}>
                {seats && createCinemaHall(seats)}
            </ol>


            <ul className={classes.cinema_hall_list_info}>
                <li className={classes.cinema_hall_list_info_item}>
                    <img src={seat_red} alt='seat red'/>
                    <p>Occupied seat</p>
                </li>
                <li className={classes.cinema_hall_list_info_item}>
                    <img src={seat_white} alt='seat white'/>
                    <p>Free space</p>
                </li>
                <li className={classes.cinema_hall_list_info_item}>
                    <img src={seat_green} alt='seat green'/>
                    <p>Selected place</p>
                </li>
            </ul>

        </div>
    )
}