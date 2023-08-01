import Contacts from '../contacts/contacts';
import classes from './Footer.module.css';

export default function Footer(){
    return(
        <footer className={classes.footer}>
            <div className={classes.footer__wrapper} >
                <p  className={classes.footer__logo} >
                    V I V
                    <span className={classes.footer__logo_a}>e</span>
                    Cinema
                </p>

                <Contacts/>
                
                <p className={classes.footer__date}>28 July 2023</p>
            </div>
        </footer>
    )
}