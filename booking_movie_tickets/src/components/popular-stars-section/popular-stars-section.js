import classes from './popularStarsSection.module.css';
import { Poster } from '../poster/poster';
import { useState, useContext  } from 'react';
import ModalStar from '../modal-star/modal_star';

import { Context } from '../сontext';

export default function PopularStarsSection(){
    // Отримуємо контекст.
    const { stars } = useContext(Context);

    // Стан модалки.
    const [openModal, setOpenModal] = useState(false)
    const [infoModal, setInfoModal] = useState(null)

    const closeModal = () => {
        if (openModal ) {
            setOpenModal(false)
            setInfoModal(null) 
       } 
    }

    const showModal = (id) => {
        setOpenModal(true)
        setInfoModal(id)

    }

    return (
        <section className={classes.stars_section}>
            <h2 className={classes.stars_section__title}>Popular Stars</h2>
            <ul className={classes.stars_section__list}>
                {stars && <Poster dataArr={ stars } callbackLocation={showModal}/>}
            </ul>
           {openModal && <ModalStar clickModal={closeModal} idStar={infoModal}/>}
        </section>
    )
}