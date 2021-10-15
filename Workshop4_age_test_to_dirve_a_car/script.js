// //  if else

// const startTheapp = document.getElementById('startapp');

// function program(){
//     let age = prompt("how older are you?", "0");
//     let value1 = parseInt(age);
    

    
//     if  (age < 18){ 
//         alert("sorry you can't drive the car");
// }
    
//     else {
//         alert("you can drive the car")
//     }

// }

// startTheapp.addEventListener("click", ()=>{
//  program();
// });

//////////////////////////////////////////////////

//  switch

const startTheapp = document.getElementById('startapp');

function program(){
    let age = prompt("how older are you?", "0");
    let value = parseInt(age);
        
    switch (true){ 
    case (value < 18):
    alert("sorry you can't drive the car");
    break;

    case (value >= 18):
    alert("you can drive the car")
    break;

    default:
    alert("give your age number");
    break;
}
}

startTheapp.addEventListener("click", ()=>{
 program();
});

