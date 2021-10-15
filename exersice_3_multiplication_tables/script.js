const userInput = document.getElementById('userInput');
console.log(userInput);
const giveResult = document.getElementById("giveResult");
console.log(giveResult);
const multiplyTable = document.getElementById("multiplyTable");
console.log(multiplyTable);


giveResult.addEventListener ("click", ()=>{
    const nbr=userInput.value;
    const ul=document.createElement("ol");

    for(let i= 0; i<=9; i++ ){
        let res
        res= nbr*1

        var li = document.createElement("li")
        li.innerText = `${nbr} * ${i} = ${res}`
        ul.appendChild(li);
    }

    multiplyTable.appendChild(ul);
});

