import classes from './ticket.module.css';


export default function Ticket({data, title, premiere, date, time }){
    const {x,y,} = data;
    return (
        <li className={classes.ticket}>
        {title && <h3 className={classes.ticket_title}>{title}</h3>}
           { premiere && <h4 className={classes.ticket_title_second}>Premiere</h4>}

           {date && time && <p className={classes.ticket_text}>Date: <span>{date}</span> Time: <span> {time} : 00 </span></p>}
            <p className={classes.ticket_text}>Row: <span>{y+1}</span> Place: <span>{x}</span></p>

        </li>
    )
}