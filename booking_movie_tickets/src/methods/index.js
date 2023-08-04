import { createStars } from './create_stars';
import { createKey } from './create_key';
import { creatNewVisit } from './creat_new_visit';
import { randomObjects } from './random_objects';
import { currentTime } from './current_time';
import { searchObject } from './search_object';
import { createNewData } from './create_new_data';
import { createNewDataStars } from './create_new_data_stars';
import { options, urlFilms, urlStars } from './options';
import { createObjSeats } from './create_obj_seats'; 
import { createDateStr, nextDate, createCalendar } from './calendar'; 
import { sortRating } from './sort_rating';

export { 
	createStars,
	createKey, 
	creatNewVisit, 
	randomObjects,
	currentTime,
	searchObject,
	createNewData,
	createNewDataStars,
	options,
	urlFilms,
	urlStars,
	createObjSeats,
	createDateStr,
	nextDate,
	createCalendar,
	sortRating,
	
}



// Функція створення ID або Key.
// export function getId(num){
//     const ABC = "AaBbCcDdEeFfGgHhIiJiKkLlMmNnJjPpQqRrSsTtUuVvWwXxYyZz";
//     const NUMBERS = "0123456789";
//     const LETTERS = ABC + NUMBERS;
//     let newId= "";
//     for (let i = 0; i < 8; i++) {
//         newId += LETTERS[Math.floor(Math.random() * LETTERS.length)];
//     }
//     newId +=  `_${num}`;
//     return newId;
// }


// Пошук обєкта обраної сторінки.
// export const searchObjPageGame = (data,idPag)=>{
// 	let objPage ='';
// 	data.forEach(({id,title,info,paramGame,infoLink,infoGame,img})=>{
// 		if(id === idPag){
// 			if(idPag === 'use-game'){
// 				objPage = {id,title,info,paramGame,img}
// 			}
// 			else objPage = {id,title,info,paramGame,infoLink,infoGame,img}
			
// 		}
// 	})
// 	return objPage
// }

// Функція зміни обєкту табло-інформаціїї гри.
// export const changeInfoTable = (gameArr) =>{
// 	let cauntMines = 0,
// 	cauntFlag = 0,
// 	cauntClear = 0,
// 	length = 0;

// 	gameArr.forEach((el,i)=>{
// 		length = i+1
// 		if(el.databomb){
// 			cauntMines += 1;
// 		}
// 		if(el.checked && !el.databomb){
// 			cauntClear += 1;
// 		}
// 		if(el.flag){
// 			cauntFlag += 1;
// 		}

// 	})

// 	let newTable = {
// 		numMines:cauntMines,
//         numFlag:cauntFlag,
//         numClear:cauntClear,
//         numNoClear:length - cauntMines,
//         gameWin:length - cauntMines === cauntClear && cauntMines === cauntFlag ? true  : false,
// 	}

// 	return newTable
// }

// Функція створення обєкту гри.
// export function createGame(numColumn, numBomb, cellSize, numTerms = numColumn){
// 	// let numTerms = 10;
// 	let x = 0,
// 	y = 0,
// 	numberColors= ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f1c40f', '#1abc9c', '#34495e', '#7f8c8d',],
// 	bombs = [],
// 	numbers = [];

// 	const objGaame ={
// 		elements :[],
// 	}

// 	for (let i = 0; i < numColumn * numTerms; i++) {
// 		const arr = {
// 			style:{width :cellSize + 'rem',height : cellSize + 'rem',fontSize : cellSize/1.5 + 'rem'},
// 			className:'tile',
// 			dataTile:`${x},${y}`,
// 			coordinates:`${x},${y}`,
// 			dataNum:0,
// 			content: false,
// 			checked: false,
// 			flag:false,
// 			databomb:false,
// 		}
// 		// додати бомби
// 		let random_boolean = Math.random() < numBomb;

