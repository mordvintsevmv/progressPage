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
        const fill = (progress/100) * this.circle_length;
        const empty = this.circle_length - fill;

        this.circle.style.strokeDasharray = `${fill} ${empty}`;

    }

}

let circle = new progressRing("progress_ring_circle");

const input = document.querySelector('.value_button_percent');

input.addEventListener('change', function (){
    circle.set_progress(input.value);
})

