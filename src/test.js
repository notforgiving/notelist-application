function auto_play() {
  $(".t923 .t-slds__arrow-right").click();//функция autoplay осуществляет клик по элементу с классом ".t923 .t-slds__arrow-right"
}

var timemode = 1200;//время задержки 1,2 секунды
var autoPlay = setInterval(auto_play, timemode);//setInterval запускает функцию autoplay каждую 1.2 секунды

$(document).ready(function () {//если документ полностью готов (загружено абсолютно все)
  $(".t923 .t-slds").hover(//при наведении на класс ".t923 .t-slds" выполняются следующие функции
    function () {
      clearInterval(autoPlay);//происходит прекращение старой функции autoplay
    },
    function () {
      autoPlay = setInterval(auto_play, timemode);//запуск новой функции autoplay
    }
  );
});
document.addEventListener("DOMContentLoaded", function () {//Когда полностью загружены все элементы страницы выполнить следующую часть 
  document.addEventListener("visibilitychange", function () {//срабатывает каждый раз, когда происходит переключение вкладки браузера
    if (document.hidden) {//если документ скрыт
      clearInterval(autoPlay);//отключить автоплей
    } else {
      autoPlay = setInterval(auto_play, timemode);//запустить автоплей с интервалом 1,2 секунды
    }
  });
});
