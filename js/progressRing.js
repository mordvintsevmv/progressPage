export default class progressRing{

    constructor(id) {
        this.circle = document.querySelector(`#${id}`);
        this.radius = this.circle.r.baseVal.value;
        this.circle_length = 2 * Math.PI * this.radius;
        this.progress = 0;
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

    set_progress(progress){
        this.progress = progress;
        if (this.progress === 0){
            this.circle.style.opacity = "0";
        } else{
            const fill = (this.progress/100) * this.circle_length;
            const empty = this.circle_length - fill;

            this.circle.style.strokeDasharray = `${fill} ${empty}`;
            this.circle.style.opacity = "1";
        }

    }

    set_rotate_duration(duration){
        this.circle.style.animationDuration = `${duration}s`;
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
        if (this.progress !== 0) {
            this.circle.style.opacity = "1";
        }
    }

}
