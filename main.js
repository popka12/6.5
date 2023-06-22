let inputIn = document.querySelector('.input-in');
let inputIn1 = document.querySelector('.input-in1');
let out = document.querySelector('.input-out');
let button = document.querySelector('button');
button.onclick = () => {
    let a = +inputIn.value;
    let b = +inputIn1.value;
    let sum = a+b;
    out.value = sum;
    window.alert(sum);
}