const container = document.querySelector(".container");

const buttonSignIn = document.getElementById("btn-sign-in");
const buttonSignUp = document.getElementById("btn-sign-up");

buttonSignIn.addEventListener("click", () => {
    container.classList.remove("toggle");
});

buttonSignUp.addEventListener("click", () => {
    container.classList.add("toggle");
});