import classes from './drop_list.module.css';

import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import logo from '../../image/svg/ticket-swg/calendar.svg';

import { createKey, currentTime, createDateStr, createCalendar } from '../../methods';

import { Context } from '../сontext';

export default function DropList(){

    const { visitsInfo, callbackSetVisitsInfo } = useContext(Context);

    const changeTime = (el) =>{
        callbackSetVisitsInfo({time:el, numPlaces:[]})
    }

    const changeDate = (el) =>{
        callbackSetVisitsInfo({date:el, numPlaces:[]})
    }

    //Функція створення календаря.
    const createListItem = (date, arr) =>{
        const todey = createDateStr(new Date())
        const arrTime = [];
        arr.forEach(({ time },i)=> {
           if(todey === date){
            time  > currentTime() + .7 && arrTime.push(
                <li className={ time  === visitsInfo.time ? [classes.item_time_list_item, classes._show].join(' ') : classes.item_time_list_item} onClick={() => {
                    changeTime(time )
                }} key={createKey(i)}>{`${time}:00`}</li>
            )

           }
           else {
            arrTime.push(
                <li className={ time  === visitsInfo.time ? [classes.item_time_list_item, classes._show].join(' ') : classes.item_time_list_item} onClick={() => {
                    changeTime(time )
                }} key={createKey(i)}>{`${time}:00`}</li>)
           }
            
        });

        if(arrTime.length > 0){

            return(
                <Dropdown.ItemText className={date === visitsInfo.date ? [classes.drop_list_item, classes._show].join(' ') : classes.drop_list_item} key={createKey()} >
                <>
                    <h3 className={classes.item_date_btn} onClick={() => {
                        changeDate(date)
                    }}>{date}</h3>
                    <ul className={classes.item_time_list}>
                        {arrTime}
                    </ul>
                </>

            </Dropdown.ItemText>
            )

        }

    }

    const showList = (arr) =>{
        const price = visitsInfo.film.price;
        const newArr = arr.map((e, i) => {
            return (
                price && createListItem(e, price) 
            )
        })
        return newArr
    }

    return(
        <DropdownButton bsPrefix='drop_list' menuVariant ='dark' className={classes.drop_list} autoClose="outside" id="dropdown-autoclose-outside" title={<img className={classes.drop_list_img} src={logo}  alt='logo'/>}>

            {showList(createCalendar(new Date()))}
   
        </DropdownButton>

    )
}