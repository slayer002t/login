const formsignup = document.getElementById("formsignup");
const usernameElement = document.getElementById("username");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const repasswordElement = document.getElementById("repassword");

// check erro
const usernameError = document.getElementById("usernameError"); 
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const repasswordError = document.getElementById("repasswordError");


/**
 * validate dia chi email
 * @param {*} email chuoi email nguoi dung nhap vao
 * @returns du lieu email neu dung dinh dang, undifined neu email khong dung dinh dang
 */

function validateEmail(email)  {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  formsignup.addEventListener("submit", function(e) {
    e.preventDefault();
   
    if(!usernameElement.value) {
        usernameError.style.display = "block";
    } else {
        usernameError.style.display = "none";
    }


    if(!emailElement.value) {
        emailError.style.display = "block";

    } else {
        emailError.style.display = "none";
        if(!validateEmail(emailElement.value)) {
            emailError.style.display = "block";
            emailError.innerHTML = "please enter a valid email.";
        }

    }

    if(!passwordElement.value) {
        passwordError.style.display = "block";   
    } else {
        passwordError.style.display = "none";
    }

    if(!repasswordElement.value) {
        repasswordError.style.display = "block";
    } else {
        repasswordError.style.display = "none";
    }


    if(passwordElement.value !== repasswordElement.value) {
        repasswordError.style.display = "block";
        repasswordError.innerHTML = "Confirm password does not match";
    }

  });

