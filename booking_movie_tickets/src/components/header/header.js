import { useContext } from 'react';
import './header.css';

import { Context } from '../сontext';

import { useMatch } from 'react-router';
import { Link } from 'react-router-dom';

export default function Header() {
    // Якщо не головна сторінка приховати поле пошуку.  
    const match = useMatch('/');

    // Отримуємо контекст.
    const {search, callbackSetSearchInput } = useContext(Context);

    // Стан строки інпута.
    const searchInput = (elem) => {
        callbackSetSearchInput(elem)
    }

    const cleanInput = () => {
        callbackSetSearchInput('')
    }   
    


    return (
        <header className='header'>
            <div className='header__wrapper'>
                <Link to={'/'} className='header__title_link'>
                <h1 className='header__title'><span className='logo__yllow'>V</span>
                <span className='logo__blue'>I</span>
                <span className='logo__green'>V</span><span className='header__title-logo'>e</span> Cinema</h1>
                </Link>
              
              { match  ? <div className='header__search'>
                    <input value={search} onChange={(value) => {
                        searchInput(value.target.value)
                    }} className='header__search_input' type='text' />

                    {search !== '' && <span onClick={cleanInput} className='header__close_btn'>&#215;</span>}
                    
                    <span  className='header__search_btn' type='button'></span>
                </div>: null}
         
            </div>
        </header>
    )
}
