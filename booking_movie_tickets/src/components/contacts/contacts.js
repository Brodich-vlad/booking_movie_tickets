import { useState } from 'react';
import classes from './contacts.module.css';

import mail from '../../image/svg/contacts/mail_white.svg';
import in_icon from '../../image/svg/contacts/in_black.svg';
import telegram from '../../image/svg/contacts/telegram_icon.svg';
import phone from '../../image/svg/contacts/phone.svg';
import projects from '../../image/svg/contacts/projects_white.svg';


export default function Contacts(){
    const [open, setOpen] = useState(false);

    const clickOpen = () =>{
        open ? setOpen(false) : setOpen(true)
    }

    return(
        <div className={classes.contacts}>
            <h3 className={classes.contacts_title}>Developer contacts:</h3>

            <a className={classes.contacts_link} href="mailto:brodich_vlad@ukr.net">
                <img className={classes.contacts_link_img} src={mail} alt='mail icon'/>
                brodich_vlad@ukr.net</a>

            <button  className={classes.contacts_btn}  type='button' 
            onClick={clickOpen}>More contacts ...</button>

           {open && <ul className={classes.contacts_drop_list}>

                <li className={classes.list_item}>
                    <a  className={classes.contacts_link}  href="https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4-%D0%B1%D1%80%D0%BE%D0%B4%D0%B8%D1%87-3a1a95279/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B6BXqQwKdQomR3DVER3%2BjvA%3D%3D'," target="_blank" rel="noopener noreferrer">
                    <img className={classes.contacts_link_img} src={in_icon} alt='in icon'/>
                        Linkedin</a>

                </li>

                <li className={classes.list_item}>
                    <a  className={classes.contacts_link}  href="https://t.me/Vlad_Green_Bro" target="_blank" rel="noopener noreferrer">
                    <img className={classes.contacts_link_img} src={telegram} alt='telegram icon'/>
                        t.me/Vlad_Green_Bro</a>

                </li>

                <li className={classes.list_item}>
                    <a className={classes.contacts_link} href="tel:+380677606508">
                    <img className={classes.contacts_link_img} src={phone} alt='phone icon'/>
                        +38 067 760 65 08</a>
                </li>

                <li className={classes.list_item}>
                    <a  className={classes.contacts_link}  href="https://cv-front-end-vlad-brodich-2023-eng-uk.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img className={classes.contacts_link_img} src={projects} alt='projects icon'/>
                    CV_Vlad_Brodich</a>

                </li>

            </ul>}
        </div>
    )
}