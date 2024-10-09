function add(){
    let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum = parseFloat(document.getElementById("num2").value);
    let resul = firstnum + secondnum
    document.getElementById("result").innerHTML = resul;
}
function subtract(){
    let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum = parseFloat(document.getElementById("num2").value);
    let resul = firstnum - secondnum
    document.getElementById("result").innerHTML = resul;
}
function mutiply(){
    let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum = parseFloat(document.getElementById("num2").value);
    let resul = firstnum * secondnum
    document.getElementById("result").innerHTML = resul;
}
function Divided(){
    let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum = parseFloat(document.getElementById("num2").value);
    let resul = firstnum / secondnum
    document.getElementById("result").innerHTML = resul;
}
function power(){
    let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum = parseFloat(document.getElementById("num2").value);
    let resul = Math.pow(firstnum,secondnum)
    document.getElementById("result").innerHTML = resul;
}
function sqauroot(){
    let firstnum = parseFloat(document.getElementById("num1").value);
    let secondnum = parseFloat(document.getElementById("num2").value);
    let resul = Math.sqrt(firstnum)
    document.getElementById("result").innerHTML = resul;
}
