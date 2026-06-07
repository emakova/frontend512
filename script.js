/* function fn (a,b, ...args){
  console.log("a =" , a ,"b =" , b , "args" ,args);
}
fn(1,2,3,"A","B","C");
//args - остаточный параметр. ставится только в конце. и должен быть только 1 */

// задача посчитать сумму значений числовых

/* function sum(...args){

return args.filter(e => typeof e === 'number')
  //получили 2 числовых значения возвращаем их в новый массив 
  .reduce((prev, curr) => prev + curr) // получили сумму 

 
}
console.log(sum(10,"hi", null, undefined, 20));
//console.log(sum(5,7,9,6,8,2,3));  */

//стрелочная функция конкатенации аргументов

/* let combine = (...arg)=>arg.reduce((prev, curr)=> prev + " " + curr);
console.log(combine("hello","world", "!")) */

/* function hello(name){
  name= name || "гость";
  document.writeln("привет " + name + "!<br>");

}
hello("юлия");
hello(); */

//другой вариант

/* function hello(name="гость") {
	
	document.writeln('привет ' + name + '!<br>')
}
hello('юлия')
hello() */

//создать фцнкцию которая будет принимать значения высоты и ширины  и цвет фона прямоульника и выводить его  в браузер

/* function rectangle(w,h=300, fon="gold"){
  document.writeln("<div id='shape'></div>");
  let id = document.getElementById("shape");
  id.style.width = w +"px";
  id.style.height = h + "px";
  id.style.background = fon;
}

rectangle(/* 200,100,"green") */

/* let j = 2;//глобальная
function ch(){
  let j = 3;// локальная
}
ch();
console.log(j);// получаем глобальную */

/* let j = 2;//глобальная
function ch(){
   j = 3;// локальная(без let)
}
ch();
console.log(j);// получаем локальную */

//функция принимает 2 числа и возвращает квадрат этих чисел

/* function func(num1, num2){
  function square(num){
  return num*num;//вспомогательная функция
}
  return square(num1) + square(num2);
}
console.log(func(2,3)); */

/* function test(num1,num2){
  let num = 5;
  function func(){
    console.log(num1 +num2);//7 //4
    
  }
  num1 =2 //4 получаем . перезапись числа
  func();
}
test(5,2); */

/* function test(num){//5
   function func(localnum){//7
    console.log(localnum);//7
    
   }
   func(num + 2);//5+2=7
}
test (5); */

/* function func(){
  return function(str){
return(str);
  }
}
console.log(func()("hello"));//вложенную функцию вызываем через вторые вложенные скобки(hello)
 */



//func(2)(3)(4)(5)()=>[2,3,4,5]
/* function func(num1) {
  let arr =[];
	return function (num2) {
		return function (num3) {
		  return function (num4) {
        return function(){
           return[num1,num2,num3,num4];
           }
			
		}
	}
	}
}
console.log(func(2)(3)(4)(5)()); */



/* function hello(){
  console.log("привет");
  
}
console.log(hello);// функция не вызывается а просто выводится полностью на экран
 */


//========================================================================================================

//Замыкание

//========================================================================================================

/* function test (){
  let num=5;
  return function(){
    console.log(num);
    
  }
}
let func = test();
func();//5
 */


//нужно будет написать функцию, которая ведёт подсчёт количество посещению указанного города. Функция должна принимать в качестве аргумента название города и возвращать некоторую внутреннюю функцию, которая каждый раз при её вызове будет увеличивать счётчик посещений на 1. При решении задачи используйте не локальную область видимости.


/* function test(city){
  let num = 0;
  return  function(){
    num++;
    console.log(city,num);
  }
  
  
}

let func1 = test("москва");
func1();
func1();
func1();
let func2 = test("Сочи");
func2();;
func2();
func2(); */



//фильтраци данных из массива и проверка на содержание элементов в массиве




// написать функцию , которая выбирает только значения между 3 и 6 ( включительно) 
/* function isBtween(a,b){
   return function (x){
      return x >=a && x<=b;
   }
}
let arr = [1,2,3,4,5,6,7];
console.log(arr.filter(isBtween(3,6))); */

//написать функцию , которая выбирает только элементы совпадающие с одним из элементов массива[1,2,10]
/*  let arr = [1, 2, 3, 4, 5, 6, 7]
function isArray(arr) {
  return function (x) {
    return arr.includes(x)
  }
}
console.log(arr.filter(isArray([1, 2, 10])))  */

//let a = +prompt("");
//let ch = n %10;
//задача про копейки 




//РАБОТА СО СТРОКАМИ


  /* let str = "i\'m a javascript \"programer\"";
document.writeln(str + "<br>"); 
let str1 = 'Я учу javascript. мне нравится javascript. '
let a = "hello"
let b ="world"
str = str.concat(". ", str1, a, b);
document.writeln(str + "<br>")

let message ="*";
document.writeln(message.repeat(97)+"<br>");
document.writeln(str.indexOf("javascript") + "<br>") */
//возвращает индекс на котором находится подстрока или "-1" если ничего не найдено


//document.writeln(str[2] + '<br>');
//str = str[2]+y;//перезапись str

/* document.writeln(str.length + "<br>"); //29 
document.writeln(str[6] + '<br>');
document.writeln(str.at(6) + '<br>');  */
/* for(let ch of str){
console.log(ch);
} */

//document.writeln(str.toUpperCase() + "<br>")//преобразование в верхний регистр
//document.writeln(str.toLowerCase() + "<br>")//преобразование в нижний регистр




// написать имя с исправлением на первую заглавную букву


/* let n = prompt("введите имя ", "юля")
alert(first(n));
function first(st){
let newStr= st[0].toUpperCase();

For(let i=1; i < st.length; i++){
  newStr+= st.at(i).toLowerCase();
}
return newStr
} */






/* Написать скрипт подсчитывающий количество каждой буквы русского алфавита в тексте. */

/* let s = "абббабввбабвбвббабвббабв";
countLetters(s)
function countLetters(st){
  let letters = ["а","б","в"];
  for(let i =0; i< letters.length; i++){
    let count =0;
    for(let j = 0; j< st.length; j++){
      if(st[j]==letters[i]){
        count++;
      }
    }
    document.writeln("символ '" + letters[i] + "' встретился " + count + "раз<br> ");
  }
} */


// задача написать программу проверяющую корректность email, а именно проверка на наличие "@"
/* let email;
do {
  email = prompt("введите свой email: ", "test");
if(email.indexOf("@") == -1){
  alert( "email некорректный. повторите оперцию")
}else{
  break
}
} while (true);
alert("спасибо за сотрудничество"); */



/* let str = "i\'m a javascript \"programer\". Я учу javascript. мне нравится javascript";
document.writeln(str + "<br>");  */
//console.log(str.split(" ." ));// разбивает по символу в коыфчках . пробел точка или запятая - это символ разделитель

/* let arr = str.split("javascript");
console.log(arr);
let st = arr.join("c++");
document.writeln(st + "<br>"); */
// символ разделитель не попадает в новый массив, ф join объединяет все элементы массива через символ разделитель (новый с++)

//let text = st.replaceAll("c++","javascript");//заменил только при первом вхождении . остальное проигнорированно . если нужно все заменить то используем all
//document.writeln(text + "<br>");

//document.writeln(str.slice(0,3) +"<br>");// ищет с 0 до 3 не включая 3 индекс
//document.writeln(str.slice(6) + '<br>') // ищет с 6 индекса и до конца , если не указан второй параметр, метод также работает с отрицательными идтексами.
//document.writeln(str.substring(0,3) + '<br>')// работает также , но не работает с отрицательными индексами 



