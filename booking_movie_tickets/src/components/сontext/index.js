import { createContext } from "react"

// Шаблон замовлення.
export const visits = 
    {
        filmId: '',
        film:{},
        time:'',
        price:0,
        numPlaces:[],
        premiere:false,
        date:"25.07.2023",
    }

// Шаблон історії замовлень.
export const historyVisit = [


]

// Контекст за замовчуванням.
export const Context = createContext({
    films: [],
    stars: [],
    search: '',
    visits: visits,
    historyVisits:historyVisit,
    setFunction: ()=>{},
})