// 		if (random_boolean) {
// 			bombs.push(`${x},${y}`);
// 			if (x > 0) numbers.push(`${x-1},${y}`);
// 			if (x < numColumn - 1) numbers.push(`${x+1},${y}`);
// 			if (y > 0) numbers.push(`${x},${y-1}`);
// 			if (y < numTerms - 1) numbers.push(`${x},${y+1}`);
			
// 			if (x > 0 && y > 0) numbers.push(`${x-1},${y-1}`);
// 			if (x < numColumn - 1 && y < numTerms - 1) numbers.push(`${x+1},${y+1}`);
			
// 			if (y > 0 && x < numColumn - 1) numbers.push(`${x+1},${y-1}`);
// 			if (x > 0 && y < numTerms - 1) numbers.push(`${x-1},${y+1}`);
// 		}

// 		x++;
// 		if (x >= numColumn) {
// 			x = 0;
// 			y++;
// 		}
// 		objGaame.elements.push(arr);
// 	}

// 	numbers.forEach(num => {
// 		let coords = num.split(',');

// 		objGaame.elements.forEach((e)=>{
// 			if(bombs.includes(e.coordinates)){
// 				e.dataNum = false;
// 				e.databomb = true;
// 			}
// 			else if(`${parseInt(coords[0])},${parseInt(coords[1])}`=== e.coordinates){
// 				e.dataNum = e.dataNum + 1;
// 				e.style = {...e.style ,color: numberColors[e.dataNum-1]};
// 			}
// 		})
// 	});
// 	return objGaame;
// }


/* Перевірити сусідні комірки */
// export function checkNeighborCells (dataArr, elem, dbl){
//     let newArr = [...dataArr];
// 	// Координати натиснутої клітинки.
// 	let coords = elem.coordinates.split(','),
// 	x = parseInt(coords[0]),
// 	y = parseInt(coords[1]),
// 	// Координати сусідніх клітинок.
// 	cellU = `${x},${y-1}`,
// 	cellUR = `${x+1},${y-1}`,
// 	cellR = `${x+1},${y}`,
// 	cellDR = `${x+1},${y+1}`,
// 	cellD = `${x},${y+1}`,
// 	cellDL = `${x-1},${y+1}`,
// 	cellL = `${x-1},${y}`,
// 	cellUL = `${x-1},${y-1}`;

// 	/* Перевіряємо сусідні клітинки змінюємо масив гри.*/

// 	if(dbl){
// 		dataArr.forEach((el) => {
// 			if(!el.checked && !el.databomb){
// 				if(el.coordinates === cellU || 
// 					el.coordinates === cellUR ||
// 					el.coordinates === cellR ||
// 					el.coordinates === cellDR ||
// 					el.coordinates === cellD ||
// 					el.coordinates === cellDL ||
// 					el.coordinates === cellL ||
// 					el.coordinates === cellUL
// 					){	
// 					if(el.dataNum === elem.dataNum){ 
// 						el.checked = true;
// 						el.content = el.dataNum;
// 					}
// 				}
// 			}
// 		});
// 	}
// 	else {
// 		dataArr.forEach((el) => {
// 			if(!el.checked && !el.databomb){
// 				if(el.coordinates === cellU || 
// 					el.coordinates === cellUR ||
// 					el.coordinates === cellR ||
// 					el.coordinates === cellDR ||
// 					el.coordinates === cellD ||
// 					el.coordinates === cellDL ||
// 					el.coordinates === cellL ||
// 					el.coordinates === cellUL
// 					){
// 					if(el.dataNum === 0){ 
// 						el.checked = true;
// 					}
// 					else {
// 						el.checked = true;
// 						el.content = el.dataNum;
// 					}
// 				}
// 			}
// 		});
// 	}

// 	/* Повертаємо змінений масив гри.*/
//     return newArr
// }

// Функція створення зірок сторінки 404.
// export const createStars = (className,num) =>{
// 	const stars = []
// 	for (let i = 0; i < num; i++) {
// 		stars.push(<div key={getId(i)} className={className}></div>) 
// 	}
// 	return stars
// }

//   // Ширина екрану користувача.
// export const useMobile = window.innerWidth < 960 ? true : false;