//background - color => backgroundColor
 /* let style = prompt("введите свойство css", "background-color")
 alert(def(style));

 function def(st) {
  let arr = st.split("-");
  console.log(arr);
  for(let i = 1; i< arr.length; i++){
  arr[i] = arr[i].at(0).toUpperCase() //преобразование в верхний регистр первых букв методом at  начиная с 0 индекса после "-"
  + arr[i].slice(1);
  //добавляет все остальное начиная с первого индекса и до конца
   
  }
  return arr.join("");
 } */



/* let hello = "  hello   ";
console.log(">"+hello+"<");
let beforeLength =hello.length;
console.log("длина строки до ",beforeLength);


hello = hello.trim();
console.log('>' + hello + '<')
let afterLength = hello.length
console.log("длина строки после ",afterLength)
// убирает пробелы с левой и правой стороны 

let add = hello.padStart(15);
console.log(">" + add + "<");
add = hello.padEnd(15, "-")
console.log('>' + add + '<')
//добавляет символы 


document.writeln(7); */



/* document.writeln("hello">"Hello");//true => 104>72 сравнение по коду символов 

document.writeln("hello".codePointAt(0))
//получили как раз таи код символа по индексу 0

document.writeln(String.fromCodePoint(104));
//получили из кода символа его букву */



/* let a  = 122;
let b = 97;
if(a>b){
  for(let i = b; i<=a; i++){
  document.writeln(String.fromCodePoint(i))
}
}else{
  for (let i = a; i <= b; i++) {
	document.writeln(String.fromCodePoint(i))
} 
} */





// задача на генерацию паррля 



/* let shortest =12;
let longest =18;
let minASCII =33;
let maxASCII = 126;

function randomPassword() {
  let randomLength = rand(shortest, longest)
  let res =""
  for (let i = 0; i < randomLength; i++) {
		let randomChar = String.fromCodePoint(rand(minASCII, maxASCII))
		res = res + randomChar
	}

return res;
}
function rand(min,max){
  return Math.floor(Math.random()*(max-min +1) + min);
}
document.writeln("ваш случайный пароль" + randomPassword()) */



//рекурсивная функция ю вызивает сама себя 
//========================================


/* function elevator (n){
if(n == 0 ){
  document.writeln("вы в подвале <br>");
  return;
}
console.log(n);

elevator(n-1);//5 4 3 2 1
document.writeln(n + " ");//данные вызываются в обратном порядке
}
let n1 = prompt("на каком этаже вы находитесь","5");
elevator(n1);
 */


// вычеслить сумму чисел от 1 до n  с помощью рекурсии

/* function sum(n){// приходит 5 =>4 => 3 =>2 =>1 
if(n<=1){
  return n;//1 возвращается в sum(n-1)
}
return n + sum(n-1);// 5+4+3+2+1 сладывается в обратном порядке 
}
document.writeln(sum(5));//1+2+3+4+5=15 */



/* let ch = prompt("введите число ","2");
let st  = prompt("введите степень","4");
document.writeln(ch, " в степени ", st, " = ", deg(ch,st));

function deg(c,s){//4>3>2>1>0
 if (s){
  return c*deg(c,s-1); //2*2*2*2*1=16
 }
 return 1//0 >1 => возвращается вместо вызова функции 
} */


//5! =1 *2*3*4*5
//домашнее задание найти фактариал числа c помощью рекурсии 
/* let fac  = n =>{
  let f = 1 ;
  for(let i = 1;i <= n;i++){
f *=i
  }
  return f;
}
document.writeln(fac(5)); */











/* var str3 = "earth and sun";
var index = str3.indexOf("sun");
alert(index);
index = str3.indexOf("moon"); */





//====================================================
// урок 16
// ====================================================


//дз через рекурсию

//стек=5>4>3>2>1
//5>0?5:1
/* let factorial = n =>(n>0)?n* factorial(n-1):1;
document.writeln(factorial(5)); */

//другой способ


/* function factorial(n){
  if(n>0){
    return n*factorial(n-1)
  }else{
    return 1;

  }
}
document.writeln(factorial(5)) */




//задача решенная с помощью рекурсии

 
/* function toStr(n,base){//n=254 base =10 перманентно
  let convert = "0123456789ABCDEF";
  if(n<base){//254<10
    return convert[n];
  }else{
		return toStr(parseInt(n / base), base) + convert[n % base] // (parseInt(254 /10 =25) + convert[254%10 =4] => (parseInt(25 /10 =2) + convert[25%10 =5]   '4''5''2' => return 2 +5 +4 =>254
	}
}
document.writeln(toStr(254,10)); */



/* function toStr(n, base) {
	//n=254 base =16 перманентно
	let convert = '0123456789ABCDEF'
	if (n < base) {
		//254<16
		return convert[n]//
	} else {
		return toStr(parseInt(n / base), base) + convert[n % base] // (parseInt(254 /16 =15) + convert[254%16 =254-(16*15=240)=14] => (parseInt( /16 =) + convert[%16 =]   '14''15' => return 14 +15 =>FE
	}
}
document.writeln(toStr(254, 16))//=FE */


//==================================================
//события
//==================================================


/* function loadStr(){
  alert("страница была загружена");
}


let m = document.getElementById("mes");
function over(){
  
  m.style.color="red";
}

function out() {
	m.style.color = 'green'
}

function change(){
  let id = document.querySelector("h2");
  id.style.color="blue"
}

function randomBg (){
  let r = (Math.random() * 256);
  let g = (Math.random() * 256);
  let b = (Math.random() * 256);
  document.body.style.background=`rgb(${r},${g},${b})`;
}

let newImg = document.getElementById("newImg")
function on(){
newImg.src ="../JS_6/night.png"
}

function off (){
newImg.src ="../JS_6/day.png"
} */


//let but = document.getElementById("but");
/* ut.onclick = function(){
  alert("спасибо"); */
//}
//напрямую понимает id , но класс нет (не самый хороший вариант )


/* let hex = "0123456789ABCDEF".split("");
let button = document.getElementById("btn");
let color = document.querySelector(".color");

button.onclick=function(){
let hexColor =generateHex();
console.log(hexColor);
color.textContent = hexColor;
document.body.style.background = hexColor;

}

function generateHex(){
  let hexColor ="#";
  for(let i = 0; i<6; i++){
    hexColor+= hex[getRandomNumber()];
  }
  return hexColor;
}

function getRandomNumber(){
  return Math.floor(Math.random()*hex.length);
} */

/* function change(id){
id.innerHTML = 'новый текст';
id.style.color='red';
} */

/* function setColor(color){
document.body.style.background=color.className;
} */





//==================================================
//урок 17
//==================================================



//третий способ для использования событий 

/* let el =document.querySelector("#elem");
//элемент.addEventListener("тип события", функция)
el.addEventListener('click', function(){
el.innerHTML = "новый текст";
});
el.addEventListener('contextmenu', function(){
  el.style.color = "green";
  el.style.background = "yellow";
}) */


//задача список городов


/* let searchInput = document.querySelector("#searchInput");
let list = document.querySelectorAll("#list li");
searchInput.addEventListener("input",function(){
  let searchTerm = this.value.toLowerCase();
  //сохраняем то что пользователь ввел в поле ввода
console.log(searchTerm);
console.log(list.length);
for(let i = 0; i<list.length;i++){
	let item = list[i];

	if (item.textContent.toLowerCase().indexOf(searchTerm) !== -1) {
item.style.display = "block";
	}else{
    item.style.display = "none";
  }
}
}) */


