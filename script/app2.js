let email = {},
  password = {},
  signInButton;

  
const handleFloatingLabel = function() {

    email = {
        input: document.querySelector(".js-email"),
        field: document.querySelector(".js-email-field"),
      };
    password = {
        input: document.querySelector(".js-password"),
        field: document.querySelector(".js-password-field"),
      };
    
    console.log(email.input.value)
    console.log(email.input.classList.value)

    test = document.querySelector(".js-email-field")
    email.input.addEventListener("focusout", function (){
        // console.log(email.input.value);
        if(email.input.value === ""){
            email.field.classList.remove("is-floating")
        }
        else{
            email.field.classList.add("is-floating")

        }
    })
    password.input.addEventListener("focusout", function (){
        if(password.input.value === ""){
            password.field.classList.remove("is-floating")
        }
        else{
            password.field.classList.add("is-floating")
        }
    })
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!");
  //   enableValidation();
  
    handleFloatingLabel();
    //handlePasswordSwitcher();
    //Test
  });