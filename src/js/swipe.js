import { onMylibraryClick, changeHeaderInHome } from './header/change-view-header';
import Notiflix from 'notiflix';


const page1 = document.querySelector('.js-swipe-home');

let startPoint={};
let nowPoint;
//_____________________Touches_______________________________________
page1.addEventListener('touchstart', handleTouch, { passive: false });
//____________________Обработчик касания_____________________________
function handleTouch(event){
	event.stopPropagation();
	startPoint.x=event.changedTouches[0].pageX;
	startPoint.y=event.changedTouches[0].pageY;
};
//________________________________________________________________________

//_______________________Ловим движение пальцем___________________________
page1.addEventListener('touchmove', handleTouchMove, { passive: false })

//____________________Обработчик отрезка проведенного пальцем__________________________

function handleTouchMove (event) {
	event.stopPropagation();
	//event.preventDefault();
	let otk = {};
	nowPoint = event.changedTouches[0];
	otk.x = nowPoint.pageX-startPoint.x;
	otk.y = nowPoint.pageY-startPoint.y;
	//console.log(nowPoint.pageX, nowPoint.pageY)
	/*Обработайте данные*/
	/*Для примера*/
	//right-left
	
		//Если проводит больше 70px - swipe
		if(Math.abs(otk.x)>160){
			//Если смещение влево - двигаем страницу 
			if (otk.x < 0) {
				page1.style.right = 40  + 'px';
				//'-' + otk.x + 'px';
				page1.style.left = -40  + 'px';
				//Смещение влево второй страницы 
				if (Math.abs(otk.x)>30) {
					page1.style.display = "block";
					page1.style.right = "0";
					page1.style.transition = "right 500ms linear";
				}
			}
			//Если смещение вправо - двигаем страницу
			if (otk.x > 0) {
				page1.style.right = 40  + 'px';
				page1.style.left = 40   + 'px';
				//Смещение вправо второй страницы
				if (Math.abs(otk.x) > 30) {
					page1.style.display = "block";
					page1.style.right = "0";
					page1.style.transition = "right 500ms linear";
				}
			}
			startPoint={ x: nowPoint.pageX,  y: nowPoint.pageY,};
		}
	
}

//__________________Ловим отпускание пальца__________________
page1.addEventListener('touchend', handleTouchEnd, {passive: false}); 

//__________________Обработчик отпускания пальца__________________
function handleTouchEnd (event) {
	
	nowPoint = event.changedTouches[0];
	let xAbs = Math.abs(startPoint.x - nowPoint.pageX);
	let yAbs = Math.abs(startPoint.y - nowPoint.pageY);
	//if (xAbs > 40 || yAbs > 40){
	//if (xAbs > yAbs) {
	//если отпускают палец при 40px и больше по X - swipe
	if (xAbs > 60 && yAbs<20) {console.log(xAbs, yAbs);
		//если смещение влево - листаем вправо и наоборот
		if (nowPoint.pageX < startPoint.x) {
			Notiflix.Loading.dots('Processing...');
				console.log('L');
			onMylibraryClick();
			normalizeBody(xAbs, nowPoint.pageX, startPoint.x);
			Notiflix.Loading.remove();
			}
		else {
			Notiflix.Loading.dots('Processing...');
			changeHeaderInHome();
			console.log('R');
			normalizeBody(xAbs, nowPoint.pageX, startPoint.x);
			Notiflix.Loading.remove();
		}
	} 
	//}
	//}
};

//__________________
function normalizeBody(a, b){
	if (a < b) {
		page1.style.display = "block";
		page1.style.right = "0";
		page1.style.transition = "right 500ms linear";
	}
	page1.style.display = "block";
	page1.style.left = "0";
	page1.style.transition = "left 500ms linear";
	
}

export {handleTouch, handleTouchMove, handleTouchEnd };