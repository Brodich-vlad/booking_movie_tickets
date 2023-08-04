import {currentTime} from './current_time'
import {createDateStr} from './calendar';


// Повертае рандомне значення true / false.
const randomBoolean = (i) =>{
    let num = Math.random()
    return num > i*1 ? true : false;
}

// індекс вільних місць в залежності від часу та дати.
const indexFre = ({date,time}) =>{
    const todey = createDateStr(new Date())
    if(time - 2  <= currentTime() && todey === date){
        return .4
    }
    else  if(time  > currentTime() && todey === date){
        return .2
    }
    else return .1
}



// Обект зали нумерація місць.
export  const createObjSeats = (visit) =>{

    const ind = visit && indexFre(visit)
    const newArr = [];
    let cayntX = 1;
    let cayntY = 0;
    for (let i = 0; i < 113; i++) {
       
        if (i === 8) { cayntY = 1;  cayntX = 1 }
        if(i === 18){cayntY = 2;  cayntX = 1 }
        
        if(i === 29){cayntY = 3;  cayntX = 1 }
        if(i === 41){cayntY = 4;  cayntX = 1 }
        if(i === 53){cayntY = 5;  cayntX = 1 }
        if(i === 65){cayntY = 6;  cayntX = 1 }
        if(i === 77){cayntY = 7;  cayntX = 1 }
        if(i === 89){cayntY = 8;  cayntX = 1}
        if(i === 101){cayntY = 9;  cayntX = 1}
        if(i === 113){cayntY = 10;  cayntX = 1}
        if(i === 125){cayntY = 11;  cayntX = 1}
        newArr.push(
        {
            id: i + 1,
            x:cayntX,
            y:cayntY,
            fre:randomBoolean(ind),
            selected:false,
        }
        )
        cayntX +=1
    }
    return newArr
}