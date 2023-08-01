import classes from './poster.module.css';
import { createKey } from '../../methods';

export function Poster({dataArr, callbackLocation, callbackTime }){

    // Створює строку досягнень для карточки актор. 
    const createKnown = (data) =>{
        const str =[]
        data.forEach(({name})=>{
            name && str.push(name)
        })
        return str.join(', ')
    }

    // Час сеансів.
    const sessionTime = (data, id) =>{
        const arr = []
        data.forEach(({time, premiere, price},i)=>{
          
            arr.push( <li  className={classes.schedule_list_btn} key={createKey(i)}  
                onClick={(ev) => {
                ev.stopPropagation()
                callbackTime(id, time, premiere, price)
            }}
            >{premiere 
                ?
            <><span>{time} : 00</span><span>Premiere</span></>
                : 
            <span>{time} : 00</span>}</li>)
           
        })

        const elem = <>
            <h3 className={classes.schedule_title}>Schedule</h3> 
            <ul className={classes.schedule_list}>{arr}</ul>
        </>

        return elem
    }


    const createItems = (data) =>{
        const Items = data.map(({id, name, image, date, known_for, price,premiere},i)=>{
            return(
                <li className={classes.item}  key={createKey(i)}>
                    <div className={classes.item_wrapper} 
                        onClick={(ev)=>{
                        ev.stopPropagation()
                        callbackLocation(id)}}
                    >
                        <img className={classes.item_img}  src={image}
                        alt={name}/>
                        <div className={classes.item_info}>
                        <h3 className={classes.item_info_title} >{name}</h3>

                        {date && <p className={classes.item_info_date} >{date}</p>}
                        {known_for && <p className={classes.item_info_known} >{createKnown(known_for)}</p>}
                        </div>
                    </div>
                    {premiere && <h3 className={classes.item_info_title_second}>Premiere</h3>}

                    {price && <div className={classes.schedule}>
                            {sessionTime(price,id)}
                    </div>}
                </li>
            )
        })
        return Items
    }

    return(
        <>
            {createItems(dataArr)}
        </>
    )
}
