// var person = {
// 	firstName:"Bilbo",
// 	lastName:"Baggins",
// 	age:132,
// 	eyeColor:"blue",
// 	walk: function(){
// 		console.log('walking to Mordor');
// 	}
// };

// console.log(person.walk());

// person.address = "Shire";
// person.fight = function(){
// 	console.log('blood');
// };

// var fruit = prompt("Какой фрукт купить?", "Mandarin");
// var bag = {
// 	[fruit]: 2,
// };
// alert(bag.fruit);

// var person = {
// 	firstName: "Bilbo",
// 	lastName: "Baggins",
// 	age: 132,
// 	eyeColor: "blue"
// };

// var text = "";
// var x;
// for (x in person) {
// 	text += person[x];
// }
// console.log(text);

// var x = prompt("Введите число");
// if (x >= 0){
// console.log("Число положительное");
// }else {
// 	console.log("Число отрицательное");
// }

// var numbers = [ 254, 115, 78, 25, 91, 45, 37 ];


// for (var i = 0; i < numbers.length ; i++) { 
//   if( numbers[i] >= 50){
//   	console.log(numbers[i])
//   }
// }

// let arr = [5, 7, 10, 15, 17, 20, 25, 30, 35, 40, 45, 43, 50]
// let emptyArr =[];
// for(let i = 0; arr.length > i; i++){
// 	if(arr[i] % 5 === 0) emptyArr.push(arr[i]);
// 	console.log(i)
// }

// var x = prompt ("Кто пришел?");
// var pass = 'ECMA';
// if( x == ''){
// 	alert('Вход отменен');
// }else if ( x == 'PHP'){
// 	alert('Нет не стоит');
// }else if( x === 'Javascript' ){
// 	var pass = prompt('введите пароль');
// 	if( pass === 'ECMA'){
// 		alert('Добро пожаловать');
// 	}
// 	else{
// 		alert('Покеда');
// 	}
// }
// console.log(myObject.fullName());
// console.log(myObject.getContex());

// var add = function (a, b){
// 	return a + b;
// };

// var myObject = {
// 	value: 10
// }
// myObject.double = function(){
// 	var that = this;

// 	var helper = function (){
// 		that.value = add(that.value, that.value);
// 	};
// 	helper();
// };

// myObject.double();
// console.log(myObject.value);

// let arr = [5, 4, 3, 2, 1];
// let sort = [];
// let length = arr.length
// for(let i = 0; i < length; i++){
// 	sort.push(arr.pop());
// }
// console.log(sort);

// let arr = [1, 1, 2, 3, 4, 5];
// for(i = 0; i < arr.length; i++){
// 		if(arr[i] === arr[i+1]){
// 			console.log('match');
// 			break;
// 		} else {
// 			console.log('not match');
// 		}
// 	}
// function cube(a, b){
// return a ** b

// }
// console.log(cube(2, 3));
// function cube(a, b){
// return a + b

// }
// console.log(cube(2, 3));

// function oneTwoThree(a, b, c){
// 	return (a - b) / c
// }
// console.log(oneTwoThree(5, 4, 2));
// function func(a){
// 	let prompt = ('');
// 	switch (a) {
// 		case 1:
// 			alert('Mondey');
// 			break;
// 	case 2:
// 			alert('Tuesday');
// 			break;
// 	case 3:
// 			alert('Среда');
// 			break;
// 	case 4:
// 			alert('Четверг');
// 			break;
// 	case 5:
// 			alert('Пятница');
// 			break;

// 	case 6:
// 			alert('Суббота');
// 			break;
// 	case 7:
// 			alert('Воскресен');
// 			break;

// 	}
// }
// console.log(func(1));

// var myObject = {
// 	firstName : "Bilbo",
// 	lastName : "Baggins",
// 	fullName : function () {
// 		return this.firstName + " " + this.lastName;
// 	},
// 	getContex : function () {
// 		return this;
// 	}
// }


// первое
// console.log('Первое задание')
// function ZaitsevReverse(){
// 	let arr = [2, 7, 8, 9, 5]
// 	console.log(arr.reverse())
// }
// ZaitsevReverse()


// // Второе

// console.log('Второе задание')
// function IdenticalElements(){
// 	let myArray = [1, 3, 1, 5, 5, 6, 9, 2, 6];
// 	let sortedArray = [];
// 	for (let i = 0; i < myArray.length; i++){
// 		for (let j = i + 1; j < myArray.length; j++){
// 			if ( myArray[i] == myArray[j]){
// 				sortedArray.push(myArray[i]);
// 			}
// 		}
// 	}
// 	console.log(sortedArray);
// }
// IdenticalElements();

// // Третье
// console.log('Третье задание')

// function searchSmallNum(){
// 	let myArray = [99, 10, 24, 7, 6];
// 	let max = Math.max.apply(myArray);

// 	let min = Math.min.apply(myArray);
// 	max = -Infinity, min = +Infinity;
// 	for (let i = 0; i < myArray.length; i++){
// 		if (myArray[i] > max){
// 			max = myArray[i];
// 		}
// 		if (myArray[i] < min && myArray[i] % 2 != 0){
// 			min = myArray[i];
// 		}
// 	}
// 	console.log(min)

// }
// searchSmallNum();

// // Четвертое

// console.log('четвертое задание')

