const nomEtPrenom = document.getElementById('nomEtPrenom');
const cin = document.getElementById('cin');
const email = document.getElementById('email');
const checkSecon = document.getElementById ('secondaire')
const checkuni = document.getElementById("universitaire");
const checkautres = document.getElementById('autres');
const submitForm = document.getElementById('submitForm');
const cancel = document.getElementById("submitCancel");
const form = document.getElementById('form');

console.log(cin)



form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
    if (nomEtPrenom.value === '' || nomEtPrenom.value == null ) {
    alert('Name is required')
    }
    else{
        alert("continue")  
    } 

    let cinValue = cin.value;
    var expression = /^[0-9]+$/;

    if (cinValue === "" || cinValue == null){
        alert('cin is not valid')
    }
    
    else {
        alert("continue")
    }

    if (cinValue.length != 8 ) {
         alert('cin has more than eight numbers')
    }
    else {
        alert("continue")
    }

    if (cinValue.match(expression)) {
        alert('cin must contain only characters from (0 to 9')
    }
    
    else {
        alert("continue")
    }

    if(email.value === "" || email.value == null){
        alert("email is required")
    }
    else{
        alert("continue")
    }
    
    if(email.value.includes("@")){
        alert("continue")
    } 
    else{
        alert("email must have @")
    }

    if  ((nomEtPrenom.value === '' || nomEtPrenom.value == null ) && (cinValue === "" || cinValue == null) && (cinValue.length != 8 ) && (cinValue.match(expression)) && (email.value === "" || email.value == null) && (email.value.includes("@")) ){
    alert ("the form have been validated")
    }
    else {
        alert("form is not valid")
    }
}
   
//    annuler 

cancel.addEventListener('click', {
		
});
