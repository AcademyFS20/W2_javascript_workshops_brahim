const num1 = document.getElementById('1stNum');
const num2 = document.getElementById('2ndNum');
console.log(num1)
// var num1 = 5;
// var num2 = 10;

function add() {
    const project = document.createElement("h3");
    project.innerText =  "result : " + num1.value + num2.value;
    document.querySelector("body").appendChild(project);


}

function sub() {
    const project = document.createElement("h3");
    project.innerText =  "result : " + (num1.value - num2.value);
    document.querySelector("body").appendChild(project);}

function mulitply() {
    const project = document.createElement("h3");
    project.innerText =  "result : " + num1.value * num2.value;
    document.querySelector("body").appendChild(project);}

function divid() {
    const project = document.createElement("h3");
    project.innerText =  "result : " + num1.value / num2.value;
    document.querySelector("body").appendChild(project);}

function mod() {
    const project = document.createElement("h3");
    project.innerText =  "result : " + num1.value % num2.value;
    document.querySelector("body").appendChild(project);}