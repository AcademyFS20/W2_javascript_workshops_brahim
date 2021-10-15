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
        
    switch (value){ 
    case (value < 18) :
    alert("sorry you can't drive the car");
    break;

    default:
    alert("you can drive the car")
    
}
}

startTheapp.addEventListener("click", ()=>{
 program();
});