//кнопка


/* let but = document.querySelector("button");
but.addEventListener("click", function(event){
console.log(event);

}) */


//кномки 5 шт 



/* let buttons = document.querySelectorAll("input");
let handleClick = function(event){
console.log("кликнули по: ", event.target.value);
}
for(let i =0; i<buttons.length; i++){
  buttons[i].addEventListener("click", handleClick);
} */




//задача на отслеживание курсора мыши и изменение цвета фона div



  /* document.addEventListener("mousemove", function(event){
    let c = document.querySelector("#ev");
    let x = event.clientX;
    let y = event.clientY;
    c.textContent = "X= " + x + "Y= " + y;

    c.addEventListener("dblclick",function(event){
      event.target.style.background = "red";
    })
  }) */



    //задача с рамками
    // всплытие событий . события отрабатывают от самого вложенного до первого родительского тега

    //фазы событий :
    //фаза захвата(сверху вниз)
    //фаза цели(где произошло событие)
    //фаза всплытия(событие идет обратно снизу вверз)
    /* let section = document.querySelector("section");
    let div = document.querySelector('div');
    let p = document.querySelector('p');

    section.addEventListener("click", function(){
      section.style.background = "red";
    })

    div.addEventListener('click', function (event) {
			div.style.background = 'yellow'
      event.stopPropagation();//перестал закрашиваться родительский тег
		})

    p.addEventListener('click', function () {
			this.style.background = 'green'
		}) */



      //отмена стандартного действия тега. в нашем случае тега а
      /* let link = document.querySelector("a");
      link.addEventListener("click", function(event){
        event.preventDefault();
        console.log("переход по ссылке отменен")
      }) */





        // отмена события 

        /* let input = document.querySelector("#but");
        input.addEventListener("click", handle);

        function handle(){
          alert("спасибо");
          input.removeEventListener("click", handle);
        } */


  //setTimeout(функция, задержка);   
  
  //setTimeout("alert('text')", 3000);//только милисекунды
  /* setTimeout(hello, 3000);
  function hello(){
    alert("text")
  } */






    // сщздание анимированного зацикленного текста



 /* document.writeln("<div id='dt'>создание анимированного текста</div>") ;

let tag = document.querySelector("#dt");
console.log(tag);
let text = document.querySelector('#dt').innerHTML;
console.log(text);
let i = 0;

window.addEventListener("load", animtext);

function animtext (){
  tag.innerHTML = text.substring(0,i);
  i++;
   if(i>text.length){
    i=0;
   }
  setTimeout(animtext,100);
}  */


/* let d = new Date();
document.writeln(d + "<br>");
document.writeln(d.toDateString() + '<br>');
document.writeln(d.getFullYear() + '<br>');
document.writeln(d.getMonth() + '<br>');//месяцы идут от 0 по 11
document.writeln(d.getDate() + '<br>');
document.writeln(d.getDay() + '<br>') */




/*  document.writeln("<input type='button' value='start/stop'>")
document.querySelector("input").addEventListener("click", st);

function setColor(){
  let x = document.body;
  x.style.background = (x.style.background == "yellow") ? "orange" : "yellow"
}

let act, run; //run = undefind
function st(){
  if(!run){//(true)
    act =  setInterval(setColor, 1000);
    //run = true
  }else{
   clearInterval(act);
   //run = false; 
  }
  run = !run;
}  */


/* document.writeln("<input type='button' value='start'>")
document.writeln("<input type='button' value='stop'>")
document.querySelector('input').addEventListener('click', st);
document.querySelectorAll('input')[1].addEventListener('click', st2);

function setColor() {
	let x = document.body
	x.style.background = x.style.background == 'yellow' ? 'orange' : 'yellow'
}

let act;
function st() {
	act = setInterval(setColor, 1000);
  console.log(act);
}

function st2(){
  clearInterval(act);
} */



/* document.writeln("<div id='text'>время</div>");

window.addEventListener("load", function(){setInterval(time,1000 )} );

function time(){
  let d = new Date;
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  if(min<10){
    min = "0" + min;
  }
  if(sec<10){
    sec = "0"+sec;
  }
  let t = hour + ":" + min + ":" + sec ;
  document.querySelector("#text").innerHTML = t;
} */


/* document.writeln(`
  <input type= "text" id= "timer" value="0.0" size="4">;
  <input type= "button" value = "start/stop">
  <input type= "button" value = "clear">
  `);

document.querySelector("input[value = 'start/stop']").addEventListener("click", startTimer);
document.querySelector("input[value = 'clear']").addEventListener("click",resetTimer);

let act, run;

function startTimer(){
  if(!run){
   act =  setInterval(incTimer, 100);
  }else{
    clearInterval(act);
  }
  run= !run

}

let tsec = 0;
function incTimer(){
tsec++;
let t  = tsec/10.0;
if(tsec%10==0){
  t += ".0"
}
document.getElementById("timer").value = t;
}

function resetTimer(){
  document.getElementById("timer").value = "0.0";
  tsec = 0;
} */





  //задача на время в акции



/* let countdownElement = document.querySelector(".countdown");
let items = document.querySelectorAll('.countdown-item > h4' );



let countdownDate = new Date(2026,3,18,20,31,0).getTime();
function getCountTime(){
  let now = new Date().getTime();
  //console.log(now);

  let distanse = countdownDate -now;
  //console.log(distanse);
  
  let oneDay = 24*60*60*1000;
  let oneHour = 60*60*1000;
  let oneMinute = 60*1000;

  let days = Math.floor(distanse / oneDay);
  let hours = Math.floor(distanse% oneDay / oneHour);
  let minutes = Math.floor(distanse%oneHour / oneMinute);
  let seconds = Math.floor(distanse%oneMinute / 1000);

  let values = [days, hours, minutes,seconds];

  items.forEach(function(item,index){
    item.textContent = values[index];

  })
  if(distanse<0){
    clearInterval(countdown);
    countdownElement.innerHTML ="<h4 class='expired'>время вышло</h4>"
  }
}

let countdown = setInterval(getCountTime,1000);
getCountTime(); */
/* let but = document.querySelector("#cl");
but.addEventListener("click",myMove);

function myMove(){
  let elem =document.getElementById("animate");
  let pos = 30;
  let id = setInterval(frame,10);
  function frame(){
    if(pos == 350){
      clearInterval(id);
      let n = document.getElementById('cl')
			n.style.display = 'block'
    }else{
      pos++;
  elem.style.top = pos + "px";
  elem.style.left = pos +"px";
  let n = document.getElementById("cl");
  n.style.display = 'none';
    }
    
  }
  
} */


//новый урок 19


/* document.image.border = "1"
document.writeln("<br>ширина  изображения " + document.image.width);
document.writeln('<br>высота  изображения ' + document.image.height);
document.image.width = 200;//изменение параметров изображения напрямую

document.image.src = '../JS_6/blue_star.png'//замена атрибута напрямую */


// замена картинки на другую напрямую через click


/* document.image.addEventListener("click", changeImage);
let flag = 0;
function changeImage(){
  if(flag==0){
    document.image.src = '../JS_6/blue_star.png';
    flag=1;
  }else{
    document.image.src = '../JS_6/golden_star.png'
    flag=0;
  }
} */



  //создание слайдера



