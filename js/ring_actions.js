import progressRing from './progressRing.js';

const circle = new progressRing("progress_ring_circle");
console.log(circle)

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


