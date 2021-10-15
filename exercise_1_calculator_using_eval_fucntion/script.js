const userInput = document.getElementById("operationsField");
console.log(userInput);
const giveResult = document.getElementById("btnResult");
console.log(giveResult);


giveResult.addEventListener("click" , () => {
    let result = eval(userInput.value);
  
    const project = document.createElement("h3");
    project.innerText =  "result : " + result;
    document.querySelector("body").appendChild(project);

});