import progressRing from './progressRing.js';

/*
   Создаём объекта класса для нужно кольца.
 */
const circle = new progressRing("progress_ring_circle_1");



/*
   Получаем input со значением прогресса.
   Задаём начальное значение прогресса кольцу.
   Добавляем обработчик событий на изменение значения для моментольного отображения нового прогресса.
 */
const percent_input = document.querySelector('.value_block_percent');

circle.set_progress(percent_input.value);

percent_input.addEventListener('keyup', function (){
    circle.set_progress(percent_input.value);
})


/*
   Получаем input (checkbox) с состоянием анимации.
   Включаем анимацю сразу, если checkbox отмечен.
   Добавляем обработчик событий на изменение состояния checkbox.
 */
const animation_button = document.querySelector('.animation_button');

if (animation_button.checked){
    circle.animation_turnon();
}

animation_button.addEventListener('click', function (){
    if (animation_button.checked){
        circle.animation_turnon();
    } else {
        circle.animation_turnoff();
    }
})


/*
   Получаем input (checkbox) с состоянием отображения.
   Выключаем отображение сразу, если checkbox отмечен.
   Добавляем обработчик событий на изменение состояния checkbox.

   Вместе с отключением отображения также:
    Перестают работать остальные кнопки.
    Видимость кнопок снижается.
    Анимация кольца останавливается.
 */
const hide_button = document.querySelector('.hide_button');

if (hide_button.checked){
    animation_button.disabled = true;
    document.querySelector(".progress_ring").hidden = true;
}

hide_button.addEventListener('click', function (){
    if (hide_button.checked){
        animation_button.disabled = true;
        percent_input.disabled = true;

        animation_button.checked = false;
        circle.animation_turnoff();

        document.querySelector(".animation_block").style.opacity = "0.2";
        document.querySelector(".value_block").style.opacity = "0.2";

        circle.hide();

    } else {
        animation_button.disabled = false;
        percent_input.disabled = false;

        document.querySelector(".animation_block").style.opacity = "1";
        document.querySelector(".value_block").style.opacity = "1";

        circle.show();

    }
})


