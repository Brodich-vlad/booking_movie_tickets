import classes from './error.module.css';
import error_film from '../../image/background/error_film.png';


export default function Error({text}){
    return(
        <div className={classes.error}>
            <h2 className={classes.error_title}>Something went wrong.<br/> Try reloading the page.</h2>

            <div className={classes.error_img}>
                <img src={error_film} alt='error_film'/>
            </div>
            {text && <p className={classes.error_text}>{text}</p>}
        </div>
    )
}