/* let array = new Array("2.jpg", "3.jpg","4.jpg");
document.writeln("<input type='button' value='<' name='left'>");
document.writeln("<img id='sl' src='"+ array[0] + "'>");
document.writeln("<input type='button' value='>' name='right'>");

document.getElementsByName("right")[0].addEventListener("click", setRight);

document.getElementsByName('left')[0].addEventListener('click', setLeftt)
let image = document.getElementById("sl");
let i =0;
function setRight(){
  i++;
  if(i==array.length){
    i=0;
  }
image.src = array[i];
}

function setLeftt(){
  i--;
  if(i<0){
i=array.length - 1;
  }
  image.src = array[i]
} */



  //задача на построение текущего времени с помощью картинки 


/* let imgTime = [
	'c0.gif',
	'c1.gif',
	'c2.gif',
	'c3.gif',
	'c4.gif',
	'c5.gif',
	'c6.gif',
	'c7.gif',
	'c8.gif',
	'c9.gif',
]

let masImg = document.querySelectorAll("#block img");
clock();

function clock(){
  let time = new Date();
  let hours = time.getHours();
  let min = time.getMinutes();
  let second = time.getSeconds();
  getImg(hours,min,second);
  setTimeout(clock,1000);
}

function getImg(h,m,s){
masImg[0].src = imgTime[parseInt(h/10)];
  masImg[1].src = imgTime[h%10];
  masImg[3].src = imgTime[Math.floor(m/10)];
	masImg[4].src = imgTime[m % 10];
  masImg[6].src = imgTime[Math.floor(s / 10)]
	masImg[7].src = imgTime[s % 10]
} */




//домашнее задание

/* document.querySelector("button").addEventListener("click", function(){

})
console.log(document.querySelector("input").value); */
/* let a =5;
let b =7;
let temp = a;
a=b;
b= temp; */
//принцип как поменять местами значения пременных





/* alert(document.documentElement.innerHTML);
lert(document.body.innerHTML); */

/* let myTitle= document.querySelector("h1").innerHTML;
console.log(myTitle);
let title3 = document.querySelector("h3").childNodes[0].nodeValue;
console.log(title3) */

/* let myTitle = document.querySelector('h1').firstChild; */
//alert(myTitle.nodeName); //H1
//alert(myTitle.nodeType); //1

/* let elem = document.querySelector("#root");

let tag = document.createElement("p");
let node = document.createTextNode("новый текст на странице");
tag.append(node); //<p>новый текст на странице</p>
elem.append(tag);//добавляет новый элемент последним дочерним элементов внутри родительского
elem.prepend(tag);//добавляет новый элемент первым дочерним элементов внутри родительского
elem.before(tag);//добавляет новый элемент до выбранного id
elem.after(tag);//добавляет новый элемент после выбранного id
elem.replaceWith(tag)//перезапись новым элементом выбранный id */

//задача сос списком
/* let tree = document.querySelector(".tree");
for(let li of tree.querySelectorAll("li")){
	console.log(li)
	let span = document.createElement("span") //<span></span>
	li.prepend(span) //<li><span></span><li>
  span.append(span.nextSibling);
}

tree.addEventListener("click", function(event){
  if(event.target.tagName != "SPAN"){
    return;
  }
  let childrenContainer = event.target.parentNode.querySelector("ul");
  if(!childrenContainer){
    return;
  }
  childrenContainer.hidden = !childrenContainer.hidden;
}) */






  /* let list = document.querySelector("ul");
  let newItem = document.createElement("li");
newItem.textContent = "новый элемент списка";
list.append(newItem); */


// чай кофе молоко вода задача

/* let i = 1;
document.querySelector("#funck1").addEventListener("click",change);

document.querySelector('#funck2').addEventListener("click", add);

function change(){
let elem = document.querySelector("#list2").lastChild;
document.querySelector("#list1").append(elem);
}

function add(){
  let elem = document.createElement("li");
  elem.innerHTML = "water" + i;
  document.querySelector("#list2").append(elem);
  i++;
} */


//календарь

/* let calendar = document.getElementById("calendar")
let date = new Date();
let year  = date.getFullYear();
let month = date.getMonth() + 1;//4

createCalendar(calendar,year,month);


function createCalendar(elem,year,month){
  let curDate = new Date(year,month-1,1);//3
  let findDate = new Date(year, month, 0)//4

  while(curDate.getDay() !=1){
    curDate.setDate(curDate.getDate()-1)
  }
  let currentMonth = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
  let current = document.createElement("h2");
  current.textContent = `${currentMonth[month-1]} ${year}`;
elem.append(current);

let table = document.createElement("table");
table.innerHTML = `
<tr>
<th>пн</th>
<th>вт</th>
<th>ср</th>
<th>чт</th>
<th>пт</th>
<th>сб</th>
<th>вс</th>
</tr>
`;
while(curDate<=findDate){
  let tr = document.createElement("tr");
for(let i =0;i<7;i++){
let td = document.createElement("td");
if(curDate.getMonth()==month-1){
  td.textContent = curDate.getDate();

}
tr.append(td);
curDate.setDate(curDate.getDate() + 1);
}
  table.append(tr);
}
elem.append(table);
} */


/* let div = document.querySelector("#root");
div.insertAdjacentHTML("beforebegin", "<p> До выбранного текста</p>");
div.insertAdjacentHTML("afterend","<p> После выбранного текста</p>");
div.insertAdjacentHTML("afterbegin","<p> Первый внутри выбранного элемента</p>");
div.insertAdjacentHTML(
	'beforeend',
	'<p> Последний внутри выбранного элемента</p>',
)
 let child = document.querySelector("#p1");
// child.remove(); 
let child2 = document.querySelector('#p2')
child2.after(child); */




/* let ul = document.querySelector("ul");
let li = ul.cloneNode(true);//клонировали
li.querySelector("li").innerHTML = "начало слонируемых элементов";
ul.after(li); *///получили дубликат списка после основного


/* let list = document.querySelector(".list");//ul
list.insertAdjacentHTML("beforebegin","<h2>список</h2><hr>")
let listInner = document.querySelector("h2");
listInner.insertAdjacentText("beforeend"," планет")
list.insertAdjacentHTML("afterbegin","<li>юпитер</li>");
list.insertAdjacentHTML('beforeend', '<li>марс</li>');
list.insertAdjacentHTML('afterend', '<hr>');
let hr = document.querySelectorAll("hr")[1];
let h4 = document.createElement("h4");
h4.innerHTML="конец списка";
hr.insertAdjacentElement("afterend",h4);

let idRemove = setInterval(function(){
  let li = document.querySelector("li:last-child");
  if(li === null){
    clearInterval(idRemove);
    //alert("список удален")
    list.insertAdjacentElement("afterbegin","<li>список удален</li>");
  }else{
     li.remove();
  }
 
},500); */


// решение дз


/* let span =  document.querySelectorAll("span")

for(let i = 0; i<span.length;i++){
  span[i].addEventListener("click", function () {
    this.parentNode.remove();
  })
} */

  //==================================================================================================
// добавление и удаление класса


  /* let div = document.querySelector("div");
  div.className = "alert";// заменяет имя класса
  let activeDiv = document.querySelector(".active");
  activeDiv.classList.add ("hidden");//добавляет еще один класс */


// главная о нас контакты задача 


  /* let menu = document.querySelector(".menu");
  let child = document.querySelectorAll(".menu li");
  menu.addEventListener("click",(event)=>{
    if(event.target.tagName === "LI"){
      for(let item of child){
      item.classList.remove("active");
    }
   event.target.classList.add("active")
    }
  }) */
    


    // задача с развернутым списком


    // let menuElem = document.getElementById('sweeties');
    // let titleElem = document.querySelector(".title")

    // titleElem.addEventListener("click",function() {
    //   menuElem.classList.toggle("open")
    // })



