import { Link } from "react-router-dom";
import "./error-page.css";
import { createStars } from '../../methods';


export default function ErrorPage(){

    return(
        <div className="error-page">

            <div className="container container-star">
                { createStars("star-1",30) }
                { createStars("star-2",30) }
            </div>

            <div className="container container-bird">
            <div className="bird bird-anim">
                <div className="bird-container">
                <div className="wing wing-left">
                    <div className="wing-left-top"></div>
                </div>
                <div className="wing wing-right">
                    <div className="wing-right-top"></div>
                </div>
                </div>
            </div>
            <div className="bird bird-anim">
                <div className="bird-container">
                <div className="wing wing-left">
                    <div className="wing-left-top"></div>
                </div>
                <div className="wing wing-right">
                    <div className="wing-right-top"></div>
                </div>
                </div>
            </div>
            <div className="bird bird-anim">
                <div className="bird-container">
                <div className="wing wing-left">
                    <div className="wing-left-top"></div>
                </div>
                <div className="wing wing-right">
                    <div className="wing-right-top"></div>
                </div>
                </div>
            </div>
            <div className="bird bird-anim">
                <div className="bird-container">
                <div className="wing wing-left">
                    <div className="wing-left-top"></div>
                </div>
                <div className="wing wing-right">
                    <div className="wing-right-top"></div>
                </div>
                </div>
            </div>
            <div className="bird bird-anim">
                <div className="bird-container">
                <div className="wing wing-left">
                    <div className="wing-left-top"></div>
                </div>
                <div className="wing wing-right">
                    <div className="wing-right-top"></div>
                </div>
                </div>
            </div>
            <div className="bird bird-anim">
                <div className="bird-container">
                <div className="wing wing-left">
                    <div className="wing-left-top"></div>
                </div>
                <div className="wing wing-right">
                    <div className="wing-right-top"></div>
                </div>
                </div>
            </div>
            <div className="container-title">
                <div className="title">
                <div className="number">4</div>
                <div className="moon">
                    <div className="face">
                    <div className="mouth"></div>
                    <div className="eyes">
                        <div className="eye-left"></div>
                        <div className="eye-right"></div>
                    </div>
                    </div>
                </div>
                <div className="number">4</div>
                </div>
                <div className="subtitle">Нажаль такої сторінки не існує.</div>

                <Link to={'/'} className="error-page__btn">Повернутися на головну сторінку</Link>
            </div>
            </div>   
        </div>
    )
}

