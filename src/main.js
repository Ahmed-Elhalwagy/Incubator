const navIcon = document.querySelector('.nav-icon');
const mobileNav = document.querySelector(".mobile-nav");

navIcon.addEventListener("click",()=>{
mobileNav.classList.toggle('hidden')
})
window.addEventListener('resize', function() {
    if (screen.width >= 900){
        mobileNav.classList.add("hidden")
    }

})

const application = document.querySelector('.application');

application.addEventListener("click",()=>{
    window.location.href = "#"
})

// SIGN-UP
const name = document.getElementsByName("name")[0];
const email = document.getElementsByName("email")[0];
const password = document.getElementsByName("password")[0];
const profession = document.getElementsByName("profession")[0];

const errorEl = document.getElementById("error");
const sign_up_form = document.getElementById("sign_up")

const errors = []

sign_up_form.addEventListener('submit', e => {
    errors = []
    e.preventDefault();

    if (name.value === "" || name.value == null) {
        errors.push("Name is Required")
    }
    if (email.value === "" || email.value == null) {
        errors.push("Email is Required")
    }
    if (password.value === "" || password.value == null) {
        errors.push("Password is Required")
    }
    if (password.value.length < 6) {
        errors.push("Password Must be longer than 6 characters")
    }
    if (password.value.length > 20) {
        errors.push("Password Must be less than 20 characters")
    }
    if (profession.value === "" || profession.value == null) {
        errors.push("Profession is Required")
    }

    if (errors.length > 0) {
        errorEl.innerText = errors.join(", ")
    }

})