//задача простого мальберта

/* let brush = document.createElement("div");
brush.classList.add("brush");



document.addEventListener("mouseover", function (){
 // console.log("cob")
  brush.hidden = false;
});
document.addEventListener('mouseout', function () {
	// console.log("cob")
	brush.hidden = true;
})

document.addEventListener("mousemove",function(event){
	// console.log("cob", event.clientX, event.clientY)
  brush.style.left = `${event.clientX}px`;
   brush.style.top = `${event.clientY}px`
   //console.log(event.buttons);
   if(event.buttons === 1){
    let paint = document.createElement("div");
    paint.classList.add("paint");

    paint.style.left = `${event.clientX}px`;
    paint.style.top = `${event.clientY}px`;
    document.body.append(paint);
   }
   
})
document.addEventListener("mousedown",function(){
	// console.log("cob")
  brush.style.scale = "0.8";
})
document.addEventListener('mouseup', function () {
	//console.log('cob');
  brush.style.scale = '1'
})
document.body.append(brush); */

//лягушка

/* let frogImg = document.getElementById("green-frog");
console.log(frogImg.id);
console.log(frogImg.className);
console.log(frogImg.alt);
console.log(frogImg.title);
console.log(frogImg.src);
console.log(frogImg.getAttribute("src"));
frogImg.title = "новый текст подсказки";
frogImg.setAttribute("src","4.jpg");
//frogImg.removeAttribute("src");
console.log(frogImg.getAttribute("data-frog"));
console.log(frogImg.dataset.frog); */

/*  let lengthPath = 5;
let pagination = document.querySelector('.pagination')
let product = document.querySelector('.product-cover');
let data = new Array(18);
let filter = document.querySelector(".buttons");

for(let i =0; i<data.length;i++){
  data[i]=document.createElement("div");
  data[i].classList.add("card");

  if(i%3){
    data[i].classList.add("blue");
  }else{
 data[i].classList.add('gray');
  }
  let node = document.createTextNode(i+1);
  data[i].append(node); product.append(data[i]);
}
let chunks = splitParrts(data);
renderChunks(0);

renderPagination();

pagination.addEventListener("click", e=>{
  let item = e.target.closest(".pagination-item");

  if(item){
    let active = pagination.querySelector(".pagination-item.active"), part;
    if(item.classList.contains("item-prev") || item.classList.contains("item-next")){
      if(item.classList.contains("disable")){
        return false;
      }
      part= +active.dataset.part;
      part = item.classList.contains("item-prev")?part - 1 : part + 1;
      renderChunks(part);

      active.classList.remove("active");
      
      pagination.querySelector(`.pagination-item[data-part='${part}']`).classList.add("active");
    }else{
      active.classList.remove('active');
      item.classList.add("active");
      part = +item.dataset.part;
      renderChunks(part);
    }

    let prev = pagination.querySelector(".pagination-item.item-prev");
    let next = pagination.querySelector('.pagination-item.item-next');

    if(prev.classList.contains("disable")){
      prev.classList.remove("disable");
    }

    if (next.classList.contains('disable')) {
			next.classList.remove('disable');
		}

    if(part===0){
      prev.classList.add("disable");
    }

    if (part === chunks.length-1) {
			next.classList.add('disable');
		}
  }
});

function splitParrts(arr){
if(arr.length>lengthPath){
let chunks = [];
for(let i = 0; i<arr.length;i+=lengthPath){
chunks.push(arr.slice(i,i+lengthPath))
}
return chunks;
}else{
  return arr
}
}
function renderChunks(part) {
  if(part>=0&&part<=chunks.length){
    product.innerHTML = "";
    chunks[part].map(elem=>product.append(elem));
  }else{
    return false;
  }
} 

function renderPagination(){
  if(chunks.length>1){
    chunks.map((elem,i)=>pagination.insertAdjacentHTML("beforeend",`<li class= 'pagination-item${i===0 ? " active" : ""}' data-part="${i}"><a href="#">${i+1}</a></li>`))

    pagination.insertAdjacentHTML("afterbegin", "<li class='pagination-item item-prev disable'><a href='#'>prev</a></li>");

    pagination.insertAdjacentHTML(
			'beforeend',
			"<li class='pagination-item item-next '><a href='#'>next</a></li>",
		);


  }
}

filter.addEventListener("click", e=>{
  let btn = e.target.closest(".btn");
  pagination.innerHTML = "";
  if(btn){
    if(btn.dataset.filter !=="all"){
      chunks = splitParrts(data.filter(elem => elem.classList.contains(btn.dataset.filter)))
    }else{
      chunks =splitParrts(data);
    }
  }
  renderChunks(0);
  renderPagination();
}) */


//работа с формой 


/* let form = document.querySelector("form");
console.log(form.length);
console.log(form.elements)
console.log(form.name)
console.log(form.action)
console.log(form.method) */

//document.form1.style.background = "silver";

/* document.forms[0].style.margin = "20px";
document.forms["form1"].style.padding = "20px";
document.forms.form1.style.border = "2px dotted green"; */

 /* let key = form.elements[0];
console.log(key); 

let key2 = form.elements["name1"]
console.log(key2); */

/* document.form1.name1.style.color = "blue";
document.form1["name1"].style.background = "aqua";

let txt = document.querySelector("#text1");
let but = document.querySelector("button");

but.addEventListener("click", content);
function content(){
  alert(txt.value);
} */


/* let text = document.querySelector("input");
let output = document.querySelector("#length");

text.addEventListener("input", function(){
  output.textContent = text.value.length + "/100";
}) */

 /* let form = document.querySelector("form");
form.addEventListener("submit", function(event){
  console.log("сщхраненные данные: " + form.elements.value.value);
  event.preventDefault();//отменяет переход на другую страницу, но сохраняет данные
})  */

/*  let reg = document.querySelector('.registr');
let h2 = document.querySelector("h2");
let win = document.createElement("p");
h2.after(win);

reg.addEventListener("submit", function(event){
  event.preventDefault();

  let login = reg.login.value;
  let password = reg.psw.value;
  let password2 = reg.psw2.value;
  let errors  ="";

   if(login== "" ||password == "" || password2 == ""){
    alert("все поля должны быть заполнены")
  } 

    if(login== "" ||password == "" || password2 == ""){
      win.className = "red"
      win.innerHTML = 'все поля должны быть заполнены';
      return;
    }
    if(password!=password2){
      errors +="пароли не совпадают<br>"
    }
    if(password.length<6){
      errors+= "слишком короткий пароль";
    }
    if(errors == ""){
      win.className = "green";
      win.innerHTML = "регистрация прошла успешно"
      reg.login.value = "";
      reg.psw.value = "";
      reg.psw2.value ="";
    }else{
       win.className = 'red';
       win.innerHTML = errors;
    }
       
})  */


//дз = совпадение паролей , все поля заполнены , минимальная длинна, подсветить форму если не правильно и если правильно разными цветами , ошибки и успешную регистрацию выводим в алерты


// новый урок 23



