
//password toggle

function passVisFunc() {
    var x = document.getElementById("passwordVis");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
};

function errorMessages(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__input-error");

    messageElement.textContent = message;
    messageElement.classList.remove(".form--hidden");

};


document.addEventListener("DOMContentLoaded", () => {
    
    const loginForm = document.querySelector("#login");
    const creatAccountForm = document.querySelector("#register");
    const forgetPassForm = document.querySelector("#forgotPass");


    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        
        //perform ajax login
        setFormMessage(loginForm, "error", "#loginError")
    })
    creatAccountForm.addEventListener("submit", e => {
        e.preventDefault();
        
        //perform ajax register

    })
    forgetPassForm.addEventListener("submit", e => {
        e.preventDefault();

        //perform ajax forget Password
    })
});

