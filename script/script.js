/*
Cоздайте страницу используя компоненты и стили Bootstrap по макету Figma.

В макете есть две страницы: основное задание и задание hard level с более 
сложным слайдером.
При выборе задания повышенной сложности вы должны учесть, что располагать 
элементы на слайдере тоже нужно через bootstrap. Своими стилями в слайдере 
можно сделать только стрелки и фоновые картинки (задать через background).

Требования к выполнению:
Сайт должен быть сверстан на основе классов и компонентов bootstrap. 
Использовать собственные стили допускается только для стрелок у слайдера 
и аккордеона.
Сайт должен быть адаптивным и корректно отображаться на любой ширине 
вплоть до 320px.
Весь основной контент должен находится в контейнере container.
Для основных блоков с товарами надо обязательно использовать 
колонки col-... . Для инпутов также используются колонки.

В случае затруднений постарайтесь максимально изучить документацию Bootstrap.
 Все необходимые классы и компоненты для выполнения домашнего задания 
 имеются во вкладках Layout, Utilities и Components на странице 
 Documentation сайта getbootstrap.com. Для корректной работы меню в компоненте
  navbar на адаптиве потребуется подключение js файлов библиотеки Bootstrap,
   без них меню открываться не будет.
Допускаются незначительные отличия от макета, так как в приоритете 
стилизация bootstrap и макет создавался вручную на основе стилей bootstrap.

Слайдер нужно реализовать при помощи slick.
Accordeon должен быть выполнен с помощью jQueryUI. Обратите внимание на 
тексты табов и картинки для слайдера, которые также надо использовать 
на странице. Добавить в элементы Accordeon любой текст, чтобы элементы 
не открывались пустые.
Для правильного визуального оформления вам необходимо сначала создать 
работающие элементы в соответствии с документацией библиотек, 
а затем вносить изменения в стилях, добавляя классы bootstrap. 
Если соответствующих классов в bootstrap нет 
(к примеру, для стрелок в аккордеоне и слайдере), 
то перезапишите нужные стили (вам понадобится в своем файле изменять под себя 
    стили, прописанные в библиотеке).

Для формы внизу страницы сделать валидацию на jQuery:
- все поля должны быть заполнены
- в поле индекс можно вводить только цифры
- индекс должен содержать 6 символов
Если какое-то из условий не соблюдается - вывести alert с соответствующей ошибкой.
Если все условия соблюдены, то нужно скрыть форму и показать вместо 
нее блок с текстом «Спасибо за заказ!»

Примените на сайте библиотеку wow.js для красивого появления с 
анимацией главного блока, карточек товаров, блока с формой. 
Кроме этого, используйте библиотеку для просмотра изображений в 
полный экран так, чтобы при нажатии на изображение в карточке товара, 
оно увеличивалось на весь экран. При нажатии на кнопку Отправить 
форма должна скрываться, а вместо нее появляться блок с текстом 
"Спасибо за заказ. Мы свяжемся с вами в ближайшее время!". 
Выберите один или несколько эффектов библиотеки hover.css и примените 
их на все кнопки на странице.

*/

// wow js что бы срабатывала анимация последовательно при проктутке к болокам
new WOW({
  animateClass: 'animate__animated',
}).init();


//slick carousel 

$(document).ready(function () {
    $('.carousel-slick').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<a class="slick-prev"></a>',
        nextArrow: '<a class="slick-next"></a>',
    });
});

//accordion jQuery UI

$(function () {
    $("#accordion").accordion({
        heightStyle: "content",
    });
});

// magnificPopup
// https://dimsemenov.com/plugins/magnific-popup/documentation.html
$('.popup-img').magnificPopup({
  type: 'image',
  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it
    duration: 500, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function
  }
});

// валидация форм

// const order = document.getElementsByClassName('order')[0];
// const newBlockText = document.createElement('div');
// newBlockText.className = 'text text-center d-none';
// newBlockText.innerHTML = '<h2>Спасибо за заказ!</h2>';
// order.appendChild(newBlockText);

const newBlock = $('<div></div>').addClass('text text-center d-none').html('<h2>Спасибо за заказ!</h2>').appendTo('.order');
//новый div с помощью $('<div></div>').
//метод appendTo('.order') div в конец элемента с классом "order".


$(document).ready(function () {
    $("form").submit(function (event) {
      event.preventDefault();
      let isFormValid = true; // Флаг для валидности формы
  
      $("input:not(:first)").each(function (index, element) {
        let value = $(element).val();
  
        // Проверка на пустые поля
        if (value === '') {
          isFormValid = false;
          alert("Пожалуйста, заполните все поля");
          return false; // Прерываем цикл, если найдено пустое поле
        }
      });
  
      let inputZipValue = $("#inputZip").val(); // Получаем значение поля inputZip
  
      // Проверка поля индекс на количество символов и тип данных
      if (inputZipValue.length !== 6 || isNaN(inputZipValue)) {
        isFormValid = false;
        alert("Поле индекса должно содержать 6 цифр, а вы ввели " + inputZipValue.length);
      }
  
      if (isFormValid) {
        $("form").hide();
        $('h2:eq(2)').empty();
        newBlock.removeClass('d-none');
      }
      
    });
  });
  





$('#inputZip').keydown((e) => {
    var keyCode = e.which;
    if (keyCode < 48 || keyCode > 57) {
        if (keyCode !== 8) { // возможность удалить через backspace
            e.preventDefault();
        }
        
    }

})



// $(document).ready(function () {
//     $("form").submit(function (event) {
//       event.preventDefault();
//       let isFormValid = true; // Флаг для валидности формы
//       let inputZipValue = $("#inputZip").val(); // Получаем значение поля inputZip
  
//       $(".form-control:not(:first)").each(function (index, element) {
//         let value = $(element).val();
//         console.log(index, element, value);
  
//         // Проверка на пустые поля
//         if (value === '') {
//           isFormValid = false;
//           return false; // Прерываем цикл, если найдено пустое поле
//         }
//       });
  
//       // Дополнительная проверка поля inputZip
//       if (inputZipValue.length !== 6 || isNaN(inputZipValue)) {
//         isFormValid = false;
//       }
  
//       if (!isFormValid) {
//         alert("Пожалуйста, заполните все поля и убедитесь, что поле индекса содержит ровно шесть цифр.");
//         return;
//       }
  
    //   $("form").hide();
    //   $('h2:eq(2)').empty();
    //   newBlock.removeClass('d-none');
//     });
//   });