/* let input = document.querySelector('#input')
let list = document.querySelector('#list')

input.addEventListener('keypress', function (event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li')
		let task = document.createElement('span')
		task.classList.add('task')
		task.textContent = input.value
		task.addEventListener('dblclick', function () {
			let text = this.textContent
			console.log(text)
			this.textContent = ''

			let edit = document.createElement('input')
			edit.value = text
			this.append(edit)

			let self = this
			edit.addEventListener('keypress', function (event) {
				if (event.key == 'Enter') {
					self.textContent = edit.value
				}
			})
		})

		li.append(task)


    let remove = document.createElement("span");
    remove.textContent = "удалить";
    remove.classList.add("remove");
remove.addEventListener("click", function(){
  remove.parentNode.remove();
})
		li.append(remove);


    let mark = document.createElement("span");
    mark.textContent = "выполнено";
    mark.classList.add("mark");
    mark.addEventListener("click", function(){
      mark.parentNode.classList.add("done");
       mark.addEventListener("dblclick", function(){
        mark.parentNode.classList.remove('done') 
      })
    })
    li.append(mark);

    list.append(li);
		input.value = '';
	}
}) */






// задание сделать страницу фиолетовой

/* let checkbox = document.querySelector("#purple")
checkbox.addEventListener("change", function(){
  document.body.style.background = checkbox.checked ? "mediumpurple" : "";
}) */






/* let btn = document.querySelector("#btn");
btn.addEventListener("click", ()=>{
  let checkbox = document.querySelectorAll("input[name='language']:checked");
  let selected = Array.from(checkbox).map(checkbox => checkbox.value)
  console.log(checkbox);
  

  alert ("выбрвнные языки : " + selected.join(", "));
  
}) */

//выберите 3 варианта

// let input = document.querySelectorAll("input[type='checkbox']");
// let form1 = document.forms.form1;

// console.log(input);
// for(let i = 0 ; i < input.length /* form1.length */; i++){
//   input[i].addEventListener("click", checkAll);
// }

// let numChecked;
// function checkAll(){
//   numChecked = 0;
//   for (let i = 0; i < input.length /* form1.length */; i++) {
// 		if (input[i].checked /* && input[i].type == "chckbox" */) {
// 			numChecked++
// 		}
// 	}
//   if(numChecked==3){
//     for (let i = 0; i < input.length /* form1.length */; i++) {
// 			if (!input[i].checked /* && input[i].type == 'chckbox' */) {
// 				input[i].disabled = true
// 			}
// 		}
//   }else{
//     for (let i = 0; i < input.length /* form1.length */; i++) {
// 			input[i].disabled = false
// 		}
//   }
// }





//урок 24



//задача на изменение фона с радиокнопками. решение 1

/* let choose = document.querySelector("input[type='button']");
choose.addEventListener("click", chooseColor);
 function chooseColor(){
  let f = document.form3;
  
  for(let i = 0 ; i<f.radio2.length; i++){
    if (f.radio2[i].checked){
      document.body.style.background = f.radio2[i].value
    } 
  }
} */

  //вариант решиения 2

/* function chooseColor() {
	let f = document.form3;
			document.body.style.background = f.radio2.value;
} */

      // решение без кнопки выбрать
/* let f = document.form3;
for(let i = 0 ; i<f.radio2.length; i++){
  f.radio2[i].addEventListener("change", chooseColor);
}

function chooseColor(event){
  document.body.style.background = event.target.value
} */



/* let languages = document.querySelector("#languages");
let languageOptions = ["python", "javascript", "c++", "java"];

languages.innerHTML =languageOptions.map(language =>`
  <div>
    <input type = "radio" name="language" value="${language}" id="${language}">
    <label for="${language}">${language}</label>
  </div>
  `).join(" ");

let radioButtons = document.querySelectorAll("input[name='language']");
for(let radioButton of radioButtons){
  radioButton.addEventListener("change", showSelectedLanguage);

}

function showSelectedLanguage(){
  if(this.checked){
    document.querySelector("#languageOutput").textContent = `вы выбрали: ${this.value}`;
  }
} */


/* let city = document.querySelector("#city");
city.addEventListener("change",setImg); */
/* 
celect свойство
select.options - типа массив . коллекция из подэлементов
select.value - значение выбранного в данный момент <option>
select.selectedIndex - индекс выбранного <jptions>
*/


// задача с городами


/* function setImg(){
let cities = city.selectedIndex;
let options = city.options
let code = options[cities].value
let div =document.querySelector("#image");
div.innerHTML = "<img src='img/"+ code+".png'>"
} */



/* let select = document.querySelector("select");
let output = document.querySelector("#output")

select.addEventListener("change", function(){
  let number = 0; 
for(let i = 0; i<select.options.length; i++){
  let option = select.options[i];
  if(option.selected){
number += Number(option.value);

  }
}


  output.textContent = number;
}) */


//задача выбора города по странам россия беларусь

/* let countries = document.querySelector("#countries");
let ruCities = document.querySelector("#ru")
let byCities = document.querySelector('#by')
countries.addEventListener("change", function(){
  document.querySelector(".cities.active").classList.remove("active");
  if(this.value == "ru"){
    ruCities.classList.add("active");
  }
  if(this.value == "by"){
    byCities.classList.add('active')
  }
}) */

/* let option = new Option("text", " value", true, true); */





/* let btnAdd = document.querySelector("#btnAdd");
let btnRemove = document.querySelector('#btnRemove');
let taskInput = document.querySelector("#task");
let taskList = document.querySelector('#taskList');

btnAdd.addEventListener("click", e =>{
  e.preventDefault();
  if(taskInput.value.trim() == ""){
    alert("введите название задачи");
    return;
  }

  let option = new Option(taskInput.value, taskInput.value);
  taskList.add(option, undefined);
  taskInput.value = '';
  taskList.focus();
})

btnRemove.addEventListener("click", e=>{
  e.preventDefault();
  let selectedTasks = [];
  for(let i = 0; i<taskList.options.length;i++){
    selectedTasks[i] = taskList.options[i].selected;
  }
  let index = taskList.options.length;
  while(index--){
    if(selectedTasks[index]){
      taskList.remove(index)
    }
  }
}) */


/* let input = document.querySelector("input");
input.addEventListener("change", function(){if(input.files.length > 0){
    let file = input.files[0];
    console.log("вы выбрали: ", file.name);
    if(file.type){
      alert("у него тип файла :")
    }
  }

}) */


/* let gas = document.querySelector('.gallon');
let petrol = document.querySelectorAll(".petrol");
let res ;
for(let i = 0; i< petrol.length; i++){
  petrol[i].addEventListener("click", function(){
    let gallons = gas.value;
    let amount = this.getAttribute("data-pet");
    console.log(gallons);
    
    res = gallons*amount;
    let sum = document.querySelector(".sum");
    sum.innerHTML = res
  })
} */





//задача с бегунком как на микшере сос звуком ============================================

/* document.getElementById("slider").addEventListener("input", function(){
  document.getElementById('slider-value').textContent = this.value;
}) */
//работает только инпут а чейнж не работает с рэйнж типом


//задача с таблицей. вписывать в ячейки текст====================================

/* let tds = document.querySelectorAll("td");

for(let i =0; i<tds.length;i++){
  tds[i].addEventListener('click', function func(){
  let input = document.createElement("input");

  input.value = this.innerHTML;
  this.innerHTML = "";
  this.append(input) ;

  let td = this;
  input.addEventListener("blur", function(){
    td.innerHTML = this.value;
    td.addEventListener("click",func);
  })
   
   this.removeEventListener("click",func);
  })
} */



  // задача с именем =================

/* let userInput = document.getElementById("userInput");
let name = document.getElementById("displayName")

userInput.addEventListener("input", function(){
  name.textContent = this.value || " гость";
}) */



