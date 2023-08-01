//  Функція поточного часу.
export const currentTime = () =>{
   let date = new Date().getHours()
   let min = new Date().getMinutes()
   let d = `${date}.${min}`*1;
   return d
}