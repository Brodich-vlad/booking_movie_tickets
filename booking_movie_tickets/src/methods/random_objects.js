const randomIndexs = (length) => {
    let arr = []
    for (let i = 0; i < 3; i++) {
        arr.push(Math.floor(Math.random()* length/2))
    }
    return arr
}

// Функція знаходить та повертає три вивадкові обекта для слайдера.
export const randomObjects = (data) =>{
    const indexs = randomIndexs(data.length);
    const newArr = []
    data.forEach((el,i)=>{
        if(indexs[0] === i || indexs[1] === i || indexs[2] === i){
        newArr.push(el)
        }
        else return
    })
    return newArr
}
