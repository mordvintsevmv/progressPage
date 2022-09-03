import progressRing from './progressRing.js';

/*
   Создаём объекта класса для нужного кольца.
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
   Получаем input со значением цвета.
   Задаём начальный цвет кольцу.
   Добавляем обработчик событий на изменение значения.
 */
const color_input = document.querySelector('.color_block_value');

circle.set_color(color_input.value);

color_input.addEventListener('keyup', function (){
    if (color_input.value.length === 6){
        circle.set_color(color_input.value);
    }
})



/*
   Получаем input со значением периода анимации.
   Задаём начальное значение периода.
   Добавляем обработчик событий на изменение значения.
 */

const duration_input = document.querySelector('.duration_block_value');

duration_input.addEventListener('keyup', function (){
    circle.set_rotate_duration(duration_input.value);
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
        duration_input.disabled = true;
        color_input.disabled = true;

        animation_button.checked = false;
        circle.animation_turnoff();

        document.querySelector(".animation_block").style.opacity = "0.2";
        document.querySelector(".value_block").style.opacity = "0.2";
        document.querySelector(".color_block").style.opacity = "0.2";
        document.querySelector(".duration_block").style.opacity = "0.2";


        circle.hide();

    } else {
        animation_button.disabled = false;
        percent_input.disabled = false;
        duration_input.disabled = false;
        color_input.disabled = false;


        document.querySelector(".animation_block").style.opacity = "1";
        document.querySelector(".value_block").style.opacity = "1";
        document.querySelector(".color_block").style.opacity = "1";
        document.querySelector(".duration_block").style.opacity = "1";


        circle.show();

    }

})


/*
   Кнопка для добавления/скрытия функций.
 */

const features_button = document.querySelector('.features');

features_button.addEventListener('click', function (){
    if (document.querySelector(".color_block").hidden){
        document.querySelector(".color_block").hidden = false;
        document.querySelector(".duration_block").hidden = false;
        features_button.innerHTML = "- features";
        features_button.style.color = "#F91155";

    } else{
        document.querySelector(".color_block").hidden = true;
        document.querySelector(".duration_block").hidden = true;
        features_button.innerHTML = "+ features";
        features_button.style.color = "#06CA99";

    }
})
