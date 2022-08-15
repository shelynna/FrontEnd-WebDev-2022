const show = document.querySelector('.counter-preview');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');

let counter = 0
increase.addEventListener("click", () => {
    
    counter = counter + 1;
    show.innerHTML = counter;
    console.log();
})

reset.addEventListener("click", () => {
    counter = 0;
    show.innerHTML = counter
})

decrease.addEventListener("click", () => {
    counter = counter - 1;
    show.innerHTML = counter;
})



