let num1 = window.prompt("Digite um número: ");
let num2 = parseInt(num1);
let num3 = parseFloat(num1);

document.getElementById('1').innerHTML = num1;
document.getElementById('2').innerHTML = num1;
document.getElementById('raiz').innerHTML = (num1 ** 0.5).toFixed(2);
document.getElementById("inteiro").innerHTML = Number.isInteger(2);
document.getElementById("nan").innerHTML = Number.isNaN(2);
document.getElementById("baixo").innerHTML = Math.floor(num3);
document.getElementById("cima").innerHTML = Math.ceil(num3);
document.getElementById("decimal").innerHTML = num3.toFixed(2);