const changeColor = document.getElementById('changeColor');
let backgroundColor = document.getElementsByClassName('bodyBgColor');
console.log(changeColor);
console.log(backgroundColor);

changeColor.addEventListener("click", ()=> {
    // document.querySelector(".bodyBgColor").style.backgroundColor = 'green';
    document.body.style.backgroundColor = 'green';


});


// fucntion change() {
//     document.body.style.backgroundColor = 'green';
//     console.log(change)
//     // document.querySelector(".bodyBgColor").style.backgroundColor = 'green';

// }