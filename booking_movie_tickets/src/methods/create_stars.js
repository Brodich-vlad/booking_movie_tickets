import { createKey } from './create_key';

// Функція створення зірок сторінки 404.
export const createStars = (className,num) =>{
	const stars = []
	for (let i = 0; i < num; i++) {
		stars.push(<div key={createKey(i)} className={className}></div>) 
	}
	return stars
}