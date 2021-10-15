//1s try the result was Nan

// const startTheapp = document.getElementById('startapp');

// function Addition(){
//     let nbr1 = prompt("give number1", "0");
//     let nbr2 = prompt("give number2", "0");
//     let value1 = nbr1.value
//     let value2 = nbr2.value
    
//     let result = value1+value2;
//     alert(result);

// }

// startTheapp.addEventListener("click", ()=>{
//  Addition();


// });


//2nd try

// const startTheapp = document.getElementById('startapp');

// function Addition(){
//     let nbr1 = prompt("give number1", "0");
//     let nbr2 = prompt("give number2", "0");
//     let value1 = parseInt(nbr1);
//     let value2 = parseInt(nbr2);
   
    
//     let result = value1+value2;
//     alert(result);

// }

// startTheapp.addEventListener("click", ()=>{
//  Addition();


// });


//  adding more features multiply,substract and divid
const startTheapp = document.getElementById('startapp');

function program(){
    let nbr1 = prompt("give number1", "0");
    let nbr2 = prompt("give number2", "0");
    let value1 = parseInt(nbr1);
    let value2 = parseInt(nbr2);
    const typeOperation = prompt("type the symbol of an operation + - * /", "")

    
    if  (typeOperation == "+"){ 
      
    let result = value1+value2;
    alert(result);
}
    else if (typeOperation == "-")  {
        let result = value1-value2
        alert(result);
    }

    else if (typeOperation == "*")  {
        let result = value1*value2
        alert(result);
    }


    else if (typeOperation == "/")  {
        let result = value1/value2
        alert(result);
    }

    else {
        alert("you should choose one operation by typing it's symbol + - * /")
    }

}

startTheapp.addEventListener("click", ()=>{
 program();
});