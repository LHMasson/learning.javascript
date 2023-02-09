let num1 = window.prompt("Digite um númer: ");

document.getElementById('1').innerHTML = num1;
document.getElementById('raiz').innerHTML = (num1 ** 0.5).toFixed(2);
document.getElementById("inteiro").innerHTML = IsInteger(num1);