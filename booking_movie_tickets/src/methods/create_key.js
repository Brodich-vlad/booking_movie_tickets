




// Функція створення ID або Key.
export function createKey(num = 'v') {
    const abc= "AaBbCcDdEeFfGgHhIiJiKkLlMmNnJjPpQqRrSsTtUuVvWwXxYyZz";
    const numbers = "0123456789";
    const leters = abc + numbers;
    let newId= "";
    for (let i = 0; i < 8; i++) {
        newId += leters[Math.floor(Math.random() * leters.length)];
    }
    newId +=  `_${num}`;
    return newId;
}
