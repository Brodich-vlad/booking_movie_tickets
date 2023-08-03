import {createNewData} from './create_new_data';
// Картинка заглушка.
import film_star from '../image/background/film-star.jpg'

export const createNewDataStars = (data) => {
    return data.map(({id, name, profile_path, known_for, popularity}) => {
        return {
            id: id,
            name: name,
            image: profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` :  film_star,
            known_for:createNewData(known_for),
            rating: popularity.toFixed(1),
        }
    })
}
