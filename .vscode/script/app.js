let email = {},
    password = {},
    error = {}
    signInButton;

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
 };

const getDOMElements = new function(){

    email.field = document.querySelector('.js-email-field');
    email.errorMessage = document.querySelector('.js-email-message'); 
    email.input = document.querySelector('.js-email-input');  

    password.field = document.querySelector('.js-password-field'); 
    password.errorMessage = document.querySelector('.js-password-message'); 
    password.input = document.querySelector('.js-password-input'); 

    //Haal ook de button op. Dit mag direct in de variable zitten en moet niet in een object komen
    signInButton = document.querySelector('.js-sign-in-button');

    enableListeners();
}

const addErrors = function(inputObject){
    inputObject.errorMessage.innerText = 'Fiels is empty'
}

    // Met die elementen ingevuld gaan we onder het aanroepen van de getDOMElements-functie een nieuwe functies;
    // Todo maake een fucntie enableListeners
const enableListeners = new function(){
    //Hierin komen er drie listeners: blur listeners voor de e-mail- en wachtwoordvelden en een click-event van de knop.
    //Todo: Maak een blur-event (Koppelingen naar een externe site.) voor het e-mail- en wachtwoordveld1.
    email.input.addEventListener('blur', function(){
        if(isEmpty[email.input.value]){
            addErrors();
        }
    })
    password.input.addEventListener('blur', function(){

    })
    //Todo: Maak een click-listener voor de button2.
    signInButton.addEventListener('click', function(){

    })
    //Todo: We gaan twee helper-functies gebruiken. Bekijk ze, voeg ze toe en probeer te snappen wat er gebeurt.

}

function handleFloatingLabel() {

    
    getDOMElements()
}

function handlePasswordSwitcher() {
    // #1 Haal in deze functie de password-input en de password-toggle op. Doe dit met .js- prefixed classnames.
    const passwordInput = document.querySelector('.js-password');
    const passwordToggle = document.querySelector('.js-toggle-password');
    // #2 We gaan luisteren of er geklikt wordt op de checkbox.
    // Het change-event wou ook wel werken. Dit is voor alle soorten inputs
    passwordToggle.addEventListener('change', function(){
        // #3 Als er geklikt wordt, veranderen we het type van de input van 'password' naar 'text' en vice versa.
        console.log(passwordToggle.checked);
        if(passwordToggle.checked){
            passwordInput.type = 'text';
        }
        else{
            passwordInput.type = 'password';
        }
    })

    //kortere oplossing
    // const passwordOptions = ['password', 'text'];
    // passwordToggle.addEventListener('change', function () {
    //     passwordInput.type = passwordOptions[+this.checked];
    // });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    getDOMElements();
    handleFloatingLabel();
    handlePasswordSwitcher();
    
});