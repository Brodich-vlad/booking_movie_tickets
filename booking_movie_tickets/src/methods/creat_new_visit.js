import { searchObject } from './search_object';
import { currentTime } from './current_time';
import {createDateStr, nextDate} from './calendar';


// Севорює новий обект замовлення.
export const creatNewVisit = (visitData, time, id, premiere, price, films) => {
    const film = searchObject(id, films)
    const newObj ={
        ...visitData, 
        filmId: id, 
        film:film,
        time:time,
        premiere:premiere,
        date:time < currentTime()+.7 ? createDateStr(nextDate(new Date())): createDateStr(new Date()),
        price:premiere ? 170 : price,
    }
    return  newObj
}