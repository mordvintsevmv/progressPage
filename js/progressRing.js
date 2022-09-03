export default class progressRing{

    constructor(id) {
        this.circle = document.querySelector(`#${id}`);
        this.radius = this.circle.r.baseVal.value;
        this.circle_length = 2 * Math.PI * this.radius;
        this.progress = 0;
        this.circle.style.stroke = "#0B5DFF";
    }

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

    set_progress(progress){
        this.progress = progress;

        if ((progress < 100) && (progress > 0)){

            const fill = (this.progress/100) * this.circle_length;
            const empty = this.circle_length - fill;

            this.circle.style.strokeDasharray = `${fill} ${empty}`;
            this.circle.style.opacity = "1";

        } else if (progress >= 100){

            this.circle.style.strokeDasharray = `${this.circle_length} 0`;
            this.circle.style.opacity = "1";

        } else if (progress <= 0){

            this.circle.style.opacity = "0";

        }

    }

    set_rotate_duration(duration){
        if ((/\d/) && (duration > 0)) {
            this.circle.style.animationDuration = `${duration}s`;
        }
    }

    set_color(color){
        if ((!(/[^\da-fA-F]/).test(color)) && (color.length === 6)) {
            this.circle.style.stroke = `#${color}`;
        }
    }

    animation_turnon(){
        this.circle.style.animationPlayState = `running`;
    }

    animation_turnoff(){
        this.circle.style.animationPlayState = `paused`;
    }

    hide(){
        this.circle.style.opacity = "0";
    }

    show(){
        if (this.progress > 0) {
            this.circle.style.opacity = "1";
        }
    }

}