//задача на заполнение формы ==================

 /*  let form = document.getElementById("myForm");
  form.addEventListener("submit", function(event){
    event.preventDefault();
    // let username = form.username.value;
    // let password = form.password.value;
    // console.log(username);
    let fornData = new FormData(form);
    console.log(fornData.get("username"));
    
  }) */



    //задача на заполнение формы и правильность ее написания==========================


 /* let form = document.getElementById('myForm')
 form.addEventListener('submit', function (event) {
  if(!form.checkValidity){
    event.preventDefault()
    alert("заполните все поля корректно")
  }
		
		
 }) */


/* 



методы для работы с регулярными выражениями

search - возвращает позицию, на которой регулярное выражение совпадает с вызывающейся строкой, или -1 ,если совпадений нет

match - получит все совпадения с рег.выр.

replace - поиск и замена

split - делит строку на массив и разбивает ее по указанной подстроке

test- выполняет поиск рег.выр. со строкой.возвращает true / false
*/
/* 
синтаксис записы рег.выр.

1) let regxp = new RegExp("шаблон", "флаги")
let regxp = /шаблон/флаги
*/


/* 
флаги

g - ищет все совпадения с шаблоном как глобальный поиск
i - регистрозависимый поиск
let regexp = /[я]/gi
s- включает \n
m - multiline работа с многострочным текстом
*/


/* let str = "я ищу совпадения в 2026 году"
let regexp = /ищу/;
document.writeln(str + "<br>");
document.writeln(str.search(regexp) + "<br>")

document.writeln(str + '<br>')
document.writeln(str.match(regexp) + '<br>')

document.writeln(str + '<br>')
document.writeln(regexp.test(str) + '<br>') */

/* let str = 'я ищу совпадения в 2026 году 34976'
let regexp = /[0-9]/gi */ //найдем все цыфры диапазона от 1 до 9


/* let str = 'я ищу совпадения в 2026 году 34976'
let regexp = /[А-ЯЁё]/gi//ищем все буквы включая регистр */ 


/* let str = 'я ищу совпадения в 2026 году 34976'
let regexp = /[A-Za-z]/g //ищем все буквы включая регистр без спецсимволов !!! */ 



/* let str = "я ищу совпадения в 2026 году 34976";
let regexp = /[A-Za-z]/g 
document.writeln(str + '<br>')
document.writeln(str.match(regexp) + '<br>')

function lowerCase(){
  return str.replace(/[А-Я]/g, u => u.toLowerCase());
}
console.log(lowerCase("Несколько Слов")); */


//let regexp = /[^0-9]/g// ^ элемент который делает отрицание, но если его поставить в конце то он будет находиться как обычный спецсимвол

//{3} кол-во символов идущих подряд
//{1,}от 1 до бесконечного кол-во повторений
//{2,5} от 2 до 5 повторений. нельзя ставить пробел , вернется null
/* let regexp = /[0-9]{3}/g
document.writeln(str + '<br>')
document.writeln(str.match(regexp) + '<br>') */

/* let html = `
<table>
  <tr>
    <td bgcolor = "#CCC">
    <img src="222.png" />
    </td>
    <td bgcolor = "#003399">
    <img src="af3.png" />
    </td>
    <td bgcolor = "#00ccdd">
    <img src="fff.png" />
    </td>
  </tr>
</table>
` */
/* let exp = /#([0-9a-f]{3}){1,2}/ig;
console.log(html.match(exp)); */

/* 
\d- любая цифра
\s- пробельный символ включая табуляцию и перевод строки 
\w - любая цифра буква(в английской раскладке) и символ подчеркивания
\b - граница слова
u - включает поддержку unicode

*/


//дз let = " это пример строки с несколькими пробелами "
//let reg = "шаблон"
//let result = ....;
//log(result) выводится не с побелами а с символом подчеркивания "_"
// 


 /* let str = 'я ищу совпадения в 2026 году 34976'
let regexp = /\w/g
document.writeln(str + '<br>')
document.writeln(str.match(regexp) + '<br>') */
 
//нашли номер телефона в строке

/* let string = "мой номер телефона: +7 (999) 123-45-67. номер моего друга: +7 (987) 654-32-10"
let ex = /\+\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g;
let phoneNumbers = string.match(ex)
console.log(phoneNumbers); */


/* 
\D - все цифры
\S - не пробел
\W - ысе кроме цифр и букв английского языка и символ "_"
*/

//=================================================
/* document.writeln("hello, Java!".match(/\bJava\b/) +"<br>") //Java
document.writeln('hello, Java!'.match(/\bJava!\b/) + '<br>')//null
document.writeln('hello, Java!'.match(/\bJava!/) + '<br>')//Java!
document.writeln('hello, JavaScript!'.match(/\bJava\b/) + '<br>')//null
document.writeln('hello, JavaScript!'.match(/\bJavaScript\b/) + '<br>')//JavaScript */

//=================================================
/* document.writeln("1 23 456 78".match(/\b\d\d\b /g) + "<br>")//23 78
document.writeln("1 23 456 78".match(/\b\d{2}\b /g) + "<br>")//23 78
document.writeln("1 23 456 78".match(/\d{2}/g) + "<br>")//23 45 78
document.writeln("12-,34,56".match(/\b\d{2}\b/g) + "<br>")//12 34 56

document.writeln("завтрак в 09:00 в комнате 123:456.".match(/\b\d\d:\d\d\b/g));//09:00 */

/* let regex = /\d{2}[-:]\d{2}/g;
document.writeln("завтрак в 09:00. ужин в 21-30".match(regex)); */

//================================================
/* let str = 'я ищу совпадения в 2026 году 34976'
let regexp = /[\p{Alpha}]/gu; */
//let regexp = /[\p{Alpha}\p{Nd}]/gu
//нашли еще и цифры
//let regexp = /[\p{L}]/gu
/* document.writeln(str + '<br>')
document.writeln(str.match(regexp) + '<br>') */
//нашли буквы и в английской и в русской раскладке

/* 
^- начало строки
$ - конец строки
*/

/* let html = "fgh909fgh";
let exp = /^\d{3}$/;
document.writeln(html.match(exp) + "<br>") */

// подсказка к дз на замену
//============================================
/* function copitalize(st){
  return st.replace(/^[а-я]/, u => u.toUpperCase());
}
console.log(copitalize("несколько слов")); */


//===============================================
/* колличествво повторений 
+ => от 1 до бесконечности {1,}
? =>от 0 до 1 {0,1}
* => от 0 до бесконечности {0,}

*/

//примеры

/* let st = "+7(903)-123-45-67";
document.writeln(st.match(/\d+/g) + "<br>");
//7,903,123,45,67 */

// let st1 = '100 10 1'
// document.writeln(st1.match(/\d0*/g) + '<br>')
//100,10,1

/* let st2 = '10, +23, -8, 5'
document.writeln(st2.match(/[+-]?\d+/g) + '<br>')
//10, +23, -8, 5

let st3 = '0 1 12.345 7890'
document.writeln(st3.match(/\d+\.\d+/g) + '<br>')
//12.345


//задание найти кол-во точек от 3
//=================================================
document.writeln("..привет!... Как дела?.....".match(/\.+{3,}/)); */


/* function extractLinks(text){
  //первый способ
	let regex = /https?:\/\/[^\s]+/g;
  //второй способ
  //let regex = /https?:\/\/[\w.]+/g
	return text.match(regex) || []
}

console.log(
	extractLinks("<a href='https://htmlbook.ru'> и <a href='https://webref.ru'>"),
) */


  //==================================================================================================
//проверка правильности написания email
/* function validateEmail(email){
  //вариант 1
//let regexp = /^[a-z0-9%_+.-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
//вариант 2
let regexp = /^[^\s]+@[^\s]+\.[^\s]{2,}$/i
return regexp.test(email);
}

console.log(validateEmail("user@example.com")); */

