const num1 = document.getElementById('1stNum');
const num2 = document.getElementById('2ndNum');
console.log(num1.value)
const btnAdd = document.getElementById('Addition');
console.log(btnAdd)

const addnumber (x,y) =>{
    return (x,y);
}

const substract

btnAdd.addEventListener("click" , () => {
    let value1 = Number(num1.value);
    let value2 = Number(num2.value);
    let result = value1 + value2;
  
    const project = document.createElement("h3");
    project.innerText =  "result : " + result;
    document.querySelector("body").appendChild(project);

});



function show(element,result)