// function Average(a,b){

// let myArray = [4, 4, 5, 4];
// let result = [].reduce.call(myArray, function(a,b){return b+a;}) / myArray.length;
// console.log(result)

// }
// Average();

// // 2ой способ 

// function average(){
//     let avrArray = [4, 4, 5, 4];
//     let count = 0;
//     for (let i = 0; i < avrArray.length; i++){
//         count += avrArray[i];
//     }
//     count /= avrArray.length;
//     console.log(count);
// }
// average();

// // Пятое
// console.log('пятое задание')

// function searchPositive() {

// 	let myArray = [-2, -4, -3, 2, 2, 2];
// 	let count = 0;
// 	for ( let i = 0; i < myArray.length; i++){
// 		if (myArray[i] >= 0){
// 			count += myArray[i]
// 		}
// 	}
// 	console.log(count)
// }
// searchPositive();
// // Второй вариант
// function searchPositiveI() {

// 	let myArray = [-2, -4, -3, 2, 2, 2];
// 	let positive = [];
// 	for ( let i = 0; i < myArray.length; i++){
// 		if (myArray[i] >= 0){
// 			positive.push(myArray[i])
// 		}
// 	}
// 	console.log(positive)
// }
// searchPositiveI();

// // Шестое

// console.log('Шестое задание')

// function searchNegativeI() {
// 	let myArray = [-2, -5, -3, 3, 4, 5]
// 	let count = 0;
// 	for( let i = 0; i < myArray.length; i++){
// 		if( myArray[i] < 0){
// 			count += myArray[i]
// 		}
// 	}
// 	console.log(count)
// }
// searchNegativeI();

// // Второй вариант

// function searchNegative() {
// 	let myArray = [-2, -5, -3, 3, 4, 5]
// 	let negative = [];
// 	for( let i = 0; i < myArray.length; i++){
// 		if( myArray[i] < 0){
// 			negative.push(myArray[i])
// 		}
// 	}
// 	console.log(negative)
// }
// searchNegative();

// // седьмое задание
// console.log('Седьмое ')

// function searchMinimal() {
// 	let myArray = [-7, -8, 7, -5, 7, 4, -1];	
// 	let min = myArray[0];
// 	let max = min;
// 	  for (i = 1; i < myArray.length; ++i) {

// 	      if (myArray[i] < min){
// 	       min = myArray[i];
// 	   }
//  	}
//  console.log(min)
// }
// searchMinimal();


// // Восьмое задание
// console.log('Восьмое задание')

// function multipleSeven() {
// 	let myArray = [4, 7, 12, 14, 21];
// 	let count = [];
// 	for( let i = 0; i < myArray.length; i++){
// 		if ( myArray[i]%7 == 0){
// 			count.push(myArray[i]);
// 		}
// 	}
// 	console.log(count)
// }
// multipleSeven()

// // Девятое задание
// console.log('Девятое задание')

// function lastMinimal() {
// 	let myArray = [ 4, 12, 15, 7, 1, 1];
// 	let lastIndexNumer;
// 	let min = myArray[0];
// 	for ( let i = 0; i < myArray.length; i++){
// 		if(myArray[i] <= min){
// 			min = myArray[i];
// 			lastIndexNumber = i;
// 		}
// 	}
// 	console.log('минимальный элемент ' + min)
// 	console.log('индекс минимального значения ' + lastIndexNumber)
// }
// lastMinimal();

// // десятое задание

// console.log('Десятое задание')

// function maxNumber() {

// let myArray = [1, 2, 3, 6, 7, 99, 4, 12];
// let indexFirstBigNumber;
// let max = myArray[0];
// 	for( let i =0; i < myArray.length; i++){
// 		if(myArray[i] > max){
// 			max = myArray[i];
// 			indexFirstBigNumber = i;
// 		}
// 	}
// 	console.log('номер максимального значения ' + indexFirstBigNumber);
// }
// maxNumber()

// // одиннадцатое задание
// console.log('одиннадцатое задание')

// function theAmount(){
// 	let myArray = [1, 2, 3, 4, 5, 6, 7, 12];
// 	for ( let i = 0; i < myArray.length; i++);
// 		console.log(i);
// }
// theAmount();

// // Двеннадцатое задание

// console.log('Двеннадцатое задание')

// function sameElements() {

// 	let myArray = [2, 3, 4, 5, 2, 6, 5];
// 	let same = 0;
// 	let sameNumbers = [];
// 	for ( let i = 0; i < myArray.length; i++){
// 		for( let j = 0; j < myArray.length; j++){
// 			if(myArray[i] === myArray[j] && j!=i){
// 				same++;
// 				sameNumbers.push(myArray[i]);

// 			}
// 		}

// 	}
// console.log("Общее кол-во одинаковых чисел " + same);
// console.log("Одинаковые Числа " + sameNumbers);
// }
// sameElements();

// console.log("тринадцатое задание");

// function allDifferent() {
// let arr = [2, 3, 5, 100, 2, 100];
// let same = [];
// arr.sort(); 
// for (var i = arr.length - 1; i > 0; i--) {
//     if (arr[i] == arr[i - 1]) same.push(arr.splice( i, 1));
// }
// console.log(arr);
// console.log(same + ' повторились');
// }
// allDifferent();

// console.log("четырнадцатое задание");
