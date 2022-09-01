class progressRing{

    constructor(class_name) {
        this.circle = document.querySelector(`.${class_name}`);
        this.radius = this.circle.r.baseVal.value;
        this.circle_length = 2 * Math.PI * this.radius;
        this.progress = 100;
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
            this.circle.style.opacity = "100";
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
            this.circle.style.opacity = "100";
        }
    }

}

let circle = new progressRing("progress_ring_circle");

const percent_input = document.querySelector('.value_block_percent');
circle.set_progress(percent_input.value);
percent_input.addEventListener('keyup', function (){
    if ((percent_input.value < 100) && (percent_input.value > 0)){
        circle.set_progress(percent_input.value);
    } else if (percent_input.value >= 100){
        circle.set_progress(100);
    } else if (percent_input.value <= 0){
        circle.set_progress(0);
    }
})

const animation_button = document.querySelector('.animation_button');

if (animation_button.checked === true){
    circle.animation_turnon();
}

animation_button.addEventListener('click', function (){
    if (animation_button.checked === true){
        circle.animation_turnon();
    } else {
        circle.animation_turnoff();
    }
})


const hide_button = document.querySelector('.hide_button');

if (hide_button.checked === true){
    animation_button.disabled = true;
    document.querySelector(".progress_ring").hidden = true;
}

hide_button.addEventListener('click', function (){
    if (hide_button.checked === true){
        animation_button.disabled = true;
        percent_input.disabled = true;

        animation_button.checked = false;
        circle.animation_turnoff();

        animation_button.opacity = "20";
        percent_input.opacity = "20";

        circle.hide();

    } else {
        animation_button.disabled = false;
        percent_input.disabled = false;

        animation_button.opacity = "100";
        percent_input.opacity = "100";

        circle.show();

    }
})