//многострояный текст
//================================================
/* let st = `
JavaScript
javascript
JAVASCRIPT
`;
console.log(st.match(/^\w+/gm)); */


/* let re = /CS.3/;
document.writeln("Стандарт CSS3".match(re))
document.writeln('сталь CS-3'.match(re))
document.writeln('CS 3'.match(re)) */


/* let st = "hello\nworld";
console.log(st);//перенос на другую строчку через \n
let exp = /hello.world/;
console.log(exp.test(st));//false
let exp = /hello.world/s;
console.log(exp.test(st));//true  */


//() сохраняющие и групирующие 
/* let regexp = /html|css|java(script)?/gi;
let st = "сначала появился язык java, затем HTML,потом JavaScript";
document.writeln(str.match(regexp)); */


/* let html = `
  <b> my text</b>
  <img src="222.jpg">
  <span>else</span>
  <img src="gfhf222.png">
  <img src="img.png">
  <img src="kkmk,.gif">
`

let ex = /\w+\.(jpg|jpeg|png|bmp|gif)/ig;
document.writeln(html.match(ex)); */


//проверка телефона

/* function validatephonenumber(phoneNumber){
  let phoneRegex = /^(\+7|8)?\d{10}$/;
  return phoneRegex.test(phoneNumber)
}

let phone="+79232821716";
//let phone = '89232821716';
//let phone = '9232821716';
if(validatephonenumber(phone)){
  console.log("номер телефона валиден");
  
}else{
  console.log('номер телефона не валиден')
} */


/* let regex = /java(Script)?|php|c(\+{2})?/gi;
let st = "Java,JavaScript,PHP,C,C++"
document.writeln(st.match(regex))
//Java, JavaScript,PHP,C,C++ */



//новое занятие
//=================================================

//ДОМАШНЕЕ ЗАДАНИЕ

 /* let st = "-1.5 0 2 -123.4"
let reg = /-?\d+(\.\d+)?/g; 
document.writeln(st.match(reg)); */

/* let st = "John Smith";
let re = /(\w+)\s(\w+)/;
document.writeln(st.replace(re,"$2 && $1"));
//Smith && Jonh

function add(str){
return str.replace(/([A-Z])/g," $1")
}
console.log(add("camelCase"));
console.log(add('helloWorldItIsMe'))
//рфзбили по словам */


// оживили цвет


/* let text = "red color: #F00 and green: #090";
let ex = /(#[a-f0-9]{3})/ig;//находим 16-ричный код
text = text.replace(ex,"<span style='color:$1'>$1</span>");
document.writeln("<p>"+text+"</p>") */


//сделали действующие ссылки


/* let text = 'I like google.com and yandex.ru'
let ex = /(([a-z0-9]{2,}\.)+[a-z]{2,4})/gi 
text = text.replace(ex, "<a href='https://$1'>$1</a>")
document.writeln('<p>' + text + '</p>') */



//форматирование номера телефона
//7 (xxx) xxx-xx-xx или 8 (xxx) xxx-xx-xx

/* function formatPhoneNumber(phone){
  let cleaned = phone.replace(/\D/g, "");
  //вернули только цифры, а остальное удалили
  return cleaned.replace(/(7|8)?(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5')

}

console.log(formatPhoneNumber("+7 999 1234567"));
console.log(formatPhoneNumber('8 999 1234567'))
console.log(formatPhoneNumber('999 1234567')) */



//добавление текста 

/* document.writeln("Люблю HTML".replace(/HTML/,"$& и JavaScript"));
//$& - сохраняет то что было . то есть заменяет Х на Х

let st = `Он сказал: "i'm at home".`
let re = /(["'])(.*?)\1/g;
document.writeln(st.match(re) + "<br>");
//"i'm at home"
//\1-номер первой скобки. обратная ссылка по номеру скобки */



//=================================================
//позитивная опережающая проверка
//=================================================

// x(?=y)
//X будет возвращаться если за ним следует Y

/* let st = "1 курс стоит 30 руб";
document.writeln(st.match(/\d+(?= руб)/))
//получает только число 30 */


//=================================================
//негативная опережающая проверка
//=================================================

// x(?!y)
//X будет возвращаться если за ним не следует Y

 /* let st = "1 курс стоит 30 руб";
document.writeln(st.match(/\d+(?! руб)/))
//получает 1,3 */

//=================================================
//позитивная ретроспективная
//=================================================

//(?<=Y)X
//X если следует за Y

/* let st = '1 курс стоит $30'
document.writeln(st.match(/(?<=$)\d+/) + "<br>")
//получаем 30 . то что следует за Y(за $) */

//=================================================
//негативная ретроспективная
//=================================================


//(?<!Y)X
//X если  не следует за Y

/* let st = '1 курс стоит $30'
document.writeln(st.match(/(?<!$)\d+/) + "<br>")
//получаем 1 . то что  не следует за Y(за $) */

//=================================================
/* document.writeln("Hello, Error".match(/^(?=.*[eE][rR][rR][oO][rR]).{1,50}$/)) */

//.* - любое кол-во символов перед Error
//(?=.*.......) - чистый шаблон позволяющий делать несколь проверок к строке обновременно



//функция проверки пароля


/* function validPassword(psw){
let pswEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/
return pswEx.test(psw)
}

console.log(validPassword("QWer23!#")); */


//js8 5.pdf задание

/* let but = document.querySelector("#but")
but.addEventListener("click", smsUser);

function smsUser(){
  let name = document.querySelector('#your_name')
  //получаем имя
  let text = document.querySelector("#text").value;
  //получаем текст
  
	let regExpBBMail = /(.?*)<(b|u|i|s|h1|p)>(.?*)<(\/\2)>(.?*)/gi
	text = text.replace(regExpBBMail, "$1 <span style='color:red'>&lt;$2&gt;</span>$3<span style='color:red'>&lt;$4&gt;</span>$5")

 document.writeln(
	`
  <fieldset>
      <legend>${name}</legend>
      <div>${text}</div>
  </fieldset>
  `); 
 let form = document.querySelector("form");
form.insertAdjacentHTML(
	'afterend',
	`<fieldset>
  <legend>${name}</legend>
      <div>${text}</div>
  </fieldset>`
);
  
} */



// let but = document.querySelector("#but");
// but.addEventListener("click", smsUser);
 
// function smsUser(){
//     let name = document.querySelector("#your_name").value;
//     let text = document.querySelector("#text").value;
//     let regExpBBMail = /(.*?)<(b|u|i|s|h1|p)>(.*?)<(\/\2)>(.*?)/ig;
//     text = text.replace(regExpBBMail, "$1 <span style='color:red'>&lt;$2&gt;</span>$3<span style='color:red'>&lt;$4&gt;</span> $5");
//     //
//     console.log(text);
 
//     document.writeln(`
//         <fieldset>
//             <legend>${name}</legend>
//             <div>${text}</div>
//         </fieldset>    
//     `);
 
//     // let form = document.querySelector("form");
//     // form.insertAdjacentHTML("afterend", `<fieldset>
//     //          <legend><b>${name}</b></legend>
//     //          <div>${text}</div>
//     //      </fieldset>  `);
   
// }


//=================================================
//новый урок
//=================================================

//система контраля версий- это система , сохраняющая изменения в одном или нескольких файлах

//github

//локальный репозиторий не доступен из интернета 

//git init -инициализация репозитория
//git status


console.log("вносим изменения");















