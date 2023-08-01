
// Створює строку дати.
export const createDateStr = (today) =>{
    let day= today.getDate(); 
    let month = today.getMonth() + 1; 
    let year = today.getFullYear();

    let dateStr = `${day < 10 ?`0${day}`:day}.${month + 1 < 10 ?`0${month}`:month}.${year}`;
    return dateStr;
  }



export const nextDate = (today) =>{
  let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
  return tomorrow

}

export const createCalendar = (day) =>{
  const newArr = []
  let date = day;
  newArr.push(date)
  for (let i = 0; i < 6; i++) {
    newArr.push(nextDate(date));
    date = nextDate(date);
  }
  const arr = newArr.map((el,i)=>{
    return createDateStr(el)
  })
  return arr
}
