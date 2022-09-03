/*
    Класс progressRing позволяет создать кольцо прогресса.
 */

export default class progressRing{

    /*
        Конструктор принимает id тега <circle> и получает объект со страницы.
        Также в конструкторе вычисляется радиус и длина окружности.
        Задается начальный прогресс и цвет шкалы.
     */
    constructor(id) {
        this.circle = document.querySelector(`#${id}`);
        this.radius = this.circle.r.baseVal.value;
        this.circle_length = 2 * Math.PI * this.radius;
        this.progress = 0;
        this.circle.style.stroke = "#0B5DFF";
    }


    /*
        Методы, позволяющие получить основные данные объекта класса progressRing.
     */
    print_radius(){
        console.log(this.radius);
    }

    print_circle_length(){
        console.log(this.circle_length);
    }

    print_progress(){
        console.log(this.progress);
    }

    print_color(){
        console.log(this.circle.style.stroke);
    }

    /*
        Метод для редактирования значения прогресса и изменения его отображения.
     */
    set_progress(progress){
        this.progress = progress;


        /*
           Если прогресс находится в пределах 1-100 и более, задаётся необходимая длина отрезков.
         */
        if ((progress < 100) && (progress > 0)){

            const fill = (this.progress/100) * this.circle_length;
            const empty = this.circle_length - fill;

            this.circle.style.strokeDasharray = `${fill} ${empty}`;
            this.circle.style.opacity = "1";

        } else if (progress >= 100){

            this.circle.style.strokeDasharray = `${this.circle_length} 0`;
            this.circle.style.opacity = "1";

        }

        /*
           Если прогресс ниже нуля, то непрозрачность кольца становится равной нулю.
           Такой подход позволяет избежать маленькую полоску прогресса (равную 1%), которая возникает из-за деления на ноль.
         */
        else if (progress <= 0){

            this.circle.style.opacity = "0";

        }

    }

    /*
       Метод, позволяющий установить период анимации (в секундах).
       Выполнена проверка на правильность ввода числа.
     */
    set_rotate_duration(duration){
        if ((/\d/) && (duration > 0)) {
            this.circle.style.animationDuration = `${duration}s`;
        }
    }

    /*
       Метод, позволяющий установить цвет шкалы прогресса в формате HEX (#CD5C5C).
       Выполнена проверка на ввод корректного формата.
     */
    set_color(color){
        if ((!(/[^\da-fA-F]/).test(color)) && (color.length === 6)) {
            this.circle.style.stroke = `#${color}`;
        }
    }

    /*
       Метод, включающий анимацию.
     */
    animation_turnon(){
        this.circle.style.animationPlayState = `running`;
    }

    /*
       Метод, выключающий анимацию.
     */
    animation_turnoff(){
        this.circle.style.animationPlayState = `paused`;
    }

    /*
       Метод, скрывающий кольцо прогресса.
     */
    hide(){
        this.circle.style.opacity = "0";
    }

    /*
       Метод, возвращающий видимость кольца прогресса.
     */
    show(){
        if (this.progress > 0) {
            this.circle.style.opacity = "1";
        }
    }

}
