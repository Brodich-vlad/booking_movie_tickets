import Carousel from 'react-bootstrap/Carousel'

import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css';
import star from '../../image/svg/star-filled.svg';
import { createKey, randomObjects } from '../../methods';


import { useContext } from 'react';
import { Context } from '../сontext';

export default function Slider({ callbackLocation }) {

    // Отримуємо контекст.
    const { films } = useContext(Context);

    const createCarouselItems = (data) =>{
        const Items = data.map(({id, name, info, rating, backdrop, premiere },i)=>{
            return(
                <Carousel.Item key={createKey(i)}  onClick={()=>{
                    callbackLocation(id)
                }} className='carousel__item'>
                    <img className="d-block w-100 carousel__item-img"
                    src={backdrop}
                    alt={name}
                    />

                   <Carousel.Caption className='carousel__info'>
                    <h2 className='carousel__info-title'>{name}</h2>

                    {premiere && <h3 className='carousel__info-title_second'>Premiere</h3>}

                    <p className='carousel__info-text'>{info}</p>
                        <div className='carousel__info-rating'>
                        <img src={star} alt='star' />
                        <span>{rating}</span>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
        return Items
    }

    return (
        <>{ films &&
        <Carousel fade  indicators={false} interval={4000} controls={false}>
            {createCarouselItems(randomObjects(films))}
            </Carousel>}
        </>    
    )
}