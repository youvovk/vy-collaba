    let form = document.querySelector('form');
    let textarea = document.querySelector('#message');
    let list = document.querySelector('#tweets-list');
    let counter = document.querySelector('#counter');
    let button = document.querySelector('#button2');
            
    textarea.addEventListener("input", function () {
      updateCounter(textarea.value.length); /*счетчик символов*/
    })
    
    textarea.addEventListener("input", function () {
      disabledButton(textarea.value.length); /*вызов функции разблокировки кнопки*/
    }) 
    function updatePostsInLS (posts) {
      window.localStorage.setItem('posts', JSON.stringify(posts)); /*сохранение постов при перезагрузке*/
    }
    let posts = JSON.parse(window.localStorage.getItem('posts')) || [];  /*возвращает сохраненные посты/создает массив для постов*/
    render();

    form.addEventListener('submit', (event) => {
      event.preventDefault(); /*блокирует перезагрузку страницы*/ 
      console.log(event) 
      let d = new Date();    //данные для даты
      let currDate = d.getDate();
      let currMonth = d.getMonth() + 1;
      let currYear = d.getFullYear();
      let currHours = d.getHours();
      let currMinutes = d.getMinutes();
      let a = ( currHours + ":" + currMinutes + " " + currDate + "-" + currMonth + "-" + currYear); //конец данных для даты

      let number = getRandomInt(1,10); /*вызов функции рандомных чисел*/
      let message = textarea.value;
      randomColorMassage(number); /*вызов функции подбора цвета под рандомное число*/
      posts.push( { 
        message: message,
        ts: a,
        color: color2
    })          /* пушит текст/дату/цвет в объект массива постов*/

      updatePostsInLS(posts); /*вызов функции сохранения постов при перезагрузке*/
      form.reset();     /*обновляет поле ввода*/
      updateCounter(0);   /*обновляет счетчик*/
      render();
      disabledButton(textarea.value.length);           /*обновляет форматирование массива постов*/
    })

   
     function disabledButton(value2) {  /*функция для блокировки/разблокировки кпнопки*/
      
      if ( value2 == 0 ) {                           //блокирует кнопку
        button.setAttribute('Disabled', 'disabled')
    }
      else if ( value2 >= 270 ) {            //блокирует кнопку и делает красным счетчик
             
        button.setAttribute('Disabled', 'disable')
        counter.setAttribute('Style', 'color:#ff0000')
    }
      else if ( value2 < 270 ) {             //разблокирует кнопку и убирает цвет счетчика
  
        button.removeAttribute('Disabled')
        counter.removeAttribute('Style')
    }   
      else if ( value2 !== 0 ) {             //разблокирует кнопку
        button.removeAttribute('Disabled')
    }
         }

    function render() {        /*форматирование объекта в массиве постов + подтягивание в сообщение цвет и дату*/
      let html = posts
        .map(object => '<li style="color: ' + object.color + ';">' + object.message + '. ' + object.ts + '</li>')   //включил дату в сообщение
        .join('')
      list.innerHTML = html;
    }

    function updateCounter(value) {
      counter.textContent = value; /*вставляет количество символов в html*/
    } 

    function randomColorMassage (colorNumber) {    //функция рандомных цветов для сообщений
      if (colorNumber == 2 ) {
         color2 = 'red';
      } 
      else if (colorNumber == 3) {
        color2 = 'blue';
      } 
      else if (colorNumber == 4) {
        color2 = 'aqua';
      } 
      else if (colorNumber == 5) {
        color2 = 'green';
      }
      else if (colorNumber == 6) {
        color2 = 'gold';
      }
      else if (colorNumber == 7) {
        color2 = 'pink';
      } 
      else if (colorNumber == 8) {
        color2 = 'orangered';
      }
      else if (colorNumber == 9) {
        color2 = 'purple';
      }
    }
    function getRandomInt(min, max) {      //функция рандомных чисел для цветов
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } 