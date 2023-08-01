import classes from './loader.module.css';
import start from '../../image/gif/start-film.gif'


export default function Loader(){
    return(
        <div className={classes.loader_box}>

            <div className={classes.loader_box_img}>
                <img src={start}  alt='start'/>
            </div>

        </div>
    )
}