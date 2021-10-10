let email = {},
  password = {},
  signInButton;

const isValidEmailAddress = function (emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};

const isValidPassword = function (fieldValue) {
  return fieldValue.length > 8;
};
const addErrors = function (inputObject, errorMesage) {
  inputObject.errorMessage.innerText = errorMesage;

  inputObject.field.classList.add("has-error");

  inputObject.input.addEventListener("input", doubleCheckEmail);
};

const addErrorsPassword = function (inputObject, errorMesage) {
    inputObject.errorMessage.innerText = errorMesage;
  
    inputObject.field.classList.add("has-error");
  
    inputObject.input.addEventListener("input", doubleCheckPassword);
  };

const removeErrors = function (inputObject) {
  inputObject.errorMessage.innerText = "";

  inputObject.field.classList.remove("has-error");
};

const doubleCheckEmail = function () {
  if (isValidEmailAddress(email.input.value)) {
    email.input.removeEventListener("input", doubleCheckEmail);
    removeErrors(email);
    return;
  }
};

const doubleCheckPassword = function () {
    if (isValidPassword(password.input.value)) {
      password.input.removeEventListener("input", doubleCheckPassword);
      removeErrors(password);
      return;
    }
  };

const enableListenersPassword = function () {
    password.input.addEventListener("blur", function () {
    if (isEmpty(password.input.value)) {
    addErrorsPassword(password, "This field is empty");
      return;
    }
  });
};

const enableListeners = function () {
  email.input.addEventListener("blur", function () {
    if (isEmpty(email.input.value)) {
      addErrors(email, "This field is empty");
      return;
    }
    if (!isValidEmailAddress(email.input.value)) {
      addErrors(email, "This is not a valid email");
      return;
    }
  });
};


const getDOMElements = function () {
  /* Haal voor het email en het password object een: errorMessage, een input en een field - de c-form-field waar we de has-error class op zetten - op (met querySelector). */
  email = {
    input: document.querySelector(".js-email"),
    errorMessage: document.querySelector(".js-email-message"),
    field: document.querySelector(".js-email-field"),
  };
  password = {
    input: document.querySelector(".js-password"),
    errorMessage: document.querySelector(".js-password-message"),
    field: document.querySelector(".js-password-field"),
  };
  signInButton = document.querySelector(".js-sign-in-button");

  enableListeners();
  enableListenersPassword();

//   Todo: Gebruik de voorgaande functies om te checken of de form correct is.
//   Todo: Als de form inputs in orde is, loggen we de beide values van de form in de console.

  signInButton.addEventListener("click", function(e){
    e.preventDefault()
    if (isEmpty(email.input.value)) {
        addErrors(email, "This field is empty");
        return;
    }
    if (!isValidEmailAddress(email.input.value)) {
        addErrors(email, "This is not a valid email");
        return;
    }
    else{
        console.log(email.input.value);
    }
    if (isEmpty(password.input.value)) {
        addErrorsPassword(password, "This field is empty");
        return;
    }
    else{
        console.log(password.input.value);
    }

  });

  handleFloatingLabel();
};


const enableValidation = function () {
  getDOMElements();
};

const handleFloatingLabel = function() {

    // email2 = {
    //     input: document.querySelector(".js-email2"),
    //     field: document.querySelector(".js-email-field2"),
    //   };
    // password2 = {
    //     input: document.querySelector(".js-password2"),
    //     field: document.querySelector(".js-password-field2"),
    //   };
    
    // console.log(email.input)

    // email2.input.addEventListener("focusout", function (){
    //     console.log(email2.input.value);
    //     if(isEmpty(email.input.value)){
    //         console.log("leeg")
    //     }
    //     else{
    //         email2.input.add("is-floating")
    //     }
    // })
    // password2.input.addEventListener("focusout", function (){
    //     if(isEmpty(password2.input.value)){
    //         console.log("leeg")
    //     }
    //     else{
    //         password2.input.add("is-floating")
    //     }
    // })
}

function handlePasswordSwitcher() {
  const passwordInput = document.querySelector(".js-password");
  const passwordOptions = ["password", "text"];
  const passwordToggle = document.querySelector(".js-toggle-password");
  passwordToggle.addEventListener("change", function () {
    passwordInput.type = passwordOptions[+this.checked];
  });
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded!");
  enableValidation();

  // handleFloatingLabel();
  handlePasswordSwitcher();
});
