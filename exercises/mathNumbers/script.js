let num1 = window.prompt("Digite um número: ");

document.getElementById('1').innerHTML = num1;
document.getElementById('2').innerHTML = num1;
document.getElementById('raiz').innerHTML = (num1 ** 0.5).toFixed(2);
document.getElementById("inteiro").innerHTML = Number.isInteger(num1);