const form = document.querySelector("form");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");




form.onsubmit = function (event) {
    event.preventDefault();


    if (checkLength(fullName.value, 0)) {
        fullNameError.style.display = "none";
        
    } else {
        fullNameError.style.display ="block";
      
    }

    if (checkLength(subject.value, 10)) {
        subjectError.style.display = "none";
       

    } else {
        subjectError.style.display ="block";
        
        
    }

    if (emailForm(email.value)) {
        emailError.style.display = "none"
       

    } else {
        emailError.style.display = "block";
       
    }

    if (checkLength(address.value, 25)) {
        addressError.style.display = "none"
      

    } else {
        addressError.style.display = "block"
    }
}

function checkLength(value, len) {

    if (value.trim().lenght > len)  {
        return true;
    } else {
        return false;
    }
    
}

function emailForm(email) {
    const regEx = /\S+@\S+\.\S+/;
    const matches = regEx.test(email);
    return matches;
}