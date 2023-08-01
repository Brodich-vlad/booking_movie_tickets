import Slider from '../slider/slider';
import { useNavigate } from "react-router-dom";
import './main-section.css';

export default function MainSection() {

    let navigate = useNavigate();
    const location = (id) =>{
        navigate(`details/${id}`);
    }
    return (
        <section className='main-section'>
            <Slider callbackLocation={location}/>
        </section>
    